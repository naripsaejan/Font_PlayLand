<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1"> page 1 </v-stepper-step>

        <v-stepper-content step="1" class="d-flex justify-center">
          <v-card
            class="mb-12"
            elevation="2"
            style="max-width: 1000px"
            outlined
            shaped
          >
            <BudgetPageOne @createpangone="testpageone" :call_fun="call_fun" />
          </v-card>
          <v-btn color="primary" @click="e6 = 2"> หน้าถัดไป </v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="e6 > 2" step="2"> page 2 </v-stepper-step>
        <v-stepper-content step="2" class="d-flex justify-center">
          <v-card
            class="mb-12"
            elevation="2"
            outlined
            shaped
            style="max-width: 1000px"
          >
            <BudgetPageTwo @createpangtwo="testpagetwo" :call_fun="call_fun" />
          </v-card>
          <v-btn color="primary" @click="e6 = 3">หน้าถัดไป</v-btn>
          <v-btn color="primary" @click="e6 = 1"> ย้อนกลับ </v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="e6 > 3" step="3"> page 3 </v-stepper-step>
        <v-stepper-content
          step="3"
          class="d-flex justify-center"
          elevation="2"
          outlined
          shaped
        >
          <v-card
            class="mb-12"
            elevation="2"
            outlined
            shaped
            style="max-width: 1000px"
          >
            <BudgetPageTree
              @createpangthree="testpagethree"
              :call_fun="call_fun"
            />
          </v-card>
          <!-- <v-btn color="primary" @click="e6 = 4">หน้าถัดไป</v-btn> -->
          <v-btn color="primary" @click="e6 = 2">ย้อนกลับ</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-app>
    <v-btn @click="call_fun = !call_fun">call fun</v-btn>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['item'],
  components: {
    BudgetPageOne: () => import('~/components/budget/BudgetPageOne.vue'),
    BudgetPageTwo: () => import('~/components/budget/BudgetPageTwo.vue'),
    BudgetPageTree: () => import('~/components/budget/BudgetPageTree.vue'),
  },
  data() {
    return {
      e6: 1,
      show: false,
      call_fun: null,
      word: [],
      budgetones: [],
    }
  },
  methods: {
    // http://localhost:5000/api/v1/budget/
    async testpageone(budgetonesend) {
      await console.log('testpageone1', budgetonesend)
      await console.log('testpageone23', (this.budgetones = budgetonesend))

      // let words = ['one', 'two', 'three', 'four'];
      // await budgetonesend.forEach((word) => {
      //   console.log('testpageone3', word)
      // })
    },
    async testpagetwo(budgettwo) {
      await console.log('testpagetwo', budgettwo)
    },
    async testpagethree(budgetthree) {
      await console.log('testpagethree', budgetthree)
      this.addGin()
    },
    addGin() {
      console.log('111', this.budgetones)
      axios.post('http://localhost:5000/api/v1/budget/', {
        budgetone: this.budgetones,
        budgettwo: [
          {
            id_file: '222',
            date_file: '11/11/1111',
            presenter: 'นริพภ์ แซ่จัน',
            affiliation: 'สังกัด',
            total: 'ราคารวม',
            discount: 'ส่วนลด',
            discount_price: 'ราคาหักส่วนลด',
            vat: '7%',
            sum_txt_total: 'รวมเป็นเงินทั้งสิ้นตัวอักษร',
            sum_total: 'รวมเป็นเงินทั้งสิ้น',
            note: 'หมายเหตุ',
            purchasing: 'วิธีการจัดซื้อ',
            condition: 'เงื่อนไขการชำระเงิน',
            payment: 'วิธีการชำระเงิน',
            bangkok: 'ธนาคาร',
            number_bangkok: 'เลขที่บัญชี',
            name_bangkok: 'ชื่อบัญชี',
            tabel_data: [
              {
                data_id: 'req.body.budgettwo[0].tabel_data[0].data_id',
                data_list: 'req.body.budgettwo[0].tabel_data[0].data_list',
                data_total: 'req.body.budgettwo[0].tabel_data[0].data_total',
                data_unit: 'req.body.budgettwo[0].tabel_data[0].data_unit',
                data_unit_price:
                  'req.body.budgettwo[0].tabel_data[0].data_unit_price',
              },
            ],
          },
        ],
        budgetthree: [
          {
            purchase_radio: [
              {
                purchase_id: 'true',
                purchase_date: '',
                purchase_time: '',
                purchase_txt: 'ไม่ผ่านเนื่องจาก1',
              },
            ],
            purchase_sing: 'นริพภ์1',
            purchase_date: '2021-08-28',
            manage_radio: [
              {
                manage_id: 'false',
                manage_date: '',
                manage_time: '',
                manage_txt: 'ไม่ผ่านเนื่องจาก2',
              },
            ],
            manage_sing: 'นริพภ์2',
            manage_date: '2021-08-28',
            account_radio: [
              {
                radio_id: 'false',
                cashier: '',
                numberaccount: '',
                confirm_account: '',
                cashier_date: '',
                bangkok: 'bangkok',
                number_bangkok: 'number_bangkok',
                name_bangkok: 'name_bangkok',
              },
            ],
            account_payment: 'เงินสด',
            total_money: '1000',
            total_moneytext: 'หนึ่งพัน',
            note: 'หมายเหตุ',
            date_pay: '2021-08-29',
            time_pay: '18:28',
            person_pay: 'person_pay',
            person_receive: 'person_receive',
            approve_day: '2021-08-28',
            approve_time: '18:23',
            slip_radio: [
              {
                radio_id: 'คืนเงินจำนวน',
                total: '1000',
                txt_total: 'หนึ่งพัน',
              },
            ],
            slip_date: '2021-08-31',
            slipperson_pay: 'slipperson_pay',
            slipperson_receive1: 'slipperson_receive1',
            slipapprove_day: 'slipapprove_day',
            slipapprove_time: '12:12',
            slipperson_receive2: 'slipperson_receive2',
          },
        ],
      })
    },
    // pagesubmit() {
    //   console.log('asdas')
    //   this.$emit('')
    //   // e6 = 2
    // },
  },
}
</script>

<style lang="scss" scoped>
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
