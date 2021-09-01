<template>
  <div>
    <div>
      <AppCreate @createColor="addColor" :msg="msg"
        >Enter your favorite color</AppCreate
      >
      <p>colors: {{ colors }}</p>
      <p>childsend:{{ childsends }}</p>
      <p>{{ testcolor }}+""+{{ testchildsend }}</p>
      <v-btn @click="msg = !msg"> sendd</v-btn>
    </div>
    <!-- <v-btn style="background-color: red" @click="Person_copy = !Person_copy"
      >call fun child</v-btn
    > -->
  </div>
</template>

<script>
import Create from './Create_copy.vue'
// import child from '../test/child.vue'
export default {
  props: ['hint'],
  components: {
    AppCreate: Create,
    // child,
  },
  data() {
    return {
      msg: null,
      Person_copy: null,
      colors: ['red', 'gree', 'blug'],
      childsends: ['1', '2'],
      testcolor: this.color,
      testchildsend: this.childsend,
    }
  },
  computed: {},
  methods: {
    addColor(color, childsend, ee) {
      // console.log('Person_copy addColor', ee)
      // this.$emit('createColor', this.color)
      console.log('check', color, childsend)
      // this.run()
      this.colors.push(color)
      this.childsends.push(childsend)
    },
    run() {
      // this.colors.push(color)
      // this.childsends.push(childsend)
    },
  },
}
</script>

<style></style>
