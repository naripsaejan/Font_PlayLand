<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1"> page 1 </v-stepper-step>

        <v-stepper-content step="1" class="d-flex justify-center">
          <v-card
            class="mb-12"
            elevation="2"
            style="width: 1000px"
            outlined
            shaped
          >
            <SupportPageOne />
          </v-card>
          <v-btn color="primary" @click="e6 = 2">หน้าถัดไป </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2"> page 2 </v-stepper-step>

        <v-stepper-content step="2" class="d-flex justify-center">
          <v-card
            class="mb-12"
            elevation="2"
            style="width: 1000px"
            outlined
            shaped
          >
            <SupportPageTwo
          /></v-card>
          <v-btn color="primary" @click="e6 = 1"> ย้อนกลับ </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {
    SupportPageOne: () => import('~/components/support/SupportPageOne.vue'),
    SupportPageTwo: () => import('~/components/support/SupportPageTwo.vue'),
  },
  data() {
    return {
      e6: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
