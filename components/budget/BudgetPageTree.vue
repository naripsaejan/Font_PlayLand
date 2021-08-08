<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="mt-2 mx-4">ผลการพิจารณาฝ่ายจัดซื้อ</p>
        <div class="mb-2">
          <div class="d-flex">
            <v-col class="d-flex align-center">
              <v-radio-group v-model="radio1">
                <v-radio label="ผ่าน " value="1" class="pr-4"></v-radio>
              </v-radio-group>
              <v-subheader>อนุมัติในระบบ</v-subheader>
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
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :disabled="radio1 != 1"
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
            <v-col>
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
                    label="Picker in dialog"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :disabled="radio1 != 1"
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
          <!--  -->
          <div class="d-flex">
            <v-col cols="" class="d-flex align-center">
              <v-radio-group v-model="radio1">
                <v-radio label="ไม่ผ่าน" value="2"></v-radio>
              </v-radio-group>
              <v-subheader>เนื่องจาก</v-subheader>
              <v-text-field :disabled="radio1 != 2"></v-text-field>
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
                ref="dialog_end"
                v-model="modal_end"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="วันที่บันทึกรายการ"
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
          </div>
          <!-- -->
          <hr />
          <p class="mt-2 ml-4">ผลการพิจารณาฝ่ายบริหาร</p>
          <!--  ผลพิจารณาฝ่ายบริหาร -->
          <div class="d-flex">
            <v-col class="d-flex align-center">
              <v-radio-group v-model="radio1">
                <v-radio label="ผ่าน " value="1" class="pr-4"></v-radio>
              </v-radio-group>
              <v-subheader>อนุมัติในระบบ</v-subheader>
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
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :disabled="radio1 != 1"
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
            <v-col>
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
                    label="Picker in dialog"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :disabled="radio1 != 1"
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
          <!--  -->
          <div class="d-flex">
            <v-col cols="" class="d-flex align-center">
              <v-radio-group v-model="radio1">
                <v-radio label="ไม่ผ่าน" value="2"></v-radio>
              </v-radio-group>
              <v-subheader>เนื่องจาก</v-subheader>
              <v-text-field :disabled="radio1 != 2"></v-text-field>
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
                ref="dialog_end"
                v-model="modal_end"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="วันที่บันทึกรายการ"
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
          </div>
          <!--  -->
          <hr />
          <!--  -->
          <p class="mt-2 ml-4">การจ่ายเงินโดยฝ่ายบัญชี</p>
          <v-col cols="12" class="d-flex">
            <!-- <v-col cols="2"></v-col> -->
            <v-col cols="4">
              <v-select :items="items" label="วิธีการชำระเงิน"></v-select>
            </v-col>
          </v-col>
          <!--  -->
          <v-col class="d-flex">
            <v-radio-group v-model="radio3" class="pr-4">
              <v-radio label="ผ่าน" value="1"></v-radio>
            </v-radio-group>
            <v-select
              class="pr-4"
              :items="items2"
              label="แคชเชียร์เช็ค ธนาคาร"
              :disabled="radio3 != 1"
            ></v-select>
            <v-text-field
              class="pr-4"
              v-model="firstname"
              label="เลขที่บัญชี"
              :disabled="radio3 != 1"
            ></v-text-field>
            <v-text-field
              class="pr-4"
              cols="10"
              label="สั่งจ่าย"
              :disabled="radio3 != 1"
            ></v-text-field>
            <v-dialog
              class="pr-4"
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
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :disabled="radio3 != 1"
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
          <!--  -->
          <v-col class="d-flex">
            <v-radio-group v-model="radio3" class="pr-4">
              <v-radio label="ไม่ผ่าน" value="2"></v-radio>
            </v-radio-group>

            <v-select
              class="pr-4"
              :items="items2"
              label="โอนเงิน ธนาคาร"
              :disabled="radio3 != 2"
            ></v-select>

            <v-text-field
              class="pr-4"
              v-model="firstname"
              label="เลขที่บัญชี"
              :disabled="radio3 != 2"
            ></v-text-field>

            <v-text-field
              cols="10"
              label="ชื่อบัญชี"
              :disabled="radio3 != 3"
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
            <v-col>
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
                    label="Picker in dialog"
                    prepend-inner-icon="mdi-clock-time-four-outline"
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
                    ref="dialog_end"
                    v-model="modal_end"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="วันที่"
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
                <v-col>
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
                        prepend-inner-icon="mdi-clock-time-four-outline"
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
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(time)"
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
          <!--  -->
          <v-col class="d-felx align-center px-0">
            <v-radio-group v-model="radios">
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
                    ref="dialog_end"
                    v-model="modal_end"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="วันที่"
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
                <v-col class="py-0">
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
                        prepend-inner-icon="mdi-clock-time-four-outline"
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
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(time)"
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
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      checkbox: false,
      modal_end: false,
      enabled: false,
      time: null,
      menu2: false,
      modal2: false,
      firstname: '',
      items: ['เงินสด', 'บัตรเครดิต'],
      items2: ['กรุงเทพ', 'กรุงไทย', 'กสิกร'],
      radios: null,
      radio1: null,
      radio2: null,
      radio3: null,
    }
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
