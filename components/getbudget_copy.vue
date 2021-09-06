<template lang="html">
  <div>
    <!-- <div>
      <v-text-field v-model="query" label="Search"> </v-text-field>
      <v-btn @click="handleSearchManga">Search</v-btn>
    </div> -->
    <div class="d-flex flex-wrap justify-center">
      <!-- {{ budget }} -->
      <v-card v-for="manga in budget" :key="manga.id_file">
        <v-list-item three-line style="max-width: 1000px">
          <v-list-item-content>
            <p class="d-flex justify-center">
              แบบเสนอราคาสำหรับเบิกจ่ายงบประมาณ
            </p>
            <div class="d-grid justify-end">
              <p>เลขที่เอกสาร{{ manga.id_file }}</p>
              <p>วันที่เอกสาร {{ manga.date_file }}</p>
            </div>
            <div class="d-flex justify-center align-center">
              <v-subheader>ผู้เสนอ</v-subheader>
              <v-text-field :value="manga.presenter" readonly></v-text-field>
              <v-subheader>สังกัด</v-subheader>
              <v-text-field :value="manga.affiliation" readonly></v-text-field>
            </div>
            <div>
              <v-subheader
                >ขอเสนอราคาสำหรับเบิกจ่ายงบประมาณเพื่อใช้สำหรับ</v-subheader
              >
              <v-text-field
                class="pl-4"
                :value="manga.offerprice"
                readonly
              ></v-text-field>
              <v-subheader>เนื่องจากความจำเป็น</v-subheader>
              <v-text-field
                class="pl-4"
                :value="manga.necessity"
                readonly
              ></v-text-field>
              <v-subheader>ดำเนินการด้วยวิธี</v-subheader>
              <v-text-field
                class="pl-4"
                :value="manga.action"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-subheader>มีระยะเวลาตั้งแต่วันที่</v-subheader>
              <v-text-field
                class="pl-4"
                :value="manga.date_start"
                readonly
              ></v-text-field>
              <v-subheader>ถึงวันที่</v-subheader>
              <v-text-field
                class="pl-4"
                :value="manga.date_finished"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-subheader
                >โดยมีรายละเอียดค่าใช้จ่ายตามเอกสารแนบท้าย
                รวมเป็นเงินทั้งสิ้น</v-subheader
              >
              <v-text-field
                class="pl-4"
                :value="manga.sum_total"
                suffix="บาท"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-subheader>ตัวอักษร</v-subheader>
              <v-text-field
                class="pl-4"
                :value="manga.sum_tatal_text"
                suffix="บาท"
                readonly
              ></v-text-field>
            </div>
            <div class="d-flex justify-center align-center">
              <v-subheader>เสนอแบบเสนอราคาฉบับนี้เข้าสู่ระบบวันที่</v-subheader>
              <v-text-field
                class="pl-4"
                :value="manga.date_in"
                readonly
              ></v-text-field>
              <v-subheader>เวลา</v-subheader>
              <v-text-field
                class="pl-4"
                :value="manga.time_in"
                readonly
                suffix="น."
              ></v-text-field>
            </div>

            <!--  -->
            <div class="d-flex justify-center">
              <v-col class="col-6">
                <div class="col-12 d-flex align-center">
                  <v-subheader>ลงชื่อ</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="manga.sing_presenter"
                    readonly
                  ></v-text-field>
                  <v-subheader>ผู้เสนอ</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>(</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="manga.confirm_presenter"
                    readonly
                  ></v-text-field>
                  <v-subheader>)</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>วันที่</v-subheader>
                  <v-text-field
                    class="pr-9"
                    :value="manga.date_presenter"
                    readonly
                  ></v-text-field>
                </div>
              </v-col>
            </div>
            <div class="d-flex justify-center">
              <v-col class="col-6">
                <div class="col-12 d-flex align-center">
                  <v-subheader>ลงชื่อ</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="manga.sing_head"
                    readonly
                  ></v-text-field>
                  <v-subheader>หัวหน้าสังกัด</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>(</v-subheader>
                  <v-text-field
                    class="d-flex text-center"
                    style="text-align: center"
                    :value="manga.confirm_head"
                    readonly
                  ></v-text-field>
                  <v-subheader>)</v-subheader>
                </div>
                <div class="col-12 d-flex align-center">
                  <v-subheader>วันที่</v-subheader>
                  <v-text-field
                    class="pr-9"
                    :value="manga.date_head"
                    readonly
                  ></v-text-field>
                </div>
              </v-col>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      query: '',
      budget: [],
    }
  },
  methods: {
    getall() {
      console.log('e')
      const url = `https://playlandbackend.herokuapp.com/bugetones`
      axios.get(url).then((res) => {
        this.budget = res.data
      })
    },
    handleSearchManga() {
      console.log('e')
      const url = `https://playlandbackend.herokuapp.com/bugetones`
      axios.get(url).then((res) => {
        console.log(res.data)
        //   this.results = res.data
      })
    },
  },
  mounted() {
    this.getall()
  },
}
</script>

<style lang="css" scoped></style>
