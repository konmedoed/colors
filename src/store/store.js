import { createStore } from "vuex";
import createUrl from '../utilities/UrlCreator';
import axios from 'axios';
import VueAxios from 'vue-axios';

const store = createStore({
  state: {
    data: [],
    basket: [],
    faded: []
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getSumOfStuff(state){
      return state.data.length;
    },
    getBasketData(state) {
      return state.basket;
    },
    getNumOfBasketStuff(state){
      let sum = 0;
      state.basket.forEach(element => {
        sum += element.sum;
      });
      return sum;
    },
    getSumOfBasketStuff(state){
      let sum = 0;
      state.basket.forEach(element => {
        sum = sum + element.card.price * element.sum;
      });
      return sum;
    },
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
    },
    addInBasket(state, id){
      const target = state.data.find(item => item.id === id);
      const index = state.basket.findIndex(item => item.cardId === id);
      if (index >= 0) state.basket[index].sum++
      else {
        const card = {
          cardId: id,
          sum: 1,
          card: target
        };
        state.basket.push(card);
      }
    },
    clearBasket(state){
      state.basket.length = 0;
    },
    removeOne(state, id){
      const index = state.basket.findIndex(item => item.cardId === id);
      if (state.basket[index].sum === 1) store.commit('deleteItem', id)
      else state.basket[index].sum -= 1; //переписать!!!
    },
    deleteItem(state, id){
      const index = state.basket.findIndex(item => item.cardId === id);
      const itemInFaded = state.basket.splice(index, 1); //переписать!!!
      state.faded.push(itemInFaded[0]);
    },
    removeFromFaded(state, id){
      const index = state.faded.findIndex(item => item.cardId === id);
      state.faded.splice(index, 1); //переписать!!!
    },
    addFromFaded(state, id){
      store.commit('addInBasket', id);
      store.commit('removeFromFaded', id);
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
    },
    addInBasket({state, commit}, id){
      store.commit('addInBasket', id);
    },
    clearBasket({state, commit}){
      store.commit('clearBasket');
    },
    removeOne({state, commit}, id){
      store.commit('removeOne', id);
    },
    deleteItem({state, commit}, id){
      store.commit('deleteItem', id);
    },
    addFromFaded({state, commit}, id){
      store.commit('addFromFaded', id);
    }
  }
});

export default store;