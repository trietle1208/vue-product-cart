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
      sum_rating: 0,
      sum_review: 0,
      image: null,
    },
    cartItem: null,
    cart:[
      {
        "cartItem": {
          "id": 1,
          "name": "VueJs",
          "price": 56,
          "description": "VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces. It is one of the famous frameworks used to simplify web development. VueJS focusses on the view layer.",
          "created_at": "2022-04-12T02:29:55.000000Z",
          "updated_at": "2022-04-12T02:29:55.000000Z",
          "image": "http://localhost:8000/images/tI7FjcfjEdDIY5aU.jpeg",
          "review_sum_rating": 0,
          "review_count": 0
        },
        "qty": 1
      },
      {
        "cartItem": {
          "id": 2,
          "name": "NodeJs Book",
          "price": 40,
          "description": "Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection.",
          "created_at": "2022-04-12T02:30:52.000000Z",
          "updated_at": "2022-04-12T02:30:52.000000Z",
          "image": "http://localhost:8000/images/iueZX04LKen4tkbR.png",
          "review_sum_rating": 6,
          "review_count": 2
        },
        "qty": 1
      }
    ],
    ratings: [],
  },
  getters,
  mutations,
  actions,
  modules: {
    
  },
});
