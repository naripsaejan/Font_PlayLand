<template>
  <div>
    <v-form ref="form" @submit.prevent="addGin">
      <div class="mb-6">
        <!--  -->
        <div class="d-flex justify-end">
          <v-col cols="3">
            <v-text-field v-model="id_file" label="เลขที่เอกสาร"></v-text-field>
            <!-- date_file modal_one -->
            <v-dialog
              ref="dialog_one"
              v-model="modal_one"
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
                <v-btn text color="primary" @click="modal_one = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog_one.save(date_file)"
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
              v-model="presenter"
              label="แบบขอรับเงินสนับสนุน Project"
            ></v-text-field>
            <v-text-field v-model="affiliation" label="โดย"></v-text-field>
          </v-col>
        </div>

        <v-col>
          <v-textarea
            v-model="offerprice"
            name="input-3-1"
            label="1. สาเหตุ ความจำเป็น และโอกาสที่เห็น"
            hint="Hint text"
            rows="3"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="necessity"
            name="input-3-1"
            label="2. เป้าหมายของ Project"
            hint="Hint text"
            rows="3"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="action"
            name="input-3-1"
            label="3. วิธีดำเนินการ"
            rows="3"
            hint="Hint text"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="action"
            name="input-3-1"
            label="4. ระยะเวลาในการดำเนินการ"
            rows="3"
            hint="Hint text"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            v-model="action"
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
              <v-radio-group v-model="file_check">
                <v-radio
                  label="ผ่านการพิจารณา"
                  value="true"
                  class="pr-4"
                ></v-radio>
              </v-radio-group>
              <v-subheader>อนุมัติในระบบ</v-subheader>
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
            <v-col cols="" class="d-flex align-center">
              <v-radio-group v-model="file_check">
                <v-radio label="ไม่ผ่านการพิจารณา" value="false"></v-radio>
              </v-radio-group>
              <v-subheader>เนื่องจาก</v-subheader>
              <v-text-field
                class="px-2"
                :disabled="file_check != 'false'"
                v-model="file_editfile"
              ></v-text-field>
            </v-col>
          </div>
        </div>

        <!--  -->
        <v-col class="d-flex justify-center pb-0">
          <v-col cols="5" class="d-flex align-center pb-0">
            <v-subheader class="pr-1">ลงชื่อ</v-subheader>
            <v-text-field v-model="sing_presenter" class="pt-0"></v-text-field>
            <v-subheader class="pl-1">ผู้เสนอ</v-subheader>
          </v-col>
        </v-col>
        <!--  -->
        <!-- <v-col class="d-flex justify-center py-0">
          <v-col cols="4" class="d-flex align-center py-0">
            <v-subheader class="pr-1 pl-3">(</v-subheader>
            <v-text-field
              v-model="confirm_presenter"
              class="pt-0"
            ></v-text-field>
            <v-subheader class="pl-1">)</v-subheader>
          </v-col>
        </v-col> -->
        <!--  -->
        <div class="d-flex justify-center pt-0">
          <v-col cols="4" class="pt-0">
            <v-dialog
              ref="dialog_tree"
              v-model="modal_tree"
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
        <!--  -->
        <div>
          <v-col>6. งบประมาณ</v-col>
          <v-col cols="" class="d-flex align-center">
            <v-subheader>6.1 งบประมาณขอรับการสนับสนุน</v-subheader>
            <v-text-field
              class="px-2"
              label="จำนวนเงิน"
              suffix="บาท"
            ></v-text-field>
            <v-text-field prefix="(" suffix=")บาท"></v-text-field>
          </v-col>
          <v-col cols="" class="d-flex align-center">
            <v-subheader>6.2 ยืมงบประมาณเพื่อใช้จ่ายล่วงหน้า</v-subheader>
            <v-text-field class="px-2" label="กำหนดคืน"></v-text-field>
            <v-text-field
              class="px-2"
              label="จำนวนเงิน"
              suffix="บาท"
            ></v-text-field>
            <v-text-field prefix="(" suffix=")บาท"></v-text-field>
          </v-col>
          <v-col cols="" class="d-flex align-center">
            <v-subheader
              >6.3 งบประมาณในส่วนของตนเองสนับสนุนสมทบ ( ถ้ามี )</v-subheader
            >
            <v-text-field
              class="px-2"
              label="จำนวนเงิน"
              suffix="บาท"
            ></v-text-field>
            <v-text-field prefix="(" suffix=")บาท"></v-text-field>
          </v-col>
          <v-col cols="" class="d-flex align-center">
            <v-text-field
              class="px-2"
              label="รวมทั้งสิ้นเป็นจำนวนเงิน"
              suffix="บาท"
            ></v-text-field>
            <v-text-field prefix="(" suffix=")บาท"></v-text-field>
          </v-col>
        </div>

        <v-col>
          <v-textarea
            v-model="action"
            name="input-3-1"
            label="7. ผลลัพธ์ที่คาดว่าจะได้รับจาก Project ในครั้งนี้"
            rows="3"
            hint="Hint text"
          ></v-textarea>
        </v-col>
      </div>

      <!--  -->
      <!--  -->
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
      <!--  -->
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
      <!--  -->
      <div class="d-flex justify-center pt-0">
        <v-col cols="4" class="pt-0" style="margin-left: 4px">
          <v-dialog
            ref="dialog_tree"
            v-model="modal_tree"
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

      <!--  -->

      <div class="d-flex align-center">
        <v-col cols="5" style="max-width: 366px !important"
          >แบบขอรับเงินสนับสนุน Project ฉบับนี้เข้าสู่ระบบวันที่</v-col
        >
        <v-col>
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
                prepend-inner-icon="mdi-calendar"
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

        <v-col>
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
                prepend-inner-icon="mdi-clock-time-four-outline"
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

      <hr />
      <!--  -->
      <div class="d-flex">
        <div class="col-2 pt-11">ผลการพิจารณาสื่อ</div>
        <div class="col-10">
          <v-col class="d-flex align-center">
            <v-radio-group v-model="file_check">
              <v-radio
                label="ผ่านการพิจารณา"
                value="true"
                class="pr-4"
              ></v-radio>
            </v-radio-group>
            <v-subheader>อนุมัติในระบบ</v-subheader>
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
          <v-col cols="" class="d-flex align-center">
            <v-radio-group v-model="file_check">
              <v-radio label="ไม่ผ่านการพิจารณา" value="false"></v-radio>
            </v-radio-group>
            <v-subheader>เนื่องจาก</v-subheader>
            <v-text-field
              class="px-2"
              :disabled="file_check != 'false'"
              v-model="file_editfile"
            ></v-text-field>
          </v-col>
        </div>
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
            >ผู้พิจารณา Project</v-subheader
          >
        </v-col>
      </v-col>
      <!--  -->
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
      <!--  -->
      <div class="d-flex justify-center pt-0">
        <v-col cols="4" class="pt-0" style="margin-left: 4px">
          <v-dialog
            ref="dialog_tree"
            v-model="modal_tree"
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
      <!--  -->
      <hr />
      <!--  -->
      <div class="d-flex align-center">
        <v-col cols="auto">วันที่รับเงิน</v-col>
        <v-col>
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
                prepend-inner-icon="mdi-calendar"
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

        <v-col>
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
                prepend-inner-icon="mdi-clock-time-four-outline"
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
          class="px-2"
          label="จำนวนเงิน"
          suffix="บาท"
        ></v-text-field>
        <v-text-field prefix="(" suffix=")บาท"></v-text-field>
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
                <v-text-field v-model="sing_money_inspector"></v-text-field
              ></v-col>
              <v-col cols="auto" class="py-0">
                <v-subheader class="px-0">ผู้จ่ายเงิน</v-subheader></v-col
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
      file_check: '',
    }
  },
  methods: {
    addGin() {
      axios.post('http://localhost:5000/bugetones/add', {})
      this.$refs.form.reset()
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
