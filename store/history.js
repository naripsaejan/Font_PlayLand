// const { apiUrl, baseURL } = process.env
const state = {
  conuter: 0,
  loading: [],
}
const mutations = {
  setLoading(state, isLoading = true) {
    state.loading = isLoading
  },
}

const actions = {
  // loadHistoryIncrement({ commit, rootState }, payload) {
  //   commit('setLoading')
  //   return this.$axios.get(`${apiUrl}/posts`)
  //   // ,
  //   // {
  //   //   headers: {
  //   //     Accept: 'application/json',
  //   //     Authorization: `Bearer ${rootState.user.token}`,
  //   //   },
  //   // }
  // },
  // loadMore({ commit, rootState }) {
  //   commit('setLoading')
  //   return this.$axios
  //     .get(`${apiUrl}/posts`, {
  //       headers: {
  //         Accept: 'application/json',
  //         Authorization: `Bearer `,
  //       },
  //     })
  //     .then(({ data }) => {
  //       return new Promise((resolve) => {
  //         resolve(data)
  //       })
  //     })
  //     .catch((error) => {
  //       return new Promise((resolve, reject) => {
  //         reject(error)
  //       })
  //     })
  //     .finally(() => {
  //       commit('setLoading', false)
  //     })
  // },
}
// function loadHistoryIncrement() {
//   this.loading = fetch(
//     'https://us-central1-votegame-webadmin.cloudfunctions.net/vote/api/game'
//   ).then((result) => {
//     return result.json().then((data) => {
//       consloe.log(data)
//     })
//   })
//   // consloe.log((this.loading = data))
// }

// loading = fetch(
//   'https://us-central1-votegame-webadmin.cloudfunctions.net/vote/api/game'
// ).then((result) => {
//   return result.json().then((data) => {
//     consloe.log(data)
//   })
// })

export default {
  state,
  actions,
  mutations,
}
