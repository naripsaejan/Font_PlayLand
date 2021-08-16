// export const state = () => ({
//   myState: 'Hello',
// })

import Vuex from 'vuex'

import history from './history'

const store = () =>
  new Vuex.Store({
    modules: {
      history,
    },
  })

export default store
