<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3" style="max-width: 1000px">
        <p class="d-flex justify-center mt-2">รายละเอียดค่าใช้จ่าย</p>
        <div class="pb-2">
          <v-col class="d-grid justify-end">
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
          <!--  -->
          <div class="d-flex">
            <v-col>
              <v-text-field v-model="firstname" label="ผู้เสนอ"></v-text-field>
            </v-col>
            <v-col
              ><v-text-field v-model="firstname" label="สังกัด"></v-text-field
            ></v-col>
          </div>
          <!--  -->
          <h1>ตาราง แบบบเพิ่มลดได้</h1>
          <!--  -->
          <div class="d-flex align-end">
            <v-col cols="8" class="d-flex pb-0">
              <v-subheader cols="2" class="d-flex align-end pl-0"
                >ตัวอักษร</v-subheader
              >
              <v-text-field cols="10" prefix="(" suffix=")บาท"></v-text-field>
            </v-col>
            <v-col cols="4" class="d-grid pb-0">
              <v-text-field v-model="firstname" label="ราคารวม"></v-text-field>
              <v-text-field v-model="firstname" label="ส่วนลด"></v-text-field>
              <v-text-field
                v-model="firstname"
                label="ราคาหลังหักส่วนลด"
              ></v-text-field>
              <v-text-field v-model="firstname" label="VAT 7%"></v-text-field>
              <v-text-field
                v-model="firstname"
                label="รวทเป็นเงินทั้งสิ้น"
              ></v-text-field>
            </v-col>
          </div>
          <!--  -->
          <v-col class="pt-0">
            <v-text-field v-model="firstname" label="หมายเหตุ"></v-text-field>
            <v-text-field
              v-model="firstname"
              label="วิธีการจัดซื้อ"
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              label="เงื่อนไขการชำระเงิน"
            ></v-text-field>
          </v-col>
          <!--  -->
          <div class="d-flex">
            <v-col>
              <v-select :items="items" label="วิธีการชำระเงิน"></v-select>
            </v-col>
            <v-col>
              <v-select :items="items2" label="ธนาคาร"></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="firstname"
                label="เลขที่บัญชี"
              ></v-text-field>
            </v-col>
          </div>
          <!--  -->
          <div class="d-flex justify-end px-0">
            <v-col cols="4">
              <v-text-field
                v-model="firstname"
                label="ชื่อบัญชี"
              ></v-text-field>
            </v-col>
          </div>
        </div>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['เงินสด', 'บัตรเครดิต', 'แคชเชียร์'],
      items2: ['กรุงเทพ', 'กรุงไทย', 'กสิกร'],
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
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@import 'assets/budget.scss';
</style>
