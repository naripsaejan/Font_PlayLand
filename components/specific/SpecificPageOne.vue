<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3">
        <p class="d-flex justify-center mt-2">รายละเอียดค่าใช้จ่าย</p>
        <div class="d-grid justify-end">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="เลขที่เอกสาร"
            required
          ></v-text-field>
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
                label="Picker in dialog"
                prepend-icon="mdi-calendar"
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
        </div>
        <div class="d-flex">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="ผู้เสนอ"
            required
          ></v-text-field>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="สังกัด"
            required
          ></v-text-field>
        </div>

        <v-col cols="6" class="d-flex justify-end">
          <v-subheader
            >โดยมีรายละเอียดค่าใช้จ่ายตามเอกสารแนบท้าย
            รวมเป็นเงินทั้งสิ้น</v-subheader
          >
        </v-col>

        <v-col cols="6">
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
              <v-btn text color="primary" @click="$refs.dialog_end.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="จำนวนทั้งสิ้น"
            prefix=""
            suffix="บาท"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="ตัวอักษร"
            prefix="("
            suffix="บาท)"
          ></v-text-field>
        </v-col>
        <!--  -->
        <div class="d-flex px-0">
          <v-col cols="2" class="px-0">
            <v-subheader>ใช้จ่ายระหว่าง</v-subheader>
          </v-col>
          <v-col cols="5">
            <v-dialog
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
                  prepend-icon="mdi-calendar"
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
          <v-col cols="5">
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
                  label="Picker in dialog"
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

        <div class="d-flex px-0">
          <v-col cols="6">
            <v-subheader
              >โดยมีรายละเอียดการใช้จ่ายทำการตลาดตามเอกสารแนบท้าย</v-subheader
            >
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="รวมเป็นเงินทั้งสิ้น"
              suffix="บาท"
            ></v-text-field>
          </v-col>
        </div>
        <div class="d-flex px-0">
          <v-col cols="2">
            <v-subheader>ตัวอักษร</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field prefix="(" suffix=")บาท"></v-text-field>
          </v-col>
        </div>
        <div class="d-flex px-0">
          <v-col cols="6">
            <v-subheader
              >เสนอแบบสรุปยอดการใช้จ่ายทำการตลาดฉบับนี้เข้าสู่ระบบ</v-subheader
            >
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
        <div class="d-flex justify-center">
          <v-col cols="auto" class="d-flex align-center">
            <v-subheader>ลงชื่อ</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field></v-text-field>
          </v-col>
          <v-col cols="auto" class="d-flex align-center">
            <v-subheader>ผู้เสนอ</v-subheader>
          </v-col>
        </div>
        <div class="d-flex justify-center">
          <v-col cols="auto" class="d-flex align-center">
            <v-subheader>(</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field></v-text-field>
          </v-col>
          <v-col cols="auto" class="d-flex align-center">
            <v-subheader>)</v-subheader>
          </v-col>
        </div>
        <div class="d-flex justify-center">
          <v-col cols="5">
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
        <p class="mt-2">ฝ่ายบัญชีตรวจสอบเอกสารแนบท้ายแล้วพิจารณาว่า</p>
        <div class="d-flex">
          <v-col cols="2">
            <v-radio-group v-model="radio1">
              <v-radio label="ผ่าน" value="1"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="4">
            <v-subheader>เอกสารถูกต้องครบถ้วนทั้งหมด</v-subheader>
          </v-col>
          <v-col cols="6">
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
        </div>
        <div class="d-flex">
          <v-col cols="2">
            <v-radio-group v-model="radio1">
              <v-radio label="ไม่ผ่าน" value="2"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="4">
            <v-subheader
              >แก้ไขเปลี่ยนแปลงจำนวนเงินทั้งสิ้นจากเดิมเป็น</v-subheader
            >
          </v-col>
          <v-col cols="6">
            <v-text-field :disabled="radio1 != 2" suffix="บาท"></v-text-field>
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
            <v-subheader>ตัวอักษร</v-subheader>
          </v-col>
          <v-col cols="10">
            <v-text-field></v-text-field>
          </v-col>
        </div>
        <div class="d-flex justify-center">
          <v-col cols="2" class="d-flex align-center px-0">
            <v-subheader class="px-0">อนุมัติในระบบวันท</v-subheader>
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
          <!--  -->
          <v-col cols="1" class="d-flex align-center justify-end px-0">
            <v-subheader class="px-0">ลงชื่อ</v-subheader>
          </v-col>
          <v-col cols="4" class="px-2">
            <v-text-field></v-text-field>
          </v-col>
          <v-col cols="1" class="d-flex align-center px-0">
            <v-subheader class="px-0">ฝ่ายจัดซื้อ</v-subheader>
          </v-col>
        </div>
        <!--  -->
        <hr />
        <!--  -->
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
        <div class="d-flex">
          <v-col cols="3" class="d-flex justify-end">
            <v-radio-group v-model="radio1">
              <v-radio label="เงินสด" value="1"></v-radio>
            </v-radio-group>
          </v-col>
        </div>
        <div class="d-flex">
          <v-col cols="3" class="d-flex justify-end">
            <v-radio-group v-model="radio1">
              <v-radio label="โอนเงิน" value="2"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="3">
            <v-select :items="items2" label="ธนาคาร"></v-select>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="firstname" label="ชื่อบัญชี"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="firstname"
              label="เลขที่บัญชี"
            ></v-text-field>
          </v-col>
          <!--  -->
        </div>
        <!--  -->
        <div class="d-flex px-0">
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
        <div class="d-flex">
          <v-col cols="6">
            <div class="d-flex justify-center">
              <v-col cols="auto" class="d-flex align-center">
                <v-subheader>ลงชื่อ</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field></v-text-field>
              </v-col>
              <v-col cols="auto" class="d-flex align-center">
                <v-subheader>ผู้เสนอ</v-subheader>
              </v-col>
            </div>
            <div class="d-flex px-0">
              <v-col cols="3">
                <v-subheader>อนุมัติในระบบวันที่</v-subheader>
              </v-col>

              <v-col cols="">
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
          </v-col>
          <v-col cols="6" class="d-flex">
            <v-col cols="auto" class="d-flex align-center">
              <v-subheader>ลงชื่อ</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field></v-text-field>
            </v-col>
            <v-col cols="auto" class="d-flex align-center">
              <v-subheader>ผู้เสนอ</v-subheader>
            </v-col>
          </v-col>
        </div>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
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
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date_start: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date_end: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    modal: false,
    modal_start: false,
    modal_end: false,
    time: null,
    menu2: false,
    modal2: false,
    radio1: null,
  }),
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
