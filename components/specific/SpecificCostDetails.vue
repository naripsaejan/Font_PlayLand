<template>
  <div>
    <v-form v-model="valid">
      <v-row class="mt-3">
        <p class="d-flex justify-center mt-2">
          แบบนำเสนอราคาสำหรับเบิกจ่ายงบประมาณ
        </p>
        <div class="d-grid justify-end">
          <v-text-field v-model="firstname" label="เลขที่เอกสาร"></v-text-field>
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
        <h1>ตาราง แบบบเพิ่มลดได้</h1>
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
