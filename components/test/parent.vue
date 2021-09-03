<template>
  <div class="parent">
    Button from Parent :
    <button @click="msg = !msg">Say Hello</button>
    <br />
    <child :msg="msg" />
  </div>
</template>

<script>
import child from '../test/child.vue'
import Child from '../test/child.vue'

export default {
  name: 'parent',
  components: { child },
  data: () => ({
    msg: null,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
