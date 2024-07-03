import { createStore } from "vuex";
import createUrl from '../utilities/UrlCreator';
import axios from 'axios';
import VueAxios from 'vue-axios';

const store = createStore({
  state: {
    data: []
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getSumOfStuff(state){
      return state.data.length;
    }
  },
  mutations: {
    setData(state, payload) {
      state.data.length = 0;
      state.data = payload;
    },
    sortByPrice(state, rule){
      const array = state.data.filter(item => true);
      array.sort((item1, item2) => {
        if (rule === 'big'){
          return item2.price - item1.price;
        }
        else return item1.price - item2.price;
      });
      store.commit('setData', array);
    }
  },
  actions: {
    async fetchData({state, commit}, value) {
      try {
        let url;
        if (value) url = createUrl(value);
        else url = createUrl();
        const response = await axios.get(url);
        store.commit('setData', response.data);
      } catch (error) {
        console.log(error)
      }
    },
    sortByPrice({state, commit}, value){
      store.commit('sortByPrice', value);
    }
  }
});

export default store;