<template>
  <div>
    <v-form ref="form" @submit.prevent="addGin">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">
          แบบเสนอราคาสำหรับเบิกจ่ายงบประมาณ
        </p>
        <div class="mb-6">
          <!--  -->
          <div class="d-flex justify-end">
            <v-col cols="3">
              <v-text-field
                v-model="id_file"
                label="เลขที่เอกสาร"
              ></v-text-field>
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
              <!-- end date_file modal_one -->
            </v-col>
          </div>
          <!--  -->
          <div class="d-flex">
            <v-col cols="6">
              <v-text-field v-model="presenter" label="ผู้เสนอ"></v-text-field
            ></v-col>
            <v-col cols="6">
              <v-text-field v-model="affiliation" label="สังกัด"></v-text-field>
            </v-col>
          </div>

          <v-col>
            <v-textarea
              v-model="offerprice"
              name="input-3-1"
              label="ขอเสนอราคาสำหรับเบิกจ่ายงบประมาณเพื่อใช้สำหรับ"
              hint="Hint text"
              rows="3"
            ></v-textarea>
          </v-col>
          <v-col>
            <v-textarea
              v-model="necessity"
              name="input-3-1"
              label="เนื่องจากความจำเป็น"
              hint="Hint text"
              rows="3"
            ></v-textarea>
          </v-col>
          <v-col>
            <v-textarea
              v-model="action"
              name="input-3-1"
              label="ดำเนินการด้วยวิธี"
              rows="3"
              hint="Hint text"
            ></v-textarea>
          </v-col>
          <!--  -->
          <v-col class="d-flex">
            <v-subheader class="pl-0">มีระยะเวลาตั้งแต่</v-subheader>
            <!-- date_start modal_start -->
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
                  label="วันที่เริ่ม"
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
            <!-- end date_start modal_start -->
            <!-- date_finished modal_finished -->
            <v-dialog
              ref="dialog_finished"
              v-model="modal_finished"
              :return-value.sync="date_finished"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date_finished"
                  label="วันที่สิ้นสุด"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date_finished" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_finished = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog_finished.save(date_finished)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
            <!--finished date_finished modal_finished -->
          </v-col>
          <!--  -->
          <v-col class="d-flex">
            <v-subheader class="justify-start pl-0"
              >โดยมีรายละเอียดค่าใช้จ่ายตามเอกสารแนบท้าย
              รวมเป็นเงินทั้งสิ้น</v-subheader
            >
            <v-text-field v-model="sum_total" suffix="บาท"></v-text-field>
          </v-col>
          <!--  -->
          <v-col cols="6" class="d-flex align-center">
            <v-subheader class="pl-0">ตัวอักษร</v-subheader>
            <v-text-field
              v-model="sum_tatal_text"
              prefix="("
              suffix=")บาท"
            ></v-text-field>
          </v-col>
          <!--  -->
          <v-col class="d-flex">
            <v-subheader class="justify-start pl-0"
              >เสนอแบบเสนอราคาฉบับนี้เข้าสู่ระบบวันที</v-subheader
            >

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
                  prepend-icon="mdi-calendar"
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
            </v-dialog>

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
                  prepend-icon="mdi-clock-time-four-outline"
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
                <v-btn text color="primary" @click="$refs.dialog.save(time_in)">
                  OK
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
          <!--  -->
          <v-col class="d-flex justify-center pb-0">
            <v-col cols="5" class="d-flex align-center pb-0">
              <v-subheader class="pr-1">ลงชื่อ</v-subheader>
              <v-text-field
                v-model="sing_presenter"
                class="pt-0"
              ></v-text-field>
              <v-subheader class="pl-1">ผู้เสนอ</v-subheader>
            </v-col>
          </v-col>
          <!--  -->
          <v-col class="d-flex justify-center py-0">
            <v-col cols="4" class="d-flex align-center py-0">
              <v-subheader class="pr-1 pl-0">(</v-subheader>
              <v-text-field
                v-model="confirm_presenter"
                class="pt-0"
              ></v-text-field>
              <v-subheader class="pl-1">)</v-subheader>
            </v-col>
          </v-col>
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
          <!--  -->
          <div class="d-flex justify-center pb-0">
            <v-col cols="5" class="d-flex align-center pb-0">
              <v-subheader class="pr-1">ลงชื่อ</v-subheader>

              <v-text-field v-model="sing_head"></v-text-field>

              <v-subheader class="pl-1 pr-0">หัวหน้าสังกัด</v-subheader>
            </v-col>
          </div>
          <!--  -->
          <div class="d-flex justify-center pb-0">
            <v-col cols="4" class="d-flex align-center pb-0">
              <v-subheader class="pr-0 pl-0">(</v-subheader>
              <v-text-field v-model="confirm_head" class="pt-1"></v-text-field>
              <v-subheader class="pl-0">)</v-subheader>
            </v-col>
          </div>
          <!--  -->
          <div class="d-flex justify-center pt-0">
            <v-col cols="4" class="pt-0">
              <v-dialog
                ref="dialog_date_head"
                v-model="modal_date_head"
                :return-value.sync="date_head"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="pt-0 px-6"
                    v-model="date_head"
                    label="วันที่"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_head" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_date_head = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog_date_head.save(date_head)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </div>
        </div>
      </v-row>
      <div>
        <!-- <v-btn type="submit" value="Submit" class="button-pr btn-send"
          >ส่งข้อมูล</v-btn
        > -->
      </div>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
import budget from '~/store/budget'

export default {
  props: ['call_fun'],
  name: 'BudgetPageOne',
  data() {
    return {
      budgetone: [],
      valid: false,
      id_file: '',
      date_file: '',
      presenter: '',
      affiliation: '',
      offerprice: '',
      necessity: '',
      action: '',
      date_start: '',
      date_finished: '',
      sum_total: '',
      sum_tatal_text: '',
      date_in: '',
      time_in: '',
      sing_presenter: '',
      confirm_presenter: '',
      date_presenter: '',
      sing_head: '',
      confirm_head: '',
      modal_one: false,
      modal_two: false,
      modal_tree: false,
      modal_start: false,
      modal_finished: false,
      time: null,
      modal: false,
      date_head: '',
      modal_date_head: false,
    }
  },
  methods: {
    addGin() {
      this.budgetonesend = [
        {
          date_file: this.date_file,
          presenter: this.presenter,
          affiliation: this.affiliation,
          offerprice: this.offerprice,
          necessity: this.necessity,
          action: this.action,
          date_start: this.date_start,
          date_finished: this.date_finished,
          sum_total: this.sum_total,
          sum_tatal_text: this.sum_tatal_text,
          date_in: this.date_in,
          time_in: this.time_in,
          sing_presenter: this.sing_presenter,
          confirm_presenter: this.confirm_presenter,
          date_presenter: this.date_presenter,
          sing_head: this.sing_head,
          confirm_head: this.confirm_head,
          date_head: this.date_head,
        },
      ]
      this.$emit('createpangone', this.budgetonesend)
      // this.$refs.form.reset()
    },
  },
  watch: {
    call_fun() {
      console.log('call_fun one')
      this.addGin()
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
