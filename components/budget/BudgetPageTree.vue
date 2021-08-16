<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3" style="max-width: 1000px">
        <div class="mb-2">
          <div id="purchase">
            <p class="mt-2 mx-4">ผลการพิจารณาฝ่ายจัดซื้อ</p>
            <div class="d-flex">
              <v-col class="d-flex align-center">
                <v-radio-group v-model="radio_purchase">
                  <v-radio label="ผ่าน " value="1" class="pr-4"></v-radio>
                </v-radio-group>
                <v-subheader>อนุมัติในระบบ</v-subheader>
                <v-dialog
                  ref="dialog_purchase"
                  v-model="modal_purchase"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date_purchase"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :disabled="radio_purchase != 1"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date_purchase" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal_purchase = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_purchase.save(date_purchase)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <v-dialog
                  ref="dialog_time_purchase"
                  v-model="modal_time_purchase"
                  :return-value.sync="time_purchase"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time_purchase"
                      label="เวลา"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :disabled="radio_purchase != 1"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal_time_purchase"
                    v-model="time_purchase"
                    format="24hr"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal_time_purchase = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_time_purchase.save(time_purchase)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </div>
            <!--  -->
            <div class="d-flex">
              <v-col cols="" class="d-flex align-center">
                <v-radio-group v-model="radio_purchase">
                  <v-radio label="ไม่ผ่าน" value="2"></v-radio>
                </v-radio-group>
                <v-subheader>เนื่องจาก</v-subheader>
                <v-text-field :disabled="radio_purchase != 2"></v-text-field>
              </v-col>
            </div>
            <!--  -->
            <div class="d-flex justify-center">
              <v-col cols="5" class="d-flex align-center">
                <v-subheader>ลงชื่อ</v-subheader>
                <v-text-field></v-text-field>
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
                      @click="$refs.dialog_purchase_end.save(date_purchase_end)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </div>
          </div>
          <!-- -->
          <hr />
          <!--  -->
          <div id="manage">
            <p class="mt-2 ml-4">ผลการพิจารณาฝ่ายบริหาร</p>
            <!--  ผลพิจารณาฝ่ายบริหาร -->
            <div class="d-flex">
              <v-col class="d-flex align-center">
                <v-radio-group v-model="radio_manage">
                  <v-radio label="ผ่าน " value="1" class="pr-4"></v-radio>
                </v-radio-group>
                <v-subheader>อนุมัติในระบบ</v-subheader>
                <v-dialog
                  ref="dialog_manage"
                  v-model="modal_manage"
                  :return-value.sync="date_manage"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date_manage"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :disabled="radio_manage != 1"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date_manage" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal_manage = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_manage.save(date_manage)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <v-dialog
                  ref="dialog_time_manage"
                  v-model="modal_time_manage"
                  :return-value.sync="time_manage"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time_manage"
                      label="เวลา"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :disabled="radio_manage != 1"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal_time_manage"
                    v-model="time_manage"
                    format="24hr"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal_time_manage = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_time_manage.save(time_manage)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </div>
            <!--  -->
            <div class="d-flex">
              <v-col cols="" class="d-flex align-center">
                <v-radio-group v-model="radio_manage">
                  <v-radio label="ไม่ผ่าน" value="2"></v-radio>
                </v-radio-group>
                <v-subheader>เนื่องจาก</v-subheader>
                <v-text-field :disabled="radio_manage != 2"></v-text-field>
              </v-col>
            </div>
            <!--  -->
            <div class="d-flex justify-center">
              <v-col cols="5" class="d-flex align-center">
                <v-subheader>ลงชื่อ</v-subheader>
                <v-text-field></v-text-field>
                <v-subheader>ฝ่ายบริหาร</v-subheader>
              </v-col>
              <!--  -->
              <v-col cols="3">
                <v-dialog
                  ref="dialog_manage_end"
                  v-model="modal_manage_end"
                  :return-value.sync="date_manage_end"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="วันที่บันทึกรายการ"
                      v-model="date_manage_end"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date_manage_end" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal_manage_end = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_manage_end.save(date_manage_end)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </div>
          </div>
          <!--  -->
          <hr />
          <!--  -->
          <div id="account">
            <p class="mt-2 ml-4">การจ่ายเงินโดยฝ่ายบัญชี</p>
            <v-col cols="12" class="d-flex">
              <v-col cols="4">
                <v-select :items="items" label="วิธีการชำระเงิน"></v-select>
              </v-col>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-radio-group v-model="radio_account" class="pr-4">
                <v-radio label="ผ่าน" value="1"></v-radio>
              </v-radio-group>
              <v-select
                class="pr-4"
                :items="items2"
                label="แคชเชียร์เช็ค ธนาคาร"
                :disabled="radio_account != 1"
              ></v-select>
              <v-text-field
                class="pr-4"
                v-model="firstname_account"
                label="เลขที่บัญชี"
                :disabled="radio_account != 1"
              ></v-text-field>
              <v-text-field
                class="pr-4"
                cols="10"
                label="สั่งจ่าย"
                :disabled="radio_account != 1"
              ></v-text-field>
              <v-dialog
                class="pr-4"
                ref="dialog_account"
                v-model="modal_account"
                :return-value.sync="date_account"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_account"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :disabled="radio_account != 1"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_account" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_account = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_account.save(date_account)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-radio-group v-model="radio_account" class="pr-4">
                <v-radio label="ไม่ผ่าน" value="2"></v-radio>
              </v-radio-group>

              <v-select
                class="pr-4"
                :items="items2"
                label="โอนเงิน ธนาคาร"
                :disabled="radio_account != 2"
              ></v-select>

              <v-text-field
                class="pr-4"
                v-model="firstname_test"
                label="เลขที่บัญชี"
                :disabled="radio_account != 2"
              ></v-text-field>

              <v-text-field
                cols="10"
                label="ชื่อบัญชี"
                :disabled="radio_account != 2"
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-text-field
                class="pr-4"
                label="จำนวนทั้งสิ้น"
                suffix="บาท"
              ></v-text-field>
              <v-text-field prefix="(" suffix=")บาท"></v-text-field>
            </v-col>
            <!--  -->
            <v-col>
              <v-text-field label="หมายเหตุ"></v-text-field>
            </v-col>
            <!--  -->

            <v-col class="d-flex justify-center align-center">
              <v-subheader>วันที่จ่ายเงิน</v-subheader>
              <v-col>
                <v-dialog
                  ref="dialog_account_day"
                  v-model="modal_account_day"
                  :return-value.sync="date_account_day"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date_account_day"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date_account_day" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal_account_day = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_account_day.save(date_account_day)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <v-dialog
                  ref="dialog_time_account"
                  v-model="modal_time_account"
                  :return-value.sync="time_account"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time_account"
                      label="เวลา"
                      prepend-inner-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal_time_account"
                    v-model="time_account"
                    format="24hr"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal_time_account = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_time_account.save(time_account)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-col>
                <v-col class="d-flex px-0">
                  <v-col class="px-2 d-flex align-center">
                    <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
                    <v-text-field></v-text-field>
                    <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader>
                  </v-col>
                </v-col>
                <v-col class="d-flex align-center" cols="12">
                  <v-subheader class="px-0">อนุมัติในระบบ</v-subheader>
                  <v-col>
                    <v-dialog
                      ref="dialog_account_day2"
                      v-model="modal_account_day2"
                      :return-value.sync="date_account_day2"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date_account_day2"
                          label="วันที่"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date_account_day2" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="modal_account_day2 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="
                            $refs.dialog_account_day2.save(date_account_day2)
                          "
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                  <v-col>
                    <v-dialog
                      ref="dialog_time_account2"
                      v-model="modal_time_account2"
                      :return-value.sync="time_account2"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time_account2"
                          label="เวลา"
                          prepend-inner-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="modal_time_account2"
                        v-model="time_account2"
                        format="24hr"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="modal_time_account2 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="
                            $refs.dialog_time_account2.save(time_account2)
                          "
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-col>
                </v-col>
              </v-col>
              <v-col>
                <v-col class="d-flex px-0">
                  <v-col class="px-2 d-flex align-center">
                    <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>

                    <v-text-field></v-text-field>
                    <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
                  </v-col>
                </v-col>
              </v-col>
            </v-col>
          </div>
          <!--  -->
          <hr />
          <!--  -->
          <v-col class="d-flex align-center">
            <v-col class="px-2 d-flex">
              <v-subheader class="pl-0"
                >ได้รับใบเสร็จรับเงิน / ใบกำกับภาษี
                และตรวจสอบถูกต้อง</v-subheader
              >
              <v-dialog
                ref="dialog_receive"
                v-model="modal_receive"
                :return-value.sync="date_receive"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_receive"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_receive" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_receive = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_receive.save(date_receive)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-col>
          <!--  -->
          <v-col class="d-felx align-center px-0">
            <v-radio-group v-model="radio_receive">
              <v-col
                ><v-radio value="Google" label="ไม่มีเงินต้องคืน"> </v-radio
              ></v-col>

              <v-col class="d-flex align-center">
                <v-radio value="Duckduckgo" label=" คืนเงินจำนวน "> </v-radio>
                <v-text-field
                  class="px-4"
                  label="จำนวนทั้งสิ้น"
                  suffix="บาท"
                ></v-text-field>
                <v-text-field prefix="(" suffix=")บาท"></v-text-field>
              </v-col>
            </v-radio-group>
          </v-col>

          <!--  -->
          <v-col class="d-flex pl-0">
            <v-col>
              <v-col class="d-flex align-center">
                <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
                <v-text-field></v-text-field>
                <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader>
              </v-col>
              <v-col class="d-flex align-center" cols="12">
                <v-subheader class="px-0">อนุมัติในระบบ</v-subheader>
                <v-col class="py-0">
                  <v-dialog
                    ref="dialog_receive_end"
                    v-model="modal_receive_end"
                    :return-value.sync="date_receive_end"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date_receive_end"
                        label="วันที่"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date_receive_end" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="modal_receive_end = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog_receive_end.save(date_receive_end)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col class="py-0">
                  <v-dialog
                    ref="dialog_time_receive"
                    v-model="modal_time_receive"
                    :return-value.sync="time_receive"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time_receive"
                        label="เวลา"
                        prepend-inner-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="modal_time_receive"
                      v-model="time_receive"
                      format="24hr"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="modal_time_receive = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog_time_receive.save(time_receive)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-col>
              </v-col>
            </v-col>
            <v-col>
              <v-col class="d-flex align-center">
                <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
                <v-text-field></v-text-field>
                <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
              </v-col>
              <v-col class="d-flex align-center">
                <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>

                <v-text-field></v-text-field>
                <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
              </v-col>
            </v-col>
          </v-col>
          <!--  -->
        </div>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      firstname_account: '',
      firstname_test: '',
      modal_purchase: false,
      modal_purchase_end: false,
      modal_time_purchase: false,
      time_purchase: null,
      radio_purchase: null,
      date_purchase: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      date_purchase_end: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      //
      modal_manage: false,
      modal_manage_end: false,
      modal_time_manage: false,
      time_manage: null,
      radio_manage: null,
      date_manage: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date_manage_end: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      //
      radio_account: null,
      modal_account: false,
      date_account: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      //
      modal_account_day: false,
      modal_time_account: false,
      time_account: null,
      radio_account: null,
      date_account_day: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      //
      modal_account_day2: false,
      modal_time_account2: false,
      time_account2: null,
      date_account_day2: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      //
      modal_receive: false,
      modal_receive_end: false,
      modal_time_receive: false,
      time_receive: null,
      radio_receive: null,
      date_receive: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      date_receive_end: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      //
      items: ['เงินสด', 'บัตรเครดิต'],
      items2: ['กรุงเทพ', 'กรุงไทย', 'กสิกร'],
      date: null,
    }
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
