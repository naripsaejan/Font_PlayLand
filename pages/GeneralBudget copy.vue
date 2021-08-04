<template>
  <div>
    <v-app id="inspire">
      <v-stepper v-model="e1">
        <v-stepper-header class="set-top">
          <v-stepper-step :complete="e1 > 1" step="1"> </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"> </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items class="">
          <v-stepper-content class="h-screen" step="1">
            <div class="set-box" style="">
              <!-- <BudgetPageOne class="container custom-scrollbar" /> -->
            </div>
            <div class="set-bt" style="">
              <v-btn color="primary mr-3 my-2" @click="e1 = 2">
                Next Page
              </v-btn>
            </div>
          </v-stepper-content>

          <!--  -->
          <v-stepper-content class="h-screen" step="2">
            <div class="set-box" style="">
              <!-- <BudgetPageTwo class="container custom-scrollbar" /> -->
            </div>
            <div class="set-bt" style="">
              <v-btn color="primary mr-3 my-2" @click="e1 = 3">
                Next Page
              </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content class="h-screen" step="3">
            <div class="set-box" style="">
              <!-- <BudgetPageOne class="container custom-scrollbar" /> -->
            </div>
            <div class="set-bt" style="">
              <v-btn color="primary mr-3 my-2"> Submit </v-btn>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-app>
  </div>
</template>

<script>
// import BudgetPageOne from '@/components/BudgetPageOne.vue'
// import BudgetPageTwo from '@/components/BudgetPageTwo.vue'
export default {
  components: {
    // BudgetPageOne,
    // BudgetPageTwo,
  },
  data() {
    return {
      e1: 1,
    }
  },
}
</script>

<style scoped>
.set-top {
  position: fixed;
  z-index: 1;
  background-color: wheat;
  width: 100%;
}
.set-bt {
  bottom: 0px;
  position: fixed;
  /* background: rgb(179, 48, 48); */
  width: 70%;
  display: flex;
  justify-content: flex-end;
  height: 52px;
}

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  box-sizing: border-box;
  color: #44585d;
}

.container {
  height: 100%;
  /* overflow: scroll; */
  overflow: hidden;
}
h1 {
  margin: 0;
  text-align: center;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
.set-box {
  margin-top: 57px;
  height: 85vh;
}
</style>
