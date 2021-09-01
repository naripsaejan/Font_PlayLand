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
        v-model="color"
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
      color: 'color1', // (3)
      childsend: 'childsend2',
    }
  },
  watch: {
    msg() {
      this.saveColor()
      console.log('msg ')
    },
  },
  methods: {
    saveColor() {
      console.log(
        'Create_copy saveColor//4',
        this.$emit('createColor', this.color, this.childsend)
      )
    },
  },
  mounted() {
    console.log('Create_copy create//2')
    // this.$refs.inputColor.focus()
  },
}
</script>
