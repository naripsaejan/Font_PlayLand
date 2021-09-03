import Vuex from 'vuex'

import budget from './budget'
// import user from './user'
// import point from './point'
// import address from './address'
// import history from './history'
// import privilege from './privilege'
// import favorite from './favorite'
// import banner from './banner'
// import winner from "~/store/winner";

const store = () =>
  new Vuex.Store({
    modules: {
      budget,
      // user,
      // point,
      // address,
      // history,
      // privilege,
      // favorite,
      // banner,
      // winner
    },
  })

export default store
