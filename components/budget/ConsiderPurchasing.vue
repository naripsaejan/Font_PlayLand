<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3">
        <p class="mt-2">ผลการพิจารณาฝ่ายจัดซื้อ</p>
        <div class="d-flex">
          <v-col cols="2">
            <v-radio-group v-model="radio1">
              <v-radio label="ผ่าน" value="1"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2">
            <v-subheader>อนุมัติในระบบ</v-subheader>
          </v-col>
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
          <v-col cols="4">
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
        <div class="d-flex">
          <v-col cols="2">
            <v-radio-group v-model="radio1">
              <v-radio label="ไม่ผ่าน" value="2"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2">
            <v-subheader>เนื่องจาก</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field :disabled="radio1 != 2"></v-text-field>
          </v-col>
        </div>
        <div class="d-flex justify-center">
          <v-col cols="1" class="d-flex align-center px-0">
            <v-subheader class="px-0">ลงชื่อ</v-subheader>
          </v-col>
          <v-col cols="4" class="px-2">
            <v-text-field></v-text-field>
          </v-col>
          <v-col cols="1" class="d-flex align-center px-0">
            <v-subheader class="px-0">ฝ่ายจัดซื้อ</v-subheader>
          </v-col>
          <!--  -->
          <v-col cols="2" class="d-flex align-center px-0">
            <v-subheader class="px-0">วันที่บันทึกรายการ</v-subheader>
          </v-col>
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
        </div>
        <!--  -->
        <hr />
        <!--  -->
        <p class="mt-2">ผลการพิจารณาฝ่ายบริหาร</p>
        <div class="d-flex">
          <v-col cols="2">
            <v-radio-group v-model="radio2">
              <v-radio label="ผ่าน" value="1"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2">
            <v-subheader>อนุมัติในระบบ</v-subheader>
          </v-col>
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
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :disabled="radio2 != 1"
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
          <v-col cols="4">
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
                  :disabled="radio2 != 1"
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
          <v-col cols="2">
            <v-radio-group v-model="radio2">
              <v-radio label="ไม่ผ่าน" value="2"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2">
            <v-subheader>เนื่องจาก</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field :disabled="radio2 != 2"></v-text-field>
          </v-col>
        </div>
        <div class="d-flex justify-center">
          <v-col cols="1" class="d-flex align-center px-0">
            <v-subheader class="px-0">ลงชื่อ</v-subheader>
          </v-col>
          <v-col cols="4" class="px-2">
            <v-text-field></v-text-field>
          </v-col>
          <v-col cols="1" class="d-flex align-center px-0">
            <v-subheader class="px-0">ฝ่ายบริหาร</v-subheader>
          </v-col>
          <!--  -->
          <v-col cols="2" class="d-flex align-center px-0">
            <v-subheader class="px-0">วันที่บันทึกรายการ</v-subheader>
          </v-col>
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
        </div>
        <!--  -->
        <hr />
        <!--  -->
        <p class="mt-2">การจ่ายเงินโดยฝ่ายบัญชี</p>
        <v-col cols="12" class="d-flex">
          <!-- <v-col cols="2"></v-col> -->
          <v-col cols="4">
            <v-select :items="items" label="วิธีการชำระเงิน"></v-select>
          </v-col>
        </v-col>
        <v-col cols="1">
          <v-radio-group v-model="radio3">
            <v-radio label="ผ่าน" value="1"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="11" class="d-flex">
          <v-col cols="3">
            <v-select
              :items="items2"
              label="แคชเชียร์เช็ค ธนาคาร"
              :disabled="radio3 != 1"
            ></v-select>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="firstname"
              label="เลขที่บัญชี"
              :disabled="radio3 != 1"
            ></v-text-field>
          </v-col>
          <v-col cols="3" class="d-flex">
            <v-text-field
              cols="10"
              label="สั่งจ่าย"
              :disabled="radio3 != 1"
            ></v-text-field>
          </v-col>
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
        </v-col>
        <v-col cols="1">
          <v-radio-group v-model="radio3">
            <v-radio label="ไม่ผ่าน" value="2"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="11" class="d-flex">
          <v-col cols="4">
            <v-select
              :items="items2"
              label="โอนเงิน ธนาคาร"
              :disabled="radio3 != 2"
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="firstname"
              label="เลขที่บัญชี"
              :disabled="radio3 != 2"
            ></v-text-field>
          </v-col>
          <v-col cols="4" class="d-flex">
            <v-text-field
              cols="10"
              label="ชื่อบัญชี"
              :disabled="radio3 != 3"
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col cols="6">
          <v-text-field label="จำนวนทั้งสิ้น" suffix="บาท"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field prefix="(" suffix=")บาท"></v-text-field>
        </v-col>
        <v-text-field label="หมายเหตุ"></v-text-field>

        <div class="d-flex justify-center">
          <v-col cols="2">
            <v-subheader>วันที่จ่ายเงิน</v-subheader>
          </v-col>
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
          <v-col cols="4">
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

        <v-col cols="6">
          <v-col class="d-flex" cols="12">
            <v-col cols="1" class="d-flex align-center px-0">
              <v-subheader class="px-0">ลงชื่อ</v-subheader>
            </v-col>
            <v-col cols="8" class="px-2">
              <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-center px-0">
              <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader>
            </v-col></v-col
          >
          <v-col class="d-flex" cols="12">
            <v-col cols="2" class="px-0">
              <v-subheader class="px-0">อนุมัติในระบบ</v-subheader>
            </v-col>
            <v-col cols="4" class="px-2">
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
            <v-col cols="4" class="px-2">
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
        </v-col>
        <v-col cols="6">
          <v-col class="d-flex" cols="12">
            <v-col cols="1" class="d-flex align-center px-0">
              <v-subheader class="px-0">ลงชื่อ</v-subheader>
            </v-col>
            <v-col cols="8" class="px-2">
              <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-center px-0">
              <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
            </v-col>
          </v-col>
        </v-col>
        <!--  -->
        <hr />
        <!--  -->
        <v-col class="d-flex" cols="12">
          <v-col cols="4" class="px-0">
            <v-subheader class="px-0"
              >ได้รับใบเสร็จรับเงิน / ใบกำกับภาษี และตรวจสอบถูกต้อง</v-subheader
            >
          </v-col>
          <v-col cols="8" class="px-2">
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
        <v-radio-group v-model="radios">
          <v-radio value="Google">
            <template v-slot:label>
              <div>ไม่มีเงินต้องคืน</div>
            </template>
          </v-radio>

          <v-radio value="Duckduckgo">
            <template v-slot:label>
              <div class="d-flex align-center">
                <v-col cols="3"> คืนเงินจำนวน </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="จำนวนทั้งสิ้น"
                    suffix="บาท"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field prefix="(" suffix=")บาท"></v-text-field>
                </v-col>
              </div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-col cols="6">
          <v-col class="d-flex" cols="12">
            <v-col cols="1" class="d-flex align-center px-0">
              <v-subheader class="px-0">ลงชื่อ</v-subheader>
            </v-col>
            <v-col cols="8" class="px-2">
              <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-center px-0">
              <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader>
            </v-col></v-col
          >
          <v-col class="d-flex" cols="12">
            <v-col cols="2" class="px-0">
              <v-subheader class="px-0">อนุมัติในระบบ</v-subheader>
            </v-col>
            <v-col cols="4" class="px-2">
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
            <v-col cols="4" class="px-2">
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
        </v-col>
        <v-col cols="6">
          <v-col class="d-flex" cols="12">
            <v-col cols="1" class="d-flex align-center px-0">
              <v-subheader class="px-0">ลงชื่อ</v-subheader>
            </v-col>
            <v-col cols="8" class="px-2">
              <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-center px-0">
              <v-subheader class="px-0">ผู้รับเงิน</v-subheader>
            </v-col>
          </v-col>
          <v-col class="d-flex" cols="12">
            <v-col cols="1" class="d-flex align-center px-0">
              <v-subheader class="px-0">ลงชื่อ</v-subheader>
            </v-col>
            <v-col cols="8" class="px-2">
              <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-center px-0">
              <v-subheader class="px-0">ผู้อนุมัติ</v-subheader>
            </v-col>
          </v-col>
        </v-col>
        <!--  -->
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
  methods: {},
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
