<template>
  <div>
    <v-form ref="form" @submit.prevent="senddate">
      <v-row class="mt-3" style="max-width: 1000px">
        <div class="mb-2">
          <div id="purchase">
            <p class="mt-2 mx-4">ผลการพิจารณาฝ่ายจัดซื้อ</p>
            <div class="d-flex">
              <v-col class="d-flex align-center">
                <v-radio-group v-model="radio_purchase">
                  <v-radio label="ผ่าน " value="true" class="pr-4"></v-radio>
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
                      :disabled="radio_purchase != 'true'"
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
                      :disabled="radio_purchase != 'true'"
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
                  <v-radio label="ผ่าน " value="true" class="pr-4"></v-radio>
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
                      :disabled="radio_manage != 'true'"
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
                      :disabled="radio_manage != 'true'"
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
                  <v-radio label="ไม่ผ่าน" value="false"></v-radio>
                </v-radio-group>
                <v-subheader>เนื่องจาก</v-subheader>
                <v-text-field
                  :disabled="radio_manage != 'false'"
                  v-model="manage_txt"
                ></v-text-field>
              </v-col>
            </div>
            <!--  -->
            <div class="d-flex justify-center">
              <v-col cols="5" class="d-flex align-center">
                <v-subheader>ลงชื่อ</v-subheader>
                <v-text-field v-model="manage_sing"></v-text-field>
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
                <v-select
                  v-model="account_payment"
                  :items="items"
                  label="วิธีการชำระเงิน"
                ></v-select>
              </v-col>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-radio-group v-model="radio_account" class="pr-4">
                <v-radio label="ผ่าน" value="true"></v-radio>
              </v-radio-group>
              <v-select
                class="pr-4"
                :items="items2"
                label="แคชเชียร์เช็คธนาคาร"
                :disabled="radio_account != 'true'"
                v-model="cashier"
              ></v-select>
              <v-text-field
                class="pr-4"
                label="เลขที่บัญชี"
                :disabled="radio_account != 'true'"
                v-model="numberaccount"
              ></v-text-field>
              <v-text-field
                v-model="confirm_account"
                class="pr-4"
                cols="10"
                label="สั่งจ่าย"
                :disabled="radio_account != 'true'"
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
                    :disabled="radio_account != 'true'"
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
                <v-radio label="ไม่ผ่าน" value="false"></v-radio>
              </v-radio-group>

              <v-select
                v-model="bangkok"
                class="pr-4"
                :items="items2"
                label="โอนเงิน ธนาคาร"
                :disabled="radio_account != 'false'"
              ></v-select>

              <v-text-field
                v-model="number_bangkok"
                class="pr-4"
                label="เลขที่บัญชี"
                :disabled="radio_account != 'false'"
              ></v-text-field>

              <v-text-field
                v-model="name_bangkok"
                cols="10"
                label="ชื่อบัญชี"
                :disabled="radio_account != 'false'"
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col class="d-flex">
              <v-text-field
                v-model="total_money"
                class="pr-4"
                label="จำนวนทั้งสิ้น"
                suffix="บาท"
              ></v-text-field>
              <v-text-field
                v-model="total_moneytext"
                prefix="("
                suffix=")บาท"
              ></v-text-field>
            </v-col>
            <!--  -->
            <v-col>
              <v-text-field v-model="note" label="หมายเหตุ"></v-text-field>
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
                    <v-text-field v-model="person_pay"></v-text-field>
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
                    <v-text-field v-model="person_receive"></v-text-field>
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
                ><v-radio value="ไม่มีเงินต้องคืน" label="ไม่มีเงินต้องคืน">
                </v-radio
              ></v-col>

              <v-col class="d-flex align-center">
                <v-radio value="คืนเงินจำนวน" label="คืนเงินจำนวน"> </v-radio>
                <v-text-field
                  class="px-4"
                  label="จำนวนทั้งสิ้น"
                  suffix="บาท"
                  :disabled="radio_receive != 'คืนเงินจำนวน'"
                  v-model="total"
                ></v-text-field>
                <v-text-field
                  v-model="txt_total"
                  :disabled="radio_receive != 'คืนเงินจำนวน'"
                  prefix="("
                  suffix=")บาท"
                ></v-text-field>
              </v-col>
            </v-radio-group>
          </v-col>

          <!--  -->
          <v-col class="d-flex pl-0">
            <v-col>
              <v-col class="d-flex align-center">
                <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>
                <v-text-field v-model="slipperson_pay"></v-text-field>
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
                <v-text-field v-model="slipperson_receive1"></v-text-field>
                <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
              </v-col>
              <v-col class="d-flex align-center">
                <v-subheader class="pr-2 pl-0">ลงชื่อ</v-subheader>

                <v-text-field v-model="slipperson_receive2"></v-text-field>
                <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
              </v-col>
            </v-col>
          </v-col>
          <!--  -->
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
      budgetthree: ['e', 'f'],
      firstname_account: '',
      firstname_test: '',
      modal_purchase: false,
      modal_purchase_end: false,
      modal_time_purchase: false,
      time_purchase: null,
      radio_purchase: null,
      date_purchase: '',
      date_purchase_end: '',
      // name api
      purchase_sing: '',
      purchase_date: '',
      purchase_txt: '',
      //--------------------------
      modal_manage: false,
      modal_manage_end: false,
      modal_time_manage: false,
      time_manage: null,
      radio_manage: null,
      date_manage: '',
      date_manage_end: '',
      // name api
      manage_sing: '',
      manage_date: '',
      manage_txt: '',
      //---------------------------
      radio_account: null,
      modal_account: false,
      date_account: '',

      modal_account_day: false,
      modal_time_account: false,
      time_account: null,
      date_account_day: '',

      modal_account_day2: false,
      modal_time_account2: false,
      time_account2: null,
      date_account_day2: '',
      //---------------------------
      modal_receive: false,
      modal_receive_end: false,
      modal_time_receive: false,
      time_receive: null,
      radio_receive: null,
      date_receive: '',
      date_receive_end: '',
      //
      items: ['เงินสด', 'บัตรเครดิต'],
      items2: ['กรุงเทพ', 'กรุงไทย', 'กสิกร'],
      date: null,
      account_payment: '',
      person_receive: '',
      total_money: '',
      total_moneytext: '',
      note: '',
      person_pay: '',
      total_money: '',
      //
      slip_date: '',
      slipperson_pay: '',
      slipperson_receive1: '',
      slipapprove_day: '',
      slipapprove_time: '',
      slipperson_receive2: '',
      cashier: '',
      numberaccount: '',
      bangkok: '',
      number_bangkok: '',
      name_bangkok: '',
      total: '',
      txt_total: '',
      confirm_account: '',
      slip_date: '',
    }
  },

  methods: {
    PostPageThree() {
      let date_false = ''
      if (this.radio_purchase == 'true') {
        this.purchase_txt = ''
        console.log('true_radio_purchase')
      }
      if (this.radio_purchase == 'false') {
        this.date_purchase = ''
        this.time_purchase = ''
        console.log('false_radio_purchase')
      }
      if (this.radio_manage == 'true') {
        this.manage_txt = ''
        console.log('true_radio_manage')
      }
      if (this.radio_manage == 'false') {
        this.date_manage = ''
        this.time_manage = ''
        console.log('false_radio_manage')
      }
      if (this.radio_account == 'true') {
        console.log('true_radio_account', this.radio_account)
        this.bangkok = ''
        this.number_bangkok = ''
        this.name_bangkok = ''
      }
      if (this.radio_account == 'false') {
        console.log('false_radio_account', this.radio_account)
        this.cashier = ''
        this.numberaccount = ''
        this.confirm_account = ''
        this.date_account = ''
      }
      if (this.radio_receive == 'ไม่มีเงินต้องคืน') {
        this.total = ''
        this.txt_total = ''
      }
      // if (this.radio_receive == 'คืนเงินจำนวน') {
      // }
    },
    senddate() {
      this.budgetthreesend = [
        {
          purchase_radio: [
            {
              purchase_id: this.radio_purchase,
              purchase_date: this.date_purchase,
              purchase_time: this.time_purchase,
              purchase_txt: this.purchase_txt,
            },
          ],
          purchase_sing: this.purchase_sing,
          purchase_date: this.date_purchase_end,
          manage_radio: [
            {
              manage_id: this.radio_manage,
              manage_date: this.date_manage,
              manage_time: this.time_manage,
              manage_txt: this.manage_txt,
            },
          ],
          manage_sing: this.manage_sing,
          manage_date: this.date_manage_end,
          account_radio: [
            {
              radio_id: this.radio_account,
              cashier: this.cashier,
              numberaccount: this.numberaccount,
              confirm_account: this.confirm_account,
              cashier_date: this.date_account,
              bangkok: this.bangkok,
              number_bangkok: this.number_bangkok,
              name_bangkok: this.name_bangkok,
            },
          ],
          account_payment: this.account_payment,
          total_money: this.total_money,
          total_moneytext: this.total_moneytext,
          note: this.note,
          date_pay: this.date_account_day,
          time_pay: this.time_account,
          person_pay: this.person_pay,
          person_receive: this.person_receive,
          approve_day: this.date_account_day2,
          approve_time: this.time_account2,
          slip_radio: [
            {
              radio_id: this.radio_receive,
              total: this.total,
              txt_total: this.txt_total,
            },
          ],
          slip_date: this.date_receive,
          slipperson_pay: this.slipperson_pay,
          slipperson_receive1: this.slipperson_receive1,
          slipapprove_day: this.date_receive_end,
          slipapprove_time: this.time_receive,
          slipperson_receive2: this.slipperson_receive2,
        },
      ]
      this.$emit('createpangthree', this.budgetthreesend)
      //   this.PostPageThree()
      //   axios.post('http://localhost:5000/bugetthrees/add', {
      //     purchase_radio: [
      //       {
      //         purchase_id: this.radio_purchase,
      //         purchase_date: this.date_purchase,
      //         purchase_time: this.time_purchase,
      //         purchase_txt: this.purchase_txt,
      //       },
      //     ],
      //     purchase_sing: this.purchase_sing,
      //     purchase_date: this.date_purchase_end,
      //     //
      //     manage_radio: [
      //       {
      //         manage_id: this.radio_manage,
      //         manage_date: this.date_manage,
      //         manage_time: this.time_manage,
      //         manage_txt: this.manage_txt,
      //       },
      //     ],
      //     manage_sing: this.manage_sing,
      //     manage_date: this.date_manage_end,
      //     //
      //     account_radio: [
      //       {
      //         radio_id: this.radio_account,
      //         cashier: this.cashier,
      //         numberaccount: this.numberaccount,
      //         confirm_account: this.confirm_account,
      //         cashier_date: this.date_account,
      //         bangkok: this.bangkok,
      //         number_bangkok: this.number_bangkok,
      //         name_bangkok: this.name_bangkok,
      //       },
      //     ],
      //     account_payment: this.account_payment,
      //     total_money: this.total_money,
      //     total_moneytext: this.total_moneytext,
      //     note: this.note,
      //     date_pay: this.date_account_day,
      //     time_pay: this.time_account,
      //     person_pay: this.person_pay,
      //     person_receive: this.person_receive,
      //     approve_day: this.date_account_day2,
      //     approve_time: this.time_account2,
      //     //
      //     slip_radio: [
      //       {
      //         radio_id: this.radio_receive,
      //         total: this.total,
      //         txt_total: this.txt_total,
      //       },
      //     ],
      //     slip_date: this.date_receive,
      //     slipperson_pay: this.slipperson_pay,
      //     slipperson_receive1: this.slipperson_receive1,
      //     slipapprove_day: this.date_receive_end,
      //     slipapprove_time: this.time_receive,
      //     slipperson_receive2: this.slipperson_receive2,
      //   })
      //   // this.$refs.form.reset()
    },
  },
  watch: {
    call_fun() {
      console.log('call_fun three')
      this.senddate()
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
