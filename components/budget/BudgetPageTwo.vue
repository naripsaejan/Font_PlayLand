<template>
  <div>
    <v-form @submit.prevent="PostPageTwo">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">รายละเอียดค่าใช้จ่าย</p>
        <div class="pb-2">
          <v-col class="d-grid justify-end">
            <v-text-field v-model="id_file" label="เลขที่เอกสาร"></v-text-field>
            <v-dialog
              ref="dialog"
              v-model="modal"
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
                <v-btn text color="primary" @click="modal = false">
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
          <!--  -->
          <div class="d-flex">
            <v-col>
              <v-text-field v-model="presenter" label="ผู้เสนอ"></v-text-field>
            </v-col>
            <v-col
              ><v-text-field v-model="affiliation" label="สังกัด"></v-text-field
            ></v-col>
          </div>
          <!--  -->
          <v-col>
            <v-data-table
              :headers="headers"
              :items="desserts"
              sort-by="name"
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
              <v-text-field
                v-model="sum_txt_total"
                cols="10"
                prefix="("
                suffix=")บาท"
              ></v-text-field>
            </v-col>
            <v-col cols="4" class="d-grid pb-0">
              <v-text-field v-model="total" label="ราคารวม"></v-text-field>
              <v-text-field v-model="discount" label="ส่วนลด"></v-text-field>
              <v-text-field
                v-model="discount_price"
                label="ราคาหลังหักส่วนลด"
              ></v-text-field>
              <v-text-field v-model="vat" label="VAT 7%"></v-text-field>
              <v-text-field
                v-model="sum_total"
                label="รวมเป็นเงินทั้งสิ้น"
              ></v-text-field>
            </v-col>
          </div>
          <!--  -->
          <v-col class="pt-0">
            <v-text-field v-model="note" label="หมายเหตุ"></v-text-field>
            <v-text-field
              v-model="purchasing"
              label="วิธีการจัดซื้อ"
            ></v-text-field>
            <v-text-field
              v-model="condition"
              label="เงื่อนไขการชำระเงิน"
            ></v-text-field>
          </v-col>
          <!--  -->
          <div class="d-flex">
            <v-col>
              <v-select
                :items="items"
                v-model="payment"
                label="วิธีการชำระเงิน"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                :items="items2"
                v-model="bangkok"
                label="ธนาคาร"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="number_bangkok"
                label="เลขที่บัญชี"
              ></v-text-field>
            </v-col>
          </div>
          <!--  -->
          <div class="d-flex justify-end px-0">
            <v-col cols="4">
              <v-text-field
                v-model="name_bangkok"
                label="ชื่อบัญชี"
              ></v-text-field>
            </v-col>
          </div>
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
  props: ['call_fun'],
  data() {
    return {
      budgettwo: ['c', 'd'],
      id_file: '',
      date_file: '',
      presenter: '',
      affiliation: '',
      sum_txt_total: '',
      total: '',
      number_bangkok: '',
      name_bangkok: '',
      bangkok: '',
      payment: '',
      condition: '',
      purchasing: '',
      note: '',
      sum_total: '',
      vat: '',
      discount_price: '',
      discount: '',
      //form vue
      items: ['เงินสด', 'บัตรเครดิต', 'แคชเชียร์'],
      items2: ['กรุงเทพ', 'กรุงไทย', 'กสิกร'],
      modal: false,
      time: null,
      menu2: false,
      modal2: false,
      // data table input
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'ลำดับ', value: 'id', sortable: false },
        { text: 'รายการ', value: 'list', sortable: false },
        { text: 'จำนวน', value: 'total', sortable: false },
        { text: 'หน่วย', value: 'unit', sortable: false },
        { text: 'ราคาต่อหน่วย', value: 'unit_price', sortable: false },
        { text: 'action', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        list: '',
        total: '',
        unit: '',
        unit_price: '',
      },
      defaultItem: {
        id: '',
        list: '',
        total: '',
        unit: '',
        unit_price: '',
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
          id: '001',
          list: 'ผัก',
          total: 2,
          unit: 24,
          unit_price: 48,
        },
      ]
    },
    test() {
      console.log('test', this.desserts)
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
      this.test()

      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }

      this.close()
    },
    PostPageTwo() {
      this.budgettwosend = [
        {
          id_file: this.id_file,
          date_file: this.date_file,
          presenter: this.presenter,
          affiliation: this.affiliation,
          tabel_data: [
            {
              // data_id: req.body.tabel_data[0].data_id,
              // data_list: req.body.tabel_data[0].data_list,
              // data_total: req.body.tabel_data[0].data_total,
              // data_unit: req.body.tabel_data[0].data_unit,
              // data_unit_price: req.body.tabel_data[0].data_unit_price,
            },
          ],
          total: this.total,
          discount: this.discount,
          discount_price: this.discount_price,
          vat: this.vat,
          sum_txt_total: this.sum_txt_total,
          sum_total: this.sum_total,
          note: this.note,
          purchasing: this.purchasing,
          condition: this.condition,
          payment: this.payment,
          bangkok: this.bangkok,
          number_bangkok: this.number_bangkok,
          name_bangkok: this.name_bangkok,
        },
      ]
      this.$emit('createpangtwo', this.budgettwosend)
    },
  },
  watch: {
    call_fun() {
      console.log('call_fun two')
      this.PostPageTwo()
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
