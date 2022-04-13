import { createStore } from "vuex";
import axios from 'axios';
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import axiosClient from "../axios";

export default createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    products: [],
    isLoading: false,
    product: {
      data: {},
      sum_rating: null,
      sum_review: null,
      image: null,
    },
    cartItem: null,
    cart:[],
    ratings: [],
  },
  getters,
  mutations,
  actions,
  modules: {
    
  },
});
