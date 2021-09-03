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

      <v-card
        class="my-4"
        v-for="budgetthrees in budgets.budgetthree"
        :key="budgetthrees._id"
      >
        <p class="mt-2 mx-4">ผลการพิจารณาฝ่ายจัดซื้อ</p>
        <div
          v-for="purchasesloop in budgetthrees.purchase_radio"
          :key="purchasesloop._id"
        >
          <v-container>
            <div class="d-flex">
              <v-col class="d-flex align-center">
                <v-radio-group v-model="purchasesloop.purchase_id" readonly>
                  <v-radio label="ผ่าน " value="true" class="pr-4"></v-radio>
                </v-radio-group>
                <v-subheader>อนุมัติในระบบ วันที่</v-subheader>
                <v-text-field
                  :disabled="purchasesloop.purchase_id != 'true'"
                  v-model="purchasesloop.purchase_date"
                  readonly
                ></v-text-field>
                <v-subheader>เวลา</v-subheader>
                <v-text-field
                  :disabled="purchasesloop.purchase_id != 'true'"
                  v-model="purchasesloop.purchase_time"
                  readonly
                  suffix="น."
                ></v-text-field>
              </v-col>
            </div>
            <div class="d-flex">
              <v-col cols="" class="d-flex align-center">
                <v-radio-group v-model="purchasesloop.purchase_id" readonly>
                  <v-radio label="ไม่ผ่าน" value="false"></v-radio>
                </v-radio-group>
                <v-subheader>เนื่องจาก</v-subheader>
                <v-text-field
                  :disabled="purchasesloop.purchase_id != 'false'"
                  v-model="purchasesloop.purchase_txt"
                  readonly
                ></v-text-field>
              </v-col>
            </div>
          </v-container>
        </div>
        <div class="d-flex justify-center">
          <v-col cols="5" class="d-flex align-center">
            <v-subheader>ลงชื่อ</v-subheader>
            <v-text-field v-model="budgetthrees.purchase_sing"></v-text-field>
            <v-subheader>ฝ่ายจัดซื้อ</v-subheader>
          </v-col>
          <v-col cols="3" class="d-flex align-center">
            <v-subheader>วันที่บันทึกรายการ</v-subheader>
            <v-text-field
              v-model="budgetthrees.purchase_date"
              readonly
            ></v-text-field>
          </v-col>
        </div>
        <p class="mt-2 mx-4">ผลการพิจารณาฝ่ายบริหาร</p>
        <div
          v-for="manageloop in budgetthrees.manage_radio"
          :key="manageloop._id"
        >
          <v-container>
            <div class="d-flex">
              <v-col class="d-flex align-center">
                <v-radio-group v-model="manageloop.manage_id" readonly>
                  <v-radio label="ผ่าน " value="true" class="pr-4"></v-radio>
                </v-radio-group>
                <v-subheader>อนุมัติในระบบ วันที่</v-subheader>
                <v-text-field
                  :disabled="manageloop.manage_id != 'true'"
                  v-model="manageloop.manage_date"
                  readonly
                ></v-text-field>
                <v-subheader>เวลา</v-subheader>
                <v-text-field
                  :disabled="manageloop.manage_id != 'true'"
                  v-model="manageloop.manage_time"
                  readonly
                  suffix="น."
                ></v-text-field>
              </v-col>
            </div>
            <div class="d-flex">
              <v-col cols="" class="d-flex align-center">
                <v-radio-group v-model="manageloop.manage_id" readonly>
                  <v-radio label="ไม่ผ่าน" value="false"></v-radio>
                </v-radio-group>
                <v-subheader>เนื่องจาก</v-subheader>
                <v-text-field
                  :disabled="manageloop.manage_id != 'false'"
                  v-model="manageloop.manage_txt"
                  readonly
                ></v-text-field>
              </v-col>
            </div>
          </v-container>
        </div>
        <div class="d-flex justify-center">
          <v-col cols="5" class="d-flex align-center">
            <v-subheader>ลงชื่อ</v-subheader>
            <v-text-field v-model="budgetthrees.manage_sing"></v-text-field>
            <v-subheader>ฝ่ายจัดซื้อ</v-subheader>
          </v-col>
          <!--  -->
          <v-col cols="3" class="d-flex align-center">
            <v-subheader>วันที่บันทึกรายการ</v-subheader>
            <v-text-field
              v-model="budgetthrees.manage_date"
              readonly
            ></v-text-field>
          </v-col>
        </div>
        <!--  -->
        <div>
          <p class="mt-2 ml-4">การจ่ายเงินโดยฝ่ายบัญชี</p>
          <v-col cols="12" class="d-flex">
            <v-col cols="auto">
              <v-text-field
                v-model="budgetthrees.account_payment"
                readonly
              ></v-text-field>
            </v-col>
          </v-col>
          <!--  -->
          <div
            v-for="accountloop in budgetthrees.account_radio"
            :key="accountloop._id"
          >
            <v-col class="d-flex">
              <v-radio-group
                class="pr-4"
                v-model="accountloop.radio_id"
                readonly
              >
                <v-radio label="ผ่าน" value="true"></v-radio>
              </v-radio-group>
              <v-text-field
                class="pr-4"
                label="แคชเชียร์เช็คธนาคาร"
                :disabled="accountloop.radio_id != 'true'"
                v-model="accountloop.cashier"
                readonly
              ></v-text-field>
              <v-text-field
                class="pr-4"
                label="เลขที่บัญชี"
                :disabled="accountloop.radio_id != 'true'"
                v-model="accountloop.numberaccount"
                readonly
              ></v-text-field>
              <v-text-field
                v-model="accountloop.confirm_account"
                class="pr-4"
                cols="10"
                label="สั่งจ่าย"
                :disabled="accountloop.radio_id != 'true'"
                readonly
              ></v-text-field>

              <v-text-field
                v-model="accountloop.cashier_date"
                label="วันที่"
                readonly
                :disabled="accountloop.radio_id != 'true'"
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-radio-group
                class="pr-4"
                v-model="accountloop.radio_id"
                readonly
              >
                <v-radio label="ไม่ผ่าน" value="false"></v-radio>
              </v-radio-group>

              <v-text-field
                v-model="accountloop.bangkok"
                class="pr-4"
                label="โอนเงิน ธนาคาร"
                :disabled="accountloop.radio_id != 'false'"
                readonly
              ></v-text-field>

              <v-text-field
                v-model="accountloop.number_bangkok"
                class="pr-4"
                label="เลขที่บัญชี"
                :disabled="accountloop.radio_id != 'false'"
                readonly
              ></v-text-field>

              <v-text-field
                v-model="accountloop.name_bangkok"
                cols="10"
                label="ชื่อบัญชี"
                :disabled="accountloop.radio_id != 'false'"
                readonly
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-text-field
                v-model="budgetthrees.total_money"
                class="pr-4"
                label="จำนวนทั้งสิ้น"
                suffix="บาท"
                readonly
              ></v-text-field>
              <v-text-field
                v-model="budgetthrees.total_moneytext"
                prefix="("
                suffix=")บาท"
                readonly
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col>
              <v-text-field
                v-model="budgetthrees.note"
                label="หมายเหตุ"
                readonly
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col class="d-flex justify-center align-center">
              <v-subheader>วันที่จ่ายเงิน</v-subheader>
              <v-text-field
                v-model="budgetthrees.date_pay"
                readonly
              ></v-text-field>
              <v-subheader>เวลา</v-subheader>
              <v-text-field
                v-model="budgetthrees.time_pay"
                readonly
                suffix="น."
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-col>
                <v-col class="d-flex px-0">
                  <v-col class="px-2 d-flex align-center">
                    <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
                    <v-text-field
                      v-model="budgetthrees.person_pay"
                    ></v-text-field>
                    <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader>
                  </v-col>
                </v-col>
                <v-col class="d-flex align-center" cols="12">
                  <v-subheader class="px-0">อนุมัติในระบบ วันที่</v-subheader>
                  <v-col>
                    <v-text-field
                      v-model="budgetthrees.approve_day"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-subheader class="px-0">เวลา</v-subheader>
                  <v-col class="d-flex align-center">
                    <v-text-field
                      v-model="budgetthrees.approve_time"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-col>
              </v-col>
              <v-col>
                <v-col class="d-flex px-0">
                  <v-col class="px-2 d-flex align-center">
                    <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
                    <v-text-field
                      v-model="budgetthrees.person_receive"
                    ></v-text-field>
                    <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
                  </v-col>
                </v-col>
              </v-col>
            </v-col>
          </div>
        </div>
        <!--  -->
        <v-col class="d-flex align-center">
          <v-col class="px-2 d-flex">
            <v-subheader class="pl-0"
              >ได้รับใบเสร็จรับเงิน / ใบกำกับภาษี และตรวจสอบถูกต้อง
              วันที่</v-subheader
            >

            <v-text-field
              v-model="budgetthrees.slip_date"
              readonly
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col
          class="d-felx align-center px-0"
          v-for="sliploop in budgetthrees.slip_radio"
          :key="sliploop._id"
        >
          <v-radio-group v-model="sliploop.radio_id">
            <v-col
              ><v-radio value="ไม่มีเงินต้องคืน" label="ไม่มีเงินต้องคืน">
              </v-radio
            ></v-col>

            <v-col class="d-flex align-center">
              <v-radio value="คืนเงินจำนวน" label="คืนเงินจำนวน"> </v-radio>
              <v-text-field
                class="px-4"
                label="จำนวนทั้งสิ้น"
                suffix="บาท"
                :disabled="sliploop.radio_id != 'คืนเงินจำนวน'"
                v-model="sliploop.total"
                readonly
              ></v-text-field>
              <v-text-field
                v-model="sliploop.txt_total"
                :disabled="sliploop.radio_id != 'คืนเงินจำนวน'"
                prefix="("
                suffix=")บาท"
                readonly
              ></v-text-field>
            </v-col>
          </v-radio-group>
        </v-col>

        <v-col class="d-flex pl-0">
          <v-col>
            <v-col class="d-flex align-center">
              <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
              <v-text-field
                v-model="budgetthrees.slipperson_pay"
              ></v-text-field>
              <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader>
            </v-col>
            <v-col class="d-flex align-center" cols="12">
              <v-subheader class="px-0">อนุมัติในระบบ วันที่</v-subheader>
              <v-col class="py-0">
                <v-text-field
                  v-model="budgetthrees.slip_date"
                  readonly
                ></v-text-field>
              </v-col>
              <v-subheader class="px-0">เวลา</v-subheader>
              <v-col class="py-0">
                <v-text-field
                  v-model="budgetthrees.slipapprove_time"
                  readonly
                ></v-text-field>
              </v-col>
            </v-col>
          </v-col>
          <v-col>
            <v-col class="d-flex align-center">
              <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
              <v-text-field
                v-model="budgetthrees.slipperson_receive1"
              ></v-text-field>
              <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
            </v-col>
            <v-col class="d-flex align-center">
              <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>

              <v-text-field
                v-model="budgetthrees.slipperson_receive2"
              ></v-text-field>
              <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
            </v-col>
          </v-col>
        </v-col>
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
      manageloop: '',
      sliploop: '',
      accountloop: '',
      radios: '11',
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
