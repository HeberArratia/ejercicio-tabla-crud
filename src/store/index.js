import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resource_url = 'http://localhost:3000/people/';

export default new Vuex.Store({
  state: {
    people: [],
    currentPage: 1,
    person: {
      first_name: '',
      last_name: '',
      email: ''
    }
  },
  mutations: {
    setPeople: (state, people) => state.people = people,
    setPerson: (state, person) => state.person = person,
    newPerson: (state, person) => state.people.data.unshift(person),
    updPerson: (state, person) => {
      const index = state.people.data.findIndex(p => p.id === person.id);
      if (index !== -1) {
          state.people.data.splice(index, 1, person);
      }        
    }
  },
  actions: {
    async fetchPeople({commit}, page) {
      console.log(page);
      const perPage = 10;
      const response = await axios.get(resource_url, 
        {
        params: {
          _page: page,
          _limit: perPage,
          _sort: 'id',
          _order: 'desc'
        }
      });
      
      const totalItems = response.headers["x-total-count"];
      const totalPages = Math.ceil(totalItems/perPage);
      commit('setPeople', {
        data: response.data,
        totalPages: totalPages,
      });
    },
    async fetchPerson({commit}, id) {
      const response = await axios.get(`${resource_url}${id}`);
      commit('setPerson', response.data);
    },
    async addPerson( { commit }, person) {
      const response = await axios.post(resource_url, person);
      commit('newPerson', response.data);
    },
    async updatePerson( { commit }, person) {
      const response = await axios.put(`${resource_url}${person.id}`, person);
      commit('updPerson', response.data);
    },
    async removePerson( { commit, dispatch }, person) {
      await axios.delete(`${resource_url}${person.id}`);
      dispatch('fetchPeople', 1);
    }
  },
  modules: {
  }
})
