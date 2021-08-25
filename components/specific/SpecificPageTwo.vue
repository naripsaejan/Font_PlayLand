<template>
  <div>
    <v-form @submit.prevent="adddate">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">รายละเอียดค่าใช้จ่าย</p>
        <div>
          <v-col class="d-grid justify-end">
            <v-text-field v-model="id_file" label="เลขที่เอกสาร"></v-text-field>
            <v-dialog
              ref="dialog"
              v-model="modal_date_file"
              :return-value.sync="date_file"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date_file"
                  label="วันที่"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date_file" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_date_file = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(date_file)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col class="d-flex">
            <v-text-field
              v-model="presenter"
              class="pr-2"
              label="ผู้เสนอ"
            ></v-text-field>
            <v-text-field
              v-model="affiliation"
              class="pl-2"
              label="สังกัด"
            ></v-text-field>
          </v-col>
        </div>
        <div>
          <template>
            <v-data-table
              :headers="headers"
              :items="desserts"
              sort-by="calories"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>My CRUD</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        New Item
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.name"
                                label="Dessert name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.calories"
                                label="Calories"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.fat"
                                label="Fat (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.carbs"
                                label="Carbs (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.protein"
                                label="Protein (g)"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">
                          Cancel
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="save">
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5"
                        >Are you sure you want to delete this
                        item?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancel</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize"> Reset </v-btn>
              </template>
            </v-data-table>
          </template>
        </div>
        <div>
          <v-col class="d-flex">
            <v-text-field
              v-model="total"
              label="ตัวอักษร"
              prefix="("
              suffix=")บาท"
            ></v-text-field>
            <v-text-field
              v-model="txt_total"
              class="px-2"
              label="รวมเป็นเงินทั้งสิ้น"
            ></v-text-field>
          </v-col>
        </div>
      </v-row>
      <div>
        <v-btn type="submit" value="Submit" class="button-pr btn-send"
          >ส่งข้อมูล</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    id_file: '',
    date_file: '',
    modal_date_file: false,
    presenter: '',
    affiliation: '',
    total: '',
    txt_total: '',
    headers: [
      {
        text: 'ลำดับที่',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'รายการ', value: 'calories' },
      { text: 'จำนวน', value: 'fat' },
      { text: 'หนวย', value: 'carbs' },
      { text: 'ราคาต่อหน่วย', value: 'protein' },
      { text: 'รวมเป็นเงิน', value: 'sumtotal' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      sumtotal: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      sumtotal: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    adddate() {
      axios.post('http://localhost:5000/specifictwos/add', {
        id_file: this.id_file,
        date_file: this.date_file,
        presenter: this.presenter,
        affiliation: this.affiliation,
        total: this.total,
        txt_total: this.txt_total,
      })
    },
    initialize() {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sumtotal: 10,
        },
      ]
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
