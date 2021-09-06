<template>
  <div>
    <v-form ref="form" @submit.prevent="addGin">
      <div class="mb-6">
        <div class="d-flex justify-end">
          <v-col cols="3">
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
        </div>
        <div class="d-flex justify-center">
          <v-col cols="8">
            <v-text-field
              v-model="moneysupport"
              label="แบบขอรับเงินสนับสนุน Project"
            ></v-text-field>
            <v-text-field v-model="supportpeople" label="โดย"></v-text-field>
          </v-col>
        </div>
        <v-col>
          <v-textarea
            v-model="necessity"
            name="input-3-1"
            label="1. สาเหตุ ความจำเป็น และโอกาสที่เห็น"
            hint="Hint text"
            rows="3"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="goal_project"
            name="input-3-1"
            label="2. เป้าหมายของ Project"
            hint="Hint text"
            rows="3"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="manage"
            name="input-3-1"
            label="3. วิธีดำเนินการ"
            rows="3"
            hint="Hint text"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="phase_manage"
            name="input-3-1"
            label="4. ระยะเวลาในการดำเนินการ"
            rows="3"
            hint="Hint text"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="details"
            name="input-3-1"
            label="5. รายละเอียดและแผนในการทำสื่อ"
            rows="3"
            hint="Hint text"
          ></v-textarea>
        </v-col>
        <div class="d-flex">
          <div class="col-2 pt-11">ผลการพิจารณาสื่อ</div>
          <div class="col-10">
            <v-col class="d-flex align-center">
              <v-radio-group v-model="media_check">
                <v-radio
                  label="ผ่านการพิจารณา"
                  value="true"
                  class="pr-4"
                ></v-radio>
              </v-radio-group>
              <v-subheader>อนุมัติในระบบ</v-subheader>
              <v-dialog
                ref="dialog_media_date"
                v-model="modal_media_date"
                :return-value.sync="media_date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="media_date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :disabled="media_check != 'true'"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="media_date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_media_date = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_media_date.save(media_date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="" class="d-flex align-center">
              <v-radio-group v-model="media_check">
                <v-radio label="ไม่ผ่านการพิจารณา" value="false"></v-radio>
              </v-radio-group>
              <v-subheader>เนื่องจาก</v-subheader>
              <v-text-field
                class="px-2"
                :disabled="media_check != 'false'"
                v-model="media_since"
              ></v-text-field>
            </v-col>
          </div>
        </div>

        <v-col class="d-flex justify-center pb-0">
          <v-col cols="5" class="d-flex align-center pb-0">
            <v-subheader class="pr-1">ลงชื่อ</v-subheader>
            <v-text-field
              v-model="media_sing_presenter"
              class="pt-0"
            ></v-text-field>
            <v-subheader class="pl-1">ผู้เสนอ</v-subheader>
          </v-col>
        </v-col>
        <div class="d-flex justify-center pt-0">
          <v-col cols="4" class="pt-0">
            <v-dialog
              ref="dialog_media_date_presenter"
              v-model="modal_media_date_presenter"
              :return-value.sync="media_date_presenter"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="pt-0 pl-5 pr-5"
                  v-model="media_date_presenter"
                  label="วันที่"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="media_date_presenter" scrollable>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="modal_media_date_presenter = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.dialog_media_date_presenter.save(media_date_presenter)
                  "
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </div>
        <!--  -->
        <div>
          <v-col>6. งบประมาณ</v-col>
          <v-col cols="" class="d-flex align-center">
            <v-subheader>6.1 งบประมาณขอรับการสนับสนุน</v-subheader>
            <v-text-field
              class="px-2"
              label="จำนวนเงิน"
              suffix="บาท"
              v-model="total_budget"
            ></v-text-field>
            <v-text-field
              v-model="txt_total_budget"
              prefix="("
              suffix=")บาท"
            ></v-text-field>
          </v-col>
          <v-col cols="" class="d-flex align-center">
            <v-subheader>6.2 ยืมงบประมาณเพื่อใช้จ่ายล่วงหน้า</v-subheader>
            <v-text-field
              v-model="setback_borrow_budget"
              class="px-2"
              label="กำหนดคืน"
            ></v-text-field>
            <v-text-field
              v-model="total_borrow_budget"
              class="px-2"
              label="จำนวนเงิน"
              suffix="บาท"
            ></v-text-field>
            <v-text-field
              v-model="txt_total_borrow_budget"
              prefix="("
              suffix=")บาท"
            ></v-text-field>
          </v-col>
          <v-col cols="" class="d-flex align-center">
            <v-subheader
              >6.3 งบประมาณในส่วนของตนเองสนับสนุนสมทบ ( ถ้ามี )</v-subheader
            >
            <v-text-field
              v-model="total_my_support"
              class="px-2"
              label="จำนวนเงิน"
              suffix="บาท"
            ></v-text-field>
            <v-text-field
              v-model="txt_total_my_support"
              prefix="("
              suffix=")บาท"
            ></v-text-field>
          </v-col>
          <v-col cols="" class="d-flex align-center">
            <v-text-field
              class="px-2"
              label="รวมทั้งสิ้นเป็นจำนวนเงิน"
              suffix="บาท"
              v-model="sum_total_budget"
            ></v-text-field>
            <v-text-field
              v-model="sum_txt_total_budget"
              prefix="("
              suffix=")บาท"
            ></v-text-field>
          </v-col>
        </div>
        <v-col>
          <v-textarea
            v-model="result_project"
            name="input-3-1"
            label="7. ผลลัพธ์ที่คาดว่าจะได้รับจาก Project ในครั้งนี้"
            rows="3"
            hint="Hint text"
          ></v-textarea>
        </v-col>
      </div>
      <v-col class="d-flex justify-center pb-0">
        <v-col class="col-5 d-flex align-center pb-0" style="margin-left: 12px">
          <v-subheader class="pr-1">ลงชื่อ</v-subheader>

          <v-text-field
            v-model="sing_presenter"
            class="pt-0"
            style="min-width: 259px !important"
          ></v-text-field>

          <v-subheader class="pl-1" style="flex-wrap: wrap; min-width: 28%"
            >ผู้เสนอ Project</v-subheader
          >
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center py-0">
        <v-col cols="4" class="d-flex align-center py-0">
          <v-subheader class="pr-1 pl-3">(</v-subheader>
          <v-text-field
            v-model="confirm_presenter"
            class="pt-0"
            style="width: 246px"
          ></v-text-field>
          <v-subheader class="pl-1">)</v-subheader>
        </v-col>
      </v-col>
      <div class="d-flex justify-center pt-0">
        <v-col cols="4" class="pt-0" style="margin-left: 4px">
          <v-dialog
            ref="dialog_date_presenter"
            v-model="modal_date_presenter"
            :return-value.sync="date_presenter"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="pt-0 pl-5 pr-5"
                v-model="date_presenter"
                label="วันที่"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                style="width: 300px"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date_presenter" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal_date_presenter = false">
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

      <div class="d-flex align-center">
        <v-col cols="5" style="max-width: 366px !important"
          >แบบขอรับเงินสนับสนุน Project ฉบับนี้เข้าสู่ระบบวันที่</v-col
        >
        <v-col>
          <v-dialog
            ref="dialog_support_money_day"
            v-model="modal_support_money_day"
            :return-value.sync="support_money_day"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="support_money_day"
                prepend-inner-icon="mdi-calendar"
                label="วันที่"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="support_money_day" scrollable>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal_support_money_day = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog_support_money_day.save(support_money_day)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col>
          <v-dialog
            ref="dialog_support_money_time"
            v-model="modal_support_money_time"
            :return-value.sync="support_money_time"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="support_money_time"
                label="เวลา"
                prepend-inner-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="modal_support_money_time"
              v-model="support_money_time"
              format="24hr"
              full-width
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal_support_money_time = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="
                  $refs.dialog_support_money_time.save(support_money_time)
                "
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
      </div>

      <hr />
      <!--  -->
      <div class="d-flex">
        <div class="col-2 pt-11">ผลการพิจารณา</div>
        <div class="col-10">
          <v-col class="d-flex align-center">
            <v-radio-group v-model="consider_check">
              <v-radio
                label="ผ่านการพิจารณา"
                value="true"
                class="pr-4"
              ></v-radio>
            </v-radio-group>
            <v-subheader>อนุมัติในระบบ</v-subheader>
            <v-dialog
              ref="dialog_consider_date"
              v-model="modal_consider_date"
              :return-value.sync="consider_date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="consider_date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :disabled="consider_check != 'true'"
                ></v-text-field>
              </template>
              <v-date-picker v-model="consider_date" scrollable>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="modal_consider_date = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog_consider_date.save(consider_date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="" class="d-flex align-center">
            <v-radio-group v-model="consider_check">
              <v-radio label="ไม่ผ่านการพิจารณา" value="false"></v-radio>
            </v-radio-group>
            <v-subheader>เนื่องจาก</v-subheader>
            <v-text-field
              class="px-2"
              :disabled="consider_check != 'false'"
              v-model="consider_since"
            ></v-text-field>
          </v-col>
        </div>
      </div>
      <v-col class="d-flex justify-center pb-0">
        <v-col class="col-5 d-flex align-center pb-0" style="margin-left: 12px">
          <v-subheader class="pr-1">ลงชื่อ</v-subheader>

          <v-text-field
            v-model="consider_sing_presenter"
            class="pt-0"
            style="min-width: 259px !important"
          ></v-text-field>

          <v-subheader class="pl-1" style="flex-wrap: wrap; min-width: 28%"
            >ผู้พิจารณา Project</v-subheader
          >
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center py-0">
        <v-col cols="4" class="d-flex align-center py-0">
          <v-subheader class="pr-1 pl-3">(</v-subheader>
          <v-text-field
            v-model="consider_confirm_presenter"
            class="pt-0"
            style="width: 246px"
          ></v-text-field>
          <v-subheader class="pl-1">)</v-subheader>
        </v-col>
      </v-col>
      <div class="d-flex justify-center pt-0">
        <v-col cols="4" class="pt-0" style="margin-left: 4px">
          <v-dialog
            ref="dialog_consider_date_presenter"
            v-model="modal_consider_date_presenter"
            :return-value.sync="consider_date_presenter"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="pt-0 pl-5 pr-5"
                v-model="consider_date_presenter"
                label="วันที่"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                style="width: 300px"
              ></v-text-field>
            </template>
            <v-date-picker v-model="consider_date_presenter" scrollable>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal_consider_date_presenter = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="
                  $refs.dialog_consider_date_presenter.save(
                    consider_date_presenter
                  )
                "
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </div>
      <hr />
      <!--  -->
      <div class="d-flex align-center">
        <v-col cols="auto">วันที่รับเงิน</v-col>
        <v-col>
          <v-dialog
            ref="dialog_monney_date_payee"
            v-model="modal_monney_date_payee"
            :return-value.sync="monney_date_payee"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="monney_date_payee"
                prepend-inner-icon="mdi-calendar"
                label="วันที่"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="monney_date_payee" scrollable>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal_monney_date_payee = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog_monney_date_payee.save(monney_date_payee)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col>
          <v-dialog
            ref="dialog_monney_time_payee"
            v-model="modal_monney_time_payee"
            :return-value.sync="monney_time_payee"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="monney_time_payee"
                label="เวลา"
                prepend-inner-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="modal_monney_time_payee"
              v-model="monney_time_payee"
              format="24hr"
              full-width
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal_monney_time_payee = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog_monney_time_payee.save(monney_time_payee)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
      </div>
      <!--  -->
      <div c class="d-flex justify-end">
        <v-col class="col-10">
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
      </div>
      <!-- <div id="paragraphThree"> -->
      <v-col class="d-flex align-center">
        <v-text-field
          v-model="money_sum_total"
          class="px-2"
          label="จำนวนเงิน"
          suffix="บาท"
        ></v-text-field>
        <v-text-field
          v-model="money_sum_txt_total"
          prefix="("
          suffix=")บาท"
        ></v-text-field>
      </v-col>

      <v-col class="d-flex align-center">
        <v-subheader cols="" class="pl-0">หมายเหตุ</v-subheader>
        <v-text-field cols="" v-model="money_note"></v-text-field>
      </v-col>

      <div class="d-flex">
        <v-col cols="6">
          <div class="d-grid justify-center">
            <v-col class="d-flex justify-center align-center py-0">
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">ลงชื่อ</v-subheader>
              </v-col>
              <v-col cols="10" class="py-0">
                <v-text-field v-model="money_sing_payer"></v-text-field
              ></v-col>
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader></v-col
              >
            </v-col>
            <div class="d-flex justify-center align-center py-0">
              <v-col cols="10" class="px-0">
                <v-dialog
                  ref="dialog_approve_date"
                  v-model="modal_approve_date"
                  :return-value.sync="approve_date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="pt-0 px-6"
                      v-model="approve_date"
                      label="อนุมัติในระบบวันที่"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="approve_date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal_approve_date = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_approve_date.save(approve_date)"
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
                <v-text-field v-model="money_sing_payee"></v-text-field
              ></v-col>
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">ผู้รับเงิน</v-subheader></v-col
              >
            </v-col>
          </div>
        </v-col>
      </div>
      <!-- </div> -->
      <!--  -->
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
  name: 'SupportPageOne',
  data() {
    return {
      items2: ['a', 'b', 'c'],

      id_file: '',
      date_file: '',
      modal_date_file: false,
      moneysupport: '',
      supportpeople: '',
      necessity: '',
      goal_project: '',
      manage: '',
      phase_manage: '',
      details: '',
      media_check: '',
      media_date: '',
      modal_media_date: false,
      media_since: '',
      sing_presenter: '',
      date_presenter: '',
      modal_date_presenter: false,
      ///create value
      total_budget: '',
      txt_total_budget: '',
      setback_borrow_budget: '',
      total_borrow_budget: '',
      txt_total_borrow_budget: '',
      total_my_support: '',
      txt_total_my_support: '',
      sum_total_budget: '',
      sum_txt_total_budget: '',
      result_project: '',
      media_sing_presenter: '',
      media_confirm_presenter: '',
      media_date_presenter: '',
      modal_media_date_presenter: false,

      support_money_day: '',
      modal_support_money_day: false,
      support_money_time: '',
      modal_support_money_time: false,

      consider_sing_presenter: '',
      consider_confirm_presenter: '',
      consider_date_presenter: '',
      modal_consider_date_presenter: false,

      //
      result_project: '',
      consider_check: '',
      consider_date: '',
      modal_consider_date: false,
      consider_since: '',
      money_check: '',
      money_bankok: '',
      name_bankok: '',
      number_bankok: '',
      money_sum_total: '',
      money_sum_txt_total: '',
      money_note: '',
      money_sing_payer: '',
      money_sing_payeapprove_date: '',
      modal_approve_date: '',
      monney_payee: '',
      modal_monney_payee: false,
      monney_time_payee: '',
      modal_monney_time_payee: false,
    }
  },
  methods: {
    check_radio() {
      if (this.media_check == 'true') {
        this.media_since = ''
      }
      if (this.media_check == 'false') {
        this.media_date = ''
      }
      if (this.consider_check == 'true') {
        this.consider_since = ''
      }
      if (this.consider_check == 'false') {
        this.consider_date = ''
      }
    },
    addGin() {
      this.check_radio()
      axios.post('https://playlandbackend.herokuapp.com/supportones/add', {
        id_file: this.id_file,
        date_file: this.date_file,
        moneysupport: this.moneysupport,
        supportpeople: this.supportpeople,
        necessity: this.necessity,
        goal_project: this.goal_project,
        manage: this.manage,
        phase_manage: this.phase_manage,
        details: this.details,
        consider_media: [
          {
            media: [
              {
                media_check: this.media_check,
                media_date: this.media_date,
                media_since: this.media_since,
              },
            ],
            sing_presenter: this.media_sing_presenter,
            date_presenter: this.media_date_presenter,
          },
        ],
        budget: [
          {
            budget: [
              {
                total: this.total_budget,
                txt_total: this.txt_total_budget,
              },
            ],
            borrow_budget: [
              {
                setback: this.setback_borrow_budget,
                total: this.total_borrow_budget,
                txt_total: this.txt_total_borrow_budget,
              },
            ],
            my_support: [
              {
                total: this.total_my_support,
                txt_total: this.txt_total_my_support,
              },
            ],
            sum_total: this.sum_total_budget,
            sum_txt_total: this.sum_txt_total_budget,
          },
        ],
        result_project: this.result_project,
        sing_presenter: this.sing_presenter,
        confirm_presenter: this.confirm_presenter,
        date_presenter: this.date_presenter,
        support_money_day: this.support_money_day,
        support_money_time: this.support_money_time,
        consider: [
          {
            consider: [
              {
                consider_check: this.consider_check,
                consider_date: this.consider_date,
                consider_since: this.consider_since,
              },
            ],
            sing_presenter: this.consider_sing_presenter,
            confirm_presenter: this.consider_confirm_presenter,
            date_presenter: this.consider_date_presenter,
          },
        ],
        monney: [
          {
            date_payee: this.monney_payee,
            time_payee: this.monney_time_payee,
            money: [
              {
                money_check: this.money_check,
                money_bankok: this.money_bankok,
                name_bankok: this.name_bankok,
                number_bankok: this.number_bankok,
              },
            ],
            sum_total: this.money_sum_total,
            sum_txt_total: this.money_sum_txt_total,
            note: this.money_note,
            sing_payer: this.money_sing_payer,
            sing_payee: this.money_sing_payee,
            approve_date: this.approve_date,
          },
        ],
      })
      // this.$refs.form.reset()
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
