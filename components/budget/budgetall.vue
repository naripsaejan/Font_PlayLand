<template lang="html">
  <div>
    <!-- {{ budget }} -->
    <div
      class="d-grid justify-center"
      v-for="budgets in budget"
      :key="budgets._id"
    >
      <v-card
        class="my-4"
        v-for="budgetones in budgets.budgetone"
        :key="budgetones.id_file"
      >
        <v-list-item three-line style="max-width: 1000px">
          <v-list-item-content>
            <p class="d-flex justify-center">
              แบบเสนอราคาสำหรับเบิกจ่ายงบประมาณ
            </p>
            <div class="d-grid justify-end">
              <p>เลขที่เอกสาร{{ budgetones.id_file }}</p>
              <p>วันที่เอกสาร {{ budgetones.date_file }}</p>
            </div>
            <div class="d-flex justify-center align-center">
              <v-subheader>ผู้เสนอ</v-subheader>
              <v-text-field
                :value="budgetones.presenter"
                readonly
              ></v-text-field>
              <v-subheader>สังกัด</v-subheader>
              <v-text-field
                :value="budgetones.affiliation"
                readonly
              ></v-text-field>
            </div>
            <div>
              <v-subheader
                >ขอเสนอราคาสำหรับเบิกจ่ายงบประมาณเพื่อใช้สำหรับ</v-subheader
              >
              <v-text-field
                class="pl-4"
                :value="budgetones.offerprice"
                readonly
              ></v-text-field>
              <v-subheader>เนื่องจากความจำเป็น</v-subheader>
              <v-text-field
                class="pl-4"
                :value="budgetones.necessity"
                readonly
              ></v-text-field>
              <v-subheader>ดำเนินการด้วยวิธี</v-subheader>
              <v-text-field
                class="pl-4"
                :value="budgetones.action"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-subheader>มีระยะเวลาตั้งแต่วันที่</v-subheader>
              <v-text-field
                class="pl-4"
                :value="budgetones.date_start"
                readonly
              ></v-text-field>
              <v-subheader>ถึงวันที่</v-subheader>
              <v-text-field
                class="pl-4"
                :value="budgetones.date_finished"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-subheader
                >โดยมีรายละเอียดค่าใช้จ่ายตามเอกสารแนบท้าย
                รวมเป็นเงินทั้งสิ้น</v-subheader
              >
              <v-text-field
                class="pl-4"
                :value="budgetones.sum_total"
                suffix="บาท"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-subheader>ตัวอักษร</v-subheader>
              <v-text-field
                class="pl-4"
                :value="budgetones.sum_tatal_text"
                suffix="บาท"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center align-center">
              <v-subheader>เสนอแบบเสนอราคาฉบับนี้เข้าสู่ระบบวันที่</v-subheader>
              <v-text-field
                class="pl-4"
                :value="budgetones.date_in"
                readonly
              ></v-text-field>
              <v-subheader>เวลา</v-subheader>
              <v-text-field
                class="pl-4"
                :value="budgetones.time_in"
                readonly
                suffix="น."
              ></v-text-field>
            </div>

            <div class="d-flex justify-center">
              <v-col class="col-6">
                <div class="col-12 d-flex align-center">
                  <v-subheader>ลงชื่อ</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="budgetones.sing_presenter"
                    readonly
                  ></v-text-field>
                  <v-subheader>ผู้เสนอ</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>(</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="budgetones.confirm_presenter"
                    readonly
                  ></v-text-field>
                  <v-subheader>)</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>วันที่</v-subheader>
                  <v-text-field
                    class="pr-9"
                    :value="budgetones.date_presenter"
                    readonly
                  ></v-text-field>
                </div>
              </v-col>
            </div>
            <div class="d-flex justify-center">
              <v-col class="col-6">
                <div class="col-12 d-flex align-center">
                  <v-subheader>ลงชื่อ</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="budgetones.sing_head"
                    readonly
                  ></v-text-field>
                  <v-subheader>หัวหน้าสังกัด</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>(</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="budgetones.confirm_head"
                    readonly
                  ></v-text-field>
                  <v-subheader>)</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>วันที่</v-subheader>
                  <v-text-field
                    class="pr-9"
                    :value="budgetones.date_head"
                    readonly
                  ></v-text-field>
                </div>
              </v-col>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card
        class="my-4"
        v-for="budgettwos in budgets.budgettwo"
        :key="budgettwos.id_file"
      >
        <!-- {{ budgettwos }} -->
        <v-list-item three-line style="max-width: 1000px">
          <v-list-item-content>
            <p class="d-flex justify-center">
              แบบเสนอราคาสำหรับเบิกจ่ายงบประมาณ
            </p>
            <div class="d-grid justify-end">
              <p>เลขที่เอกสาร{{ budgettwos.id_file }}</p>
              <p>วันที่เอกสาร {{ budgettwos.date_file }}</p>
            </div>
            <div class="d-flex justify-center align-center">
              <v-subheader>ผู้เสนอ</v-subheader>
              <v-text-field
                :value="budgettwos.presenter"
                readonly
              ></v-text-field>
              <v-subheader>สังกัด</v-subheader>
              <v-text-field
                :value="budgettwos.affiliation"
                readonly
              ></v-text-field>
            </div>
            <v-data-table
              :headers="headers"
              :items="desserts"
              hide-default-footer
              class="elevation-1"
            ></v-data-table>
          </v-list-item-content>
        </v-list-item>
        <div class="d-flex">
          <v-col class="d-flex align-end pb-5">
            <v-subheader>ตัวอักษร</v-subheader>
            <v-subheader>(</v-subheader>
            <v-text-field
              :value="budgettwos.sum_txt_total"
              readonly
            ></v-text-field>
            <v-subheader>)</v-subheader>
          </v-col>
          <v-col>
            <v-vol class="d-flex align-center">
              <v-subheader>ราคารวม</v-subheader>
              <v-text-field :value="budgettwos.total" readonly></v-text-field>
            </v-vol>
            <v-vol class="d-flex align-center">
              <v-subheader>ส่วนลด</v-subheader>
              <v-text-field
                :value="budgettwos.discount"
                readonly
              ></v-text-field>
            </v-vol>
            <v-vol class="d-flex align-center">
              <v-subheader>ราคาหลังหักส่วนลด</v-subheader>
              <v-text-field
                :value="budgettwos.discount_price"
                readonly
              ></v-text-field>
            </v-vol>
            <v-vol class="d-flex align-center">
              <v-subheader>VAT 7%</v-subheader>
              <v-text-field :value="budgettwos.vat" readonly></v-text-field>
            </v-vol>
            <v-vol class="d-flex align-center">
              <v-subheader>รวมเป็นเงินทั้งสิ้น</v-subheader>
              <v-text-field
                :value="budgettwos.sum_total"
                readonly
              ></v-text-field>
            </v-vol>
          </v-col>
        </div>
        <v-col class="d-flex align-center">
          <v-subheader>หมายเหตุ</v-subheader>
          <v-text-field :value="budgettwos.note" readonly></v-text-field>
        </v-col>
        <v-col class="d-flex align-center">
          <v-subheader>วิธีการจัดซื้อ</v-subheader>
          <v-text-field :value="budgettwos.purchasing" readonly></v-text-field>
        </v-col>
        <v-col class="d-flex align-center">
          <v-subheader>เงื่อนไขการชำระเงิน</v-subheader>
          <v-text-field :value="budgettwos.condition" readonly></v-text-field>
        </v-col>
        <!-- <div>
          <v-col class="d-flex align-center">
            <v-subheader>เงื่อนไขการชำระเงิน</v-subheader>
            <v-text-field
              :value="budgettwos.conditiong"
              readonly
            ></v-text-field>
          </v-col>
        </div> -->
      </v-card>
      {{ budgets.budgetthree }}
      <!-- <p>dsds {{ budgets.budgetthree.purchase_radio }}</p> -->
      <v-card
        class="my-4"
        v-for="budgetthrees in budgets.budgetthree"
        :key="budgetthrees._id"
      >
        <!-- <p>test1: {{ budgetthrees.purchase_radio }}</p>-->
        <p>
          test2:
          {{ budgetthrees._id }}
        </p>
        <p>test3: {{ budgetthrees.purchase_radio }}</p>
        ssss test3 {{ budgetthrees.purchase_radio[0] }}

        <v-card
          v-for="purchasesloop in budgetthrees.purchase_radio"
          :key="purchasesloop._id"
        >
          ssss{{ purchasesloop._id }}

          <!-- <v-container fluid>
            <p>{{ radios || 'null' }}</p>
            <v-radio-group v-model="radios" mandatory>
              <v-radio label="Radio 1" value="radio-1"></v-radio>
              <v-radio label="Radio 2" value="radio-2"></v-radio>
            </v-radio-group>
          </v-container> -->
        </v-card>
        <!-- {{ budgets.budgetthree.purchase_radio.purchase_id }} -->
        <v-list-item three-line style="max-width: 1000px">
          <v-list-item-content>
            <div id="purchase">
              <p class="mt-2 mx-4">ผลการพิจารณาฝ่ายจัดซื้อ</p>
              <div class="d-flex">
                <v-col class="d-flex align-center">
                  <v-radio-group>
                    <v-radio label="ผ่าน " value="true" class="pr-4"></v-radio>
                  </v-radio-group>
                  <v-subheader>อนุมัติในระบบ</v-subheader>
                </v-col>
              </div>
              <!--  -->
              <div class="d-flex">
                <v-col cols="" class="d-flex align-center">
                  <v-radio-group v-model="radio_purchase">
                    <v-radio label="ไม่ผ่าน" value="false"></v-radio>
                  </v-radio-group>
                  <v-subheader>เนื่องจาก</v-subheader>
                  <v-text-field
                    :disabled="radio_purchase != 'false'"
                    v-model="purchase_txt"
                  ></v-text-field>
                </v-col>
              </div>
              <!--  -->
              <div class="d-flex justify-center">
                <v-col cols="5" class="d-flex align-center">
                  <v-subheader>ลงชื่อ</v-subheader>
                  <v-text-field v-model="purchase_sing"></v-text-field>
                  <v-subheader>ฝ่ายจัดซื้อ</v-subheader>
                </v-col>
                <!--  -->
                <v-col cols="3">
                  <v-dialog
                    ref="dialog_purchase_end"
                    v-model="modal_purchase_end"
                    :return-value.sync="date_purchase_end"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        label="วันที่บันทึกรายการ"
                        v-model="date_purchase_end"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date_purchase_end" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="modal_purchase_end = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.dialog_purchase_end.save(date_purchase_end)
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </div>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      query: '',
      budget: [],
      budgets: [],
      budgetone: [],
      budgettwos: [],
      budgetthrees: [],
      purchasesloop: '',
      radios: null,

      // radio_purchase: this.budgets.budgetthree.purchase_radio.purchase_id,
      //
      headers: [
        {
          text: 'ลำดับที่',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'รายการ', value: 'calories' },
        { text: 'จำนวน', value: 'fat' },
        { text: 'หน่วย', value: 'carbs' },
        { text: 'ราคาต่อหน่วย', value: 'protein' },
        { text: 'รวมเป็นเงิน', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
      ],
    }
  },
  methods: {
    getall() {
      console.log('e')
      const url = `http://localhost:5000/api/v1/budget`
      // const url = `http://localhost:5000/bugetones/612dd36d6894783228f80d2c`
      axios.get(url).then((res) => {
        this.budget = res.data
        // console.log('testget', this.budget)
      })
    },
    handleSearchManga() {
      console.log('e')
      // const url = `https://api.jikan.moe/v3/search/manga?q=${this.query}&page=1`
      const url = `http://localhost:5000/bugetones`
      axios.get(url).then((res) => {
        console.log(res.data)
        //   this.results = res.data
      })
    },
  },
  mounted() {
    this.getall()
  },
}
</script>

<style lang="css" scoped></style>
