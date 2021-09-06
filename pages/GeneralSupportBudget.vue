<template>
  <div>
    <SteppersSupport />
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  components: {
    SteppersSupport: () => import('~/components/SteppersSupport.vue'),
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
