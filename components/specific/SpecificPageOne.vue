<template>
  <div>
    <v-form v-model="valid_specific">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">
          แบบสรุปยอดการใช้จ่ายทำการตลาดสำหรับเบิกงบประมาณ
        </p>
        <div id="paragraphOne">
          <v-col class="d-grid justify-end">
            <v-text-field label="เลขที่เอกสาร"></v-text-field>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="วันที่"
                  prepend-iner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col class="d-flex px-0">
            <v-text-field class="col" label="ผู้เสนอ"></v-text-field>
            <v-text-field class="col" label="สังกัด"></v-text-field>
          </v-col>
          <v-col class="d-flex px-0 align-center">
            <v-subheader class="col-auto"
              >ขอชี้แจงสรุปการใช้จ่ายงบประมาณตามที่ได้รับเมื่อวันที่</v-subheader
            >
            <v-col>
              <v-dialog
                ref="dialog_end"
                v-model="modal_end"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_end = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_end.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-col>
          <v-col class="d-flex px-0">
            <v-text-field
              class="col"
              label="จำนวนทั้งสิ้น"
              prefix=""
              suffix="บาท"
            ></v-text-field>
            <v-text-field
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
                    label="Picker in dialog"
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
                ref="dialog_end"
                v-model="modal_end"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker in dialog"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_end = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_end.save(date)"
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
              <v-text-field prefix="(" suffix=")บาท"></v-text-field>
            </v-col>
          </div>

          <v-col class="d-flex align-center px-0">
            <v-subheader class="justify-start"
              >เสนอแบบเสนอราคาฉบับนี้เข้าสู่ระบบวันที</v-subheader
            >
            <v-col>
              <v-dialog
                ref="dialog_two"
                v-model="modal_two"
                :return-value.sync="date_in"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_in"
                    label="วันที่"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_in" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_two = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_two.save(date_in)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog></v-col
            >
            <v-col>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time_in"
                    label="เวลา"
                    prepend-inner-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="modal"
                  v-model="time_in"
                  format="24hr"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(time_in)"
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
                  ref="dialog_tree"
                  v-model="modal_tree"
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
                    <v-btn text color="primary" @click="modal_tree = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog_tree.save(date_presenter)"
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
        <p class="mt-2">ฝ่ายบัญชีตรวจสอบเอกสารแนบท้ายแล้วพิจารณาว่า</p>
        <div id="paragraphTwo">
          <div class="d-flex">
            <v-col class="d-flex align-center">
              <v-radio-group v-model="radio_purchase">
                <v-radio label="ผ่าน " value="true" class="pr-4"></v-radio>
              </v-radio-group>
              <v-subheader>เอกสารถูกต้องครบถ้วนทั้งหมด</v-subheader>
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
          </div>
          <div class="d-flex">
            <v-col cols="" class="d-flex align-center">
              <v-radio-group v-model="radio_purchase">
                <v-radio label="ไม่ผ่าน" value="false"></v-radio>
              </v-radio-group>
              <v-subheader
                >แก้ไขเปลี่ยนแปลงจำนวนเงินทั้งสิ้นจากเดิมเป็น</v-subheader
              >
              <v-text-field
                :disabled="radio_purchase != 'false'"
                v-model="purchase_txt"
                suffix="บาท"
              ></v-text-field>
            </v-col>
          </div>
          <div class="d-flex px-0">
            <v-col cols="2">
              <v-subheader>ตัวอักษร</v-subheader>
            </v-col>
            <v-col cols="10">
              <v-text-field prefix="(" suffix=")บาท"></v-text-field>
            </v-col>
          </div>

          <div class="d-flex px-0">
            <v-col cols="2">
              <v-subheader>หมายเหตุ</v-subheader>
            </v-col>
            <v-col cols="10">
              <v-text-field></v-text-field>
            </v-col>
          </div>
          <div class="d-flex justify-center">
            <v-col cols="4">
              <v-dialog
                ref="dialog_end"
                v-model="modal_end"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="อนุมัติในระบบวันที่"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_end = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_end.save(date)"
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
              <v-text-field></v-text-field>
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
                label="ได้รับเงินจำนวนทั้งสิ้น"
                suffix="บาท"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="ตัวอักษร"
                prefix="("
                suffix="บาท )"
              ></v-text-field>
            </v-col>
          </div>
          <v-col class="d-felx align-center px-0">
            <v-radio-group v-model="radio_receive">
              <v-col><v-radio value="เงินสด" label="เงินสด"> </v-radio></v-col>

              <v-col class="d-flex align-center pr-0">
                <v-radio value="โอนเงิน" label="โอนเงิน"> </v-radio>

                <v-col>
                  <v-select :items="items2" label="ธนาคาร"></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="firstname"
                    label="ชื่อบัญชี"
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="firstname"
                    label="เลขที่บัญชี"
                  ></v-text-field>
                </v-col>
              </v-col>
            </v-radio-group>
          </v-col>
          <v-col class="d-flex align-center">
            <v-subheader cols="" class="pl-0">หมายเหตุ</v-subheader>
            <v-text-field cols=""></v-text-field>
          </v-col>
          <div class="d-flex pl-10">
            <v-col cols="3">
              <v-dialog
                ref="dialog_end"
                v-model="modal_end"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    prepend-icon="mdi-calendar"
                    label="วันที่"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_end = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_end.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>

            <v-col cols="3">
              <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="เวลา"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="modal2"
                  v-model="time"
                  format="24hr"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal2 = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(time)">
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
                    <v-text-field v-model="sing_presenter"></v-text-field
                  ></v-col>
                  <v-col cols="auto" class="py-0">
                    <v-subheader class="px-0">ผู้เสนอ</v-subheader></v-col
                  >
                </v-col>
                <div class="d-flex justify-center align-center py-0">
                  <v-col cols="10" class="px-0">
                    <v-dialog
                      ref="dialog_tree"
                      v-model="modal_tree"
                      :return-value.sync="date_presenter"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="pt-0 px-6"
                          v-model="date_presenter"
                          label="อนุมัติในระบบวันที่"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date_presenter" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal_tree = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog_tree.save(date_presenter)"
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
                    <v-text-field v-model="sing_presenter"></v-text-field
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
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid_specific: false,
    firstname: '',
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
    date: '',
    date_start: '',
    date_end: '',
    modal: false,
    modal_start: false,
    modal_end: false,
    time: null,
    menu2: false,
    modal2: false,
    radio1: null,
    items2: ['a', 'b', 'c'],
  }),
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
