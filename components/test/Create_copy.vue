<template>
  <form @submit.prevent="saveColor">
    // (1)
    <div class="form-group">
      <h1><slot></slot></h1>
      <label>Input new Color</label>
      <input
        type="text"
        class="form-control"
        :placeholder="hint"
        v-model="testcolor"
      />
      <label>Input new childsend</label>
      <input
        type="text"
        class="form-control"
        :placeholder="hint"
        v-model="childsend"
      />
      // (2)
    </div>
    <button type="submit" class="btn btn-primary">Submit Create_copy</button>
  </form>
</template>
<script>
export default {
  props: ['hint', 'msg'],
  data() {
    return {
      testcolor: 'color', // (3)
      childsend: 'childsend',
      a: 'a',
      b: 'b',
    }
  },
  watch: {
    msg() {
      this.saveColor()
      console.log('msg create')
    },
  },
  methods: {
    saveColor() {
      console.log(
        'Create_copy saveColor//4',
        this.$emit(
          'createColor',
          this.testcolor,
          this.childsend,
          this.a,
          this.b
        )
      )
    },
  },
  mounted() {
    console.log('Create_copy create//2')
    // this.$refs.inputColor.focus()
  },
}
</script>
