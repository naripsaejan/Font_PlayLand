<template>
  <!-- <div>
    <div class="d-flex justify-center">
      <img width="50%" height="50%" src="@/assets/img/logo/playland.png" />
    </div>
    <div class="d-flex justify-center">
      <p class="text-left" style="font-size: 150px">Welcome</p>
    </div>

  </div> -->
  <div>
    <h1>Gins</h1>
    <form @submit.prevent="addGin">
      <h4>New Product</h4>
      <p>
        <label for="name" class="input-label">Title:</label>
        <input
          id="name"
          v-model="title"
          type="text"
          name="name"
          class="input"
        />
      </p>
      <p>
        <label for="name" class="input-label">description:</label>
        <input
          id="name"
          v-model="description"
          type="text"
          name="name"
          class="input"
        />
      </p>
      <p>
        <button type="submit" value="Submit" class="button">Add Gin</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// export default {
//   middleware: 'auth',

//   components: {},
//   data() {
//     return {
//       e1: 1,
//     }
//   },
// }
export default {
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods: {
    addGin() {
      console.log(this.title, this.description)
      axios.post('http://localhost:5000/posts', {
        title: this.title,
        description: this.description,
      })
      //     .then((Response) => {})
      //     .catch((err) => {
      //       this.errors.push(err)
      //     })
    },
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
