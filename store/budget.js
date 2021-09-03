const { apiUrl } = process.env
const state = {
  //ข้อมูล
  firstName: 'Thiti',
  lastName: 'Yamsung',
  budgetone: '',
}

const getters = {
  //การนำ state ไปใช้งาน
  getAllPost: (state, getters, rootState) => {
    console.log('1')
    return state.firstName + ' ' + state.lastName
  },
  // async getbudget(state) {
  //   let res = await fetch(`${apiUrl}/bugetones`)
  //   let test = await res.json()
  //   console.log('test', test)
  //   return (state.budgetone = test)
  // },
}

const actions = {
  //ทำงานร่วมกับ backend เรียกใช้ผ่าน components
  setName: ({ commit, state }, payload) => {
    console.log('2')
    // let res = await fetch(`${apiUrl}/bugetones`)
    // let test = await res.json()
    //   console.log('test', test)
    //   return (state.budgetone = test)
    // commit('SET_FIRST_NAME', payload.firstName)
    // commit('SET_LAST_NAME', payload.lastName)
    // commit('setPostState', payload.loadData)
    return fetch(`${apiUrl}/bugetones`).then((data) => {
      store.commit('setPostState', data.something)
      return store.state.something
    })
  },
}

const mutations = {
  //จัดการข้อมูลใน state
  SET_FIRST_NAME(state, payload) {
    console.log('3')
    state.firstName = payload
  },
  SET_LAST_NAME(state, payload) {
    console.log('4')
    state.lastName = payload
  },
  setPostState(state, payload) {
    console.log('5')
    state.budgetone = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
