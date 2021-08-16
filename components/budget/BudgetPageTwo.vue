<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">รายละเอียดค่าใช้จ่าย</p>
        <div class="pb-2">
          <v-col class="d-grid justify-end">
            <v-text-field
              v-model="firstname1"
              label="เลขที่เอกสาร"
            ></v-text-field>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date_one"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date_one"
                  label="วันที่"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date_one" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(date_one)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <!--  -->
          <div class="d-flex">
            <v-col>
              <v-text-field v-model="firstname2" label="ผู้เสนอ"></v-text-field>
            </v-col>
            <v-col
              ><v-text-field v-model="firstname3" label="สังกัด"></v-text-field
            ></v-col>
          </div>
          <!--  -->
          <v-col>
            <v-data-table
              :headers="headers"
              :items="desserts"
              sort-by="calories"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <!-- <v-toolbar-title>My CRUD</v-toolbar-title> -->
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
                        เพิ่มข้อมูล
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                      </v-card-title>
                      <!-- card edit -->
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.name"
                                label="ลำดับ"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.calories"
                                label="รายการ"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="จำนวน" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.fat"
                                label="หน่วย"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.carbs"
                                label="ราคาต่อหน่วย"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.protein"
                                label="รวมเป็นเงิน"
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
          </v-col>
          <!--  -->
          <div class="d-flex align-end">
            <v-col cols="8" class="d-flex pb-0">
              <v-subheader cols="2" class="d-flex align-end pl-0"
                >ตัวอักษร</v-subheader
              >
              <v-text-field cols="10" prefix="(" suffix=")บาท"></v-text-field>
            </v-col>
            <v-col cols="4" class="d-grid pb-0">
              <v-text-field v-model="firstname" label="ราคารวม"></v-text-field>
              <v-text-field v-model="firstname" label="ส่วนลด"></v-text-field>
              <v-text-field
                v-model="firstname"
                label="ราคาหลังหักส่วนลด"
              ></v-text-field>
              <v-text-field v-model="firstname" label="VAT 7%"></v-text-field>
              <v-text-field
                v-model="firstname"
                label="รวทเป็นเงินทั้งสิ้น"
              ></v-text-field>
            </v-col>
          </div>
          <!--  -->
          <v-col class="pt-0">
            <v-text-field v-model="firstname" label="หมายเหตุ"></v-text-field>
            <v-text-field
              v-model="firstname"
              label="วิธีการจัดซื้อ"
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              label="เงื่อนไขการชำระเงิน"
            ></v-text-field>
          </v-col>
          <!--  -->
          <div class="d-flex">
            <v-col>
              <v-select :items="items" label="วิธีการชำระเงิน"></v-select>
            </v-col>
            <v-col>
              <v-select :items="items2" label="ธนาคาร"></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="firstname"
                label="เลขที่บัญชี"
              ></v-text-field>
            </v-col>
          </div>
          <!--  -->
          <div class="d-flex justify-end px-0">
            <v-col cols="4">
              <v-text-field
                v-model="firstname"
                label="ชื่อบัญชี"
              ></v-text-field>
            </v-col>
          </div>
        </div>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['เงินสด', 'บัตรเครดิต', 'แคชเชียร์'],
      items2: ['กรุงเทพ', 'กรุงไทย', 'กสิกร'],
      valid: false,
      firstname: '',
      firstname1: '',
      firstname2: '',
      firstname3: '',
      lastname: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      date_one: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal: false,
      time: null,
      menu2: false,
      modal2: false,
      // data table input
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ลำดับ',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'รายการ', value: 'calories' },
        { text: 'จำนวน', value: 'fat' },
        { text: 'หน่วย', value: 'carbs' },
        { text: 'ราคาต่อหน่วย', value: 'protein' },
        { text: 'รวมเป็นเงิน', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }
  },
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
    initialize() {
      this.desserts = [
        {
          name: '001',
          calories: 'ผัก',
          fat: 2,
          carbs: 24,
          protein: 48,
        },
        {
          name: '002',
          calories: 'ขนม',
          fat: 2,
          carbs: 24,
          protein: 48,
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
