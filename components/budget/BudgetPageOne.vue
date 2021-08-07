<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">
          แบบเสนอราคาสำหรับเบิกจ่ายงบประมาณ
        </p>

        <div class="mb-6">
          <!--  -->
          <div class="d-flex justify-end">
            <v-col cols="3">
              <v-text-field
                v-model="firstname"
                label="เลขที่เอกสาร"
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
                    label="วันที่"
                    prepend-inner-icon="mdi-calendar"
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
          </div>
          <!--  -->
          <div class="d-flex">
            <v-col cols="6">
              <v-text-field v-model="firstname" label="ผู้เสนอ"></v-text-field
            ></v-col>
            <v-col cols="6">
              <v-text-field v-model="firstname" label="สังกัด"></v-text-field>
            </v-col>
          </div>

          <v-col>
            <v-textarea
              name="input-3-1"
              label="ขอเสนอราคาสำหรับเบิกจ่ายงบประมาณเพื่อใช้สำหรับ"
              hint="Hint text"
              rows="3"
            ></v-textarea>
          </v-col>
          <v-col>
            <v-textarea
              name="input-3-1"
              label="เนื่องจากความจำเป็น"
              hint="Hint text"
              rows="3"
            ></v-textarea>
          </v-col>
          <v-col>
            <v-textarea
              name="input-3-1"
              label="ดำเนินการด้วยวิธี"
              rows="3"
              hint="Hint text"
            ></v-textarea>
          </v-col>
          <!--  -->
          <v-col class="d-flex">
            <v-subheader class="pl-0">มีระยะเวลาตั้งแต่</v-subheader>
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
                  label="เริ่ม"
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
                  label="สิ้นสุด"
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
          <v-col class="d-flex">
            <v-subheader class="justify-start pl-0"
              >โดยมีรายละเอียดค่าใช้จ่ายตามเอกสารแนบท้าย
              รวมเป็นเงินทั้งสิ้น</v-subheader
            >
            <v-text-field suffix="บาท"></v-text-field>
          </v-col>
          <!--  -->
          <v-col cols="6" class="d-flex align-center">
            <v-subheader class="pl-0">ตัวอักษร</v-subheader>
            <v-text-field prefix="(" suffix=")บาท"></v-text-field>
            <!-- <v-subheader class="px-0">(</v-subheader>
            <v-text-field></v-text-field>
            <v-subheader class="px-0">)</v-subheader> -->
          </v-col>
          <!--  -->
          <v-col class="d-flex">
            <v-subheader class="justify-start pl-0"
              >โดยมีรายละเอียดค่าใช้จ่ายตามเอกสารแนบท้าย
              รวมเป็นเงินทั้งสิ้น</v-subheader
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
          <!--  -->
          <v-col class="d-flex justify-center pb-0">
            <v-col cols="5" class="d-flex align-center pb-0">
              <v-subheader class="pr-1">ลงชื่อ</v-subheader>
              <v-text-field class="pt-0"></v-text-field>
              <v-subheader class="pl-1">ผู้เสนอ</v-subheader>
            </v-col>
          </v-col>
          <!--  -->
          <v-col class="d-flex justify-center py-0">
            <v-col cols="4" class="d-flex align-center py-0">
              <v-subheader class="pr-1 pl-0">(</v-subheader>
              <v-text-field class="pt-0"></v-text-field>
              <v-subheader class="pl-1">)</v-subheader>
            </v-col>
          </v-col>
          <!--  -->
          <div class="d-flex justify-center pt-0">
            <v-col cols="4" class="pt-0">
              <v-dialog
                ref="dialog_end"
                v-model="modal_end"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="pt-0 px-6"
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
          <div class="d-flex justify-center pb-0">
            <v-col cols="5" class="d-flex align-center pb-0">
              <v-subheader class="pr-1">ลงชื่อ</v-subheader>

              <v-text-field></v-text-field>

              <v-subheader class="pl-1 pr-0">หัวหน้าสังกัด</v-subheader>
            </v-col>
          </div>
          <!--  -->
          <div class="d-flex justify-center pb-0">
            <v-col cols="4" class="d-flex align-center pb-0">
              <v-subheader class="pr-0 pl-0">(</v-subheader>
              <v-text-field class="pt-1"></v-text-field>
              <v-subheader class="pl-0">)</v-subheader>
            </v-col>
          </div>
          <!--  -->
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
