<template>
  <div>
    <v-form @submit.prevent="adddate">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">
          แบบสรุปยอดการใช้จ่ายทำการตลาดสำหรับเบิกงบประมาณ
        </p>
        <div id="paragraphOne">
          <v-col class="d-grid justify-end">
            <v-text-field v-model="id_file" label="เลขที่เอกสาร"></v-text-field>
            <v-dialog
              ref="dialog_file"
              v-model="modal_file"
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
                <v-btn text color="primary" @click="modal_file = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog_file.save(date_file)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col class="d-flex px-0">
            <v-text-field
              v-model="presenter"
              class="col"
              label="ผู้เสนอ"
            ></v-text-field>
            <v-text-field
              v-model="affiliation"
              class="col"
              label="สังกัด"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex px-0 align-center">
            <v-subheader class="col-auto"
              >ขอชี้แจงสรุปการใช้จ่ายงบประมาณตามที่ได้รับเมื่อวันที่</v-subheader
            >
            <v-col>
              <v-dialog
                ref="clarify_information"
                v-model="modal_clarify_information"
                :return-value.sync="clarify_information"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="clarify_information"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="clarify_information" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="modal_clarify_information = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.clarify_information.save(clarify_information)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-col>
          <v-col class="d-flex px-0">
            <v-text-field
              v-model="total"
              class="col"
              label="จำนวนทั้งสิ้น"
              prefix=""
              suffix="บาท"
            ></v-text-field>
            <v-text-field
              v-model="txt_total"
              class="col"
              label="ตัวอักษร"
              prefix="("
              suffix="บาท)"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex px-0 align-center">
            <v-subheader class="col-2">ใช้จ่ายระหว่าง</v-subheader>
            <v-col>
              <v-dialog
                class="col-5"
                ref="dialog_start"
                v-model="modal_start"
                :return-value.sync="date_start"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_start"
                    label="ตั้งแต่วันที่"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_start" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_start = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_start.save(date_start)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col>
              <v-dialog
                class="col-5"
                ref="dialog_stop"
                v-model="modal_stop"
                :return-value.sync="date_stop"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_stop"
                    label="ถึงวันที่"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_stop" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_stop = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_stop.save(date_stop)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-col>
          <div class="d-flex px-0 align-center">
            <v-subheader cols="auto"
              >โดยมีรายละเอียดการใช้จ่ายทำการตลาดตามเอกสารแนบท้าย</v-subheader
            >
            <v-col>
              <v-text-field
                v-model="sum_total"
                label="รวมเป็นเงินทั้งสิ้น"
                suffix="บาท"
              ></v-text-field>
            </v-col>
          </div>
          <div class="d-flex px-0 align-center">
            <v-col cols="auto pl-0">
              <v-subheader>ตัวอักษร</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="sum_total_txt"
                prefix="("
                suffix=")บาท"
              ></v-text-field>
            </v-col>
          </div>

          <v-col class="d-flex align-center px-0">
            <v-subheader class="justify-start"
              >เสนอแบบเสนอราคาฉบับนี้เข้าสู่ระบบวันที</v-subheader
            >
            <v-col>
              <v-dialog
                ref="dialog_offer_date"
                v-model="modal_offer_date"
                :return-value.sync="offer_date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="offer_date"
                    label="วันที่"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="offer_date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_offer_date = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_offer_date.save(offer_date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog></v-col
            >
            <v-col>
              <v-dialog
                ref="dialog_offer_time"
                v-model="modal_offer_time"
                :return-value.sync="offer_time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="offer_time"
                    label="เวลา"
                    prepend-inner-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="modal_offer_time"
                  v-model="offer_time"
                  format="24hr"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_offer_time = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_offer_time.save(offer_time)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </v-col>
          <div class="d-grid justify-center">
            <v-col class="d-flex justify-center align-center py-0">
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">ลงชื่อ</v-subheader>
              </v-col>
              <v-col cols="10" class="py-0">
                <v-text-field v-model="sing_presenter"></v-text-field
              ></v-col>
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">ผู้เสนอ</v-subheader></v-col
              >
            </v-col>

            <v-col class="d-flex justify-center align-center py-0">
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">(</v-subheader>
              </v-col>
              <v-col cols="10" class="py-0">
                <v-text-field v-model="confirm_presenter"></v-text-field>
              </v-col>
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">)</v-subheader>
              </v-col>
            </v-col>

            <div class="d-flex justify-center align-center py-0">
              <v-col cols="10" class="px-0">
                <v-dialog
                  ref="dialog_date_presenter"
                  v-model="modal_date_presenter"
                  :return-value.sync="date_presenter"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="pt-0 px-6"
                      v-model="date_presenter"
                      label="วันที่"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date_presenter" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal_date_presenter = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_date_presenter.save(date_presenter)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </div>
          </div>
        </div>
        <hr />
        <p class="mt-2 ">ฝ่ายบัญชีตรวจสอบเอกสารแนบท้ายแล้วพิจารณาว่า</p>
        <div id="paragraphTwo">
          <div class="d-flex">
            <v-col class="d-flex align-center">
              <v-radio-group v-model="file_check">
                <v-radio label="ผ่าน " value="true" class="pr-4"></v-radio>
              </v-radio-group>
              <v-subheader>เอกสารถูกต้องครบถ้วนทั้งหมด</v-subheader>
              <v-dialog
                ref="dialog_file_date"
                v-model="modal_file_date"
                :return-value.sync="file_date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="file_date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :disabled="file_check != 'true'"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="file_date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_file_date = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_file_date.save(file_date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </div>
          <div class="d-flex">
            <v-col cols="" class="d-flex align-center">
              <v-radio-group v-model="file_check">
                <v-radio label="ไม่ผ่าน" value="false"></v-radio>
              </v-radio-group>
              <v-subheader
                >แก้ไขเปลี่ยนแปลงจำนวนเงินทั้งสิ้นจากเดิมเป็น</v-subheader
              >
              <v-text-field
                class="px-2"
                :disabled="file_check != 'false'"
                v-model="file_editfile"
                suffix="บาท"
              ></v-text-field>
              <v-text-field
                v-model="file_txt_total"
                :disabled="file_check != 'false'"
                label="ตัวอักษร"
                prefix="("
                suffix=")บาท"
              ></v-text-field>
            </v-col>
          </div>

          <div class="d-flex px-0">
            <v-col cols="2">
              <v-subheader>หมายเหตุ</v-subheader>
            </v-col>
            <v-col cols="10">
              <v-text-field v-model="note"></v-text-field>
            </v-col>
          </div>
          <div class="d-flex justify-center">
            <v-col cols="4">
              <v-dialog
                ref="dialog_date_inspector"
                v-model="modal_date_inspector"
                :return-value.sync="date_inspector"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_inspector"
                    label="อนุมัติในระบบวันที่2"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_inspector" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="modal_date_inspector = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_date_inspector.save(date_inspector)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="1" class="d-flex align-center justify-end px-0">
              <v-subheader class="px-0">ลงชื่อ</v-subheader>
            </v-col>
            <v-col cols="4" class="px-2">
              <v-text-field v-model="sing_inspector"></v-text-field>
            </v-col>
            <v-col cols="1" class="d-flex align-center px-0">
              <v-subheader class="px-0">ผู้ตรวจสอบ</v-subheader>
            </v-col>
          </div>
        </div>
        <hr />
        <div id="paragraphThree">
          <div class="d-flex px-0">
            <v-col cols="6">
              <v-text-field
                v-model="receive_money"
                label="ได้รับเงินจำนวนทั้งสิ้น"
                suffix="บาท"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="receive_money_txt"
                label="ตัวอักษร"
                prefix="("
                suffix="บาท )"
              ></v-text-field>
            </v-col>
          </div>
          <v-col class="d-felx align-center px-0">
            <v-radio-group v-model="money_check">
              <v-col><v-radio value="true" label="เงินสด"> </v-radio></v-col>

              <v-col class="d-flex align-center pr-0">
                <v-radio value="false" label="โอนเงิน"> </v-radio>
                <v-col>
                  <v-select
                    :disabled="money_check != 'false'"
                    v-model="money_bankok"
                    :items="items2"
                    label="ธนาคาร"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    :disabled="money_check != 'false'"
                    v-model="name_bankok"
                    label="ชื่อบัญชี"
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    :disabled="money_check != 'false'"
                    v-model="number_bankok"
                    label="เลขที่บัญชี"
                  ></v-text-field>
                </v-col>
              </v-col>
            </v-radio-group>
          </v-col>
          <v-col class="d-flex align-center">
            <v-subheader cols="" class="pl-0">หมายเหตุ</v-subheader>
            <v-text-field cols="" v-model="money_note"></v-text-field>
          </v-col>
          <div class="d-flex pl-10">
            <v-col cols="3">
              <v-dialog
                ref="dialog_money_day"
                v-model="modal_money_day"
                :return-value.sync="money_day"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="money_day"
                    prepend-icon="mdi-calendar"
                    label="วันที่"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="money_day" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_money_day = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_money_day.save(money_day)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>

            <v-col cols="3">
              <v-dialog
                ref="dialog_money_time"
                v-model="modal_money_time"
                :return-value.sync="money_time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="money_time"
                    label="เวลา"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="modal_money_time"
                  v-model="money_time"
                  format="24hr"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_money_time = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_money_time.save(money_time)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </div>
          <div class="d-flex">
            <v-col cols="6">
              <div class="d-grid justify-center">
                <v-col class="d-flex justify-center align-center py-0">
                  <v-col cols="auto" class="py-0">
                    <v-subheader class="px-0">ลงชื่อ</v-subheader>
                  </v-col>
                  <v-col cols="10" class="py-0">
                    <v-text-field v-model="sing_money_inspector"></v-text-field
                  ></v-col>
                  <v-col cols="auto" class="py-0">
                    <v-subheader class="px-0">ผู้เสนอ</v-subheader></v-col
                  >
                </v-col>
                <div class="d-flex justify-center align-center py-0">
                  <v-col cols="10" class="px-0">
                    <v-dialog
                      ref="dialog_date_money"
                      v-model="modal_date_money"
                      :return-value.sync="date_money"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="pt-0 px-6"
                          v-model="date_money"
                          label="อนุมัติในระบบวันที่"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date_money" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="modal_date_money = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog_date_money.save(date_money)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="d-grid justify-center">
                <v-col class="d-flex justify-center align-center py-0">
                  <v-col cols="auto" class="py-0">
                    <v-subheader class="px-0">ลงชื่อ</v-subheader>
                  </v-col>
                  <v-col cols="10" class="py-0">
                    <v-text-field v-model="sing_payee"></v-text-field
                  ></v-col>
                  <v-col cols="auto" class="py-0">
                    <v-subheader class="px-0">ผู้รับเงิน</v-subheader></v-col
                  >
                </v-col>
              </div>
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
  data: () => ({
    valid_specific: false,
    firstname: '',
    lastname: '',
    date: '',
    modal: false,
    time: null,
    menu2: false,
    modal2: false,
    radio1: null,
    items2: ['a', 'b', 'c'],
    //
    id_file: '',
    date_file: '',
    modal_file: false,
    presenter: '',
    affiliation: '',
    clarify_information: '',
    modal_clarify_information: false,
    total: '',
    txt_total: '',
    date_start: '',
    modal_start: false,
    date_stop: '',
    modal_stop: false,
    sum_total: '',
    sum_total_txt: '',
    offer_date: '',
    modal_offer_date: '',
    offer_time: '',
    modal_offer_time: '',
    sing_presenter: '',
    confirm_presenter: '',
    date_presenter: '',
    modal_date_presenter: '',
    //
    file_check: '',
    file_date: '',
    modal_file_date: '',
    file_editfile: '',
    file_txt_total: '',
    note: '',
    sing_inspector: '',
    model_date_inspector: false,
    date_inspector: '',
    receive_money: '',
    receive_money_txt: '',
    money_check: '',
    money_bankok: '',
    name_bankok: '',
    number_bankok: '',
    money_note: '',
    money_day: '',
    model_money_day: false,
    money_time: '',
    modal_money_time: false,
    sing_money_inspector: '',
    date_money: '',
    modal_date_money: false,
    sing_payee: '',
  }),
  methods: {
    check_radio() {
      if (this.file_check == 'true') {
        this.file_editfile = ''
        this.file_txt_total = ''
      }
      if (this.file_check == 'false') {
        this.file_date = ''
      }
      if (this.money_check == 'true') {
        this.money_bankok = ''
        this.name_bankok = ''
        this.number_bankok = ''
      }
    },
    adddate() {
      this.check_radio()
      axios.post('http://localhost:5000/specificones/add', {
        id_file: this.id_file,
        date_file: this.date_file,
        presenter: this.presenter,
        affiliation: this.affiliation,
        clarify_information: this.clarify_information,
        total: this.total,
        txt_total: this.txt_total,
        date_start: this.date_start,
        date_stop: this.date_stop,
        sum_total: this.sum_total,
        sum_total_txt: this.sum_total_txt,
        offer_date: this.offer_date,
        offer_time: this.offer_time,
        sing_presenter: this.sing_presenter,
        confirm_presenter: this.confirm_presenter,
        date_presenter: this.date_presenter,
        examine: [
          {
            examine_file: [
              {
                file_check: this.file_check,
                file_date: this.file_date,
                file_editfile: this.file_editfile,
                file_txt_total: this.file_txt_total,
              },
            ],
            note: this.note,
            sing_inspector: this.sing_inspector,
            date_inspector: this.date_inspector,
            receive_money: this.receive_money,
            receive_money_txt: this.receive_money_txt,
            money: [
              {
                money_check: this.money_check,
                money_bankok: this.money_bankok,
                name_bankok: this.name_bankok,
                number_bankok: this.number_bankok,
              },
            ],
            money_note: this.money_note,
            money_day: this.money_day,
            money_time: this.money_time,
            sing_money_inspector: this.sing_money_inspector,
            date_money: this.date_money,
            sing_payee: this.sing_payee,
          },
        ],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
