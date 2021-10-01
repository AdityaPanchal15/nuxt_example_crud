const state = () => ({
  categories: [],
})

const mutations = {
  setCategories(state, data) {
    state.categories = data
  },
}

const getters = {
  getCategories(state) {
    return state.categories
  },
}

const actions = {
  fetchCategories({ commit }) {
    let data = this.$storeApi.fetchAll('categories')
    if(!data) {
      data = []
    }
    commit('setCategories',data)
  },
  getCategoryById({ commit, state }, id) {
    return this.$storeApi.fetchRow('categories',id)
    // return state.categories.find((category) => category.id === id)
  },
  addCategory({ commit, state }, data) {
    this.$storeApi.insert('categories',data,true)
  },
  updateCategory({ commit, state }, data) {
    this.$storeApi.update('categories',data.id,data)

    // const index = state.categories.findIndex((category) => category.id === data.id)
    
    // if (index > -1) {
    //   const categories = [...state.categories]
    //   categories[index] = {
    //     id: data.id,
    //     name: data.categoryName,
    //     calories: data.calories,
    //     fat: data.fat,
    //   }
    //   this.$storeApi.set('categories', categories)
    //   return { success: true }
    // }
    return { success: true }
  },

  deleteCategory({ commit, state }, id) {
    this.$storeApi.delete('categories',id)
    // const index = state.categories.findIndex((category) => category.id === id)
    // if (index > -1) {
    //   const categories = [...state.categories]
    //   categories.splice(index, 1)
    //   this.$storeApi.set('categories', categories)
    //   return { success: true }
    // }
    // return { success: false }
  },
}

export default {
  namespaced: true,
  getters,
  mutations,
  state,
  actions,
}
