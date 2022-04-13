import axiosClient from "@/axios"
import store from "."
export default {
    getProducts({commit}) {
        commit('SET_STATE_LOADING', true)
        axiosClient.get('/product/products').then((res) => {
            commit('SET_PRODUCT', res.data.data)
            commit('SET_STATE_LOADING', false)
        })
    },
    async getReviews({commit}, id) {
        let respone = await axiosClient.get(`/product/ratings/${id}`).then((res) => {
            commit('SET_REVIEW',res.data.data)
        })
    },
    async getInfoUserReview({commit}, id) {
        let respone = await axiosClient.get(`/product/userInfo/${id}`)
        return respone
    },
    addReview({commit},{rating,comment,productId}) {
        let response = axiosClient.post("/product/ratings", {rating,comment,productId}).then((res) => {
            store.dispatch('getReviews',productId);
        })
        return response
    },
    addToCart({commit}, {cartItem,qty}) {
        commit('ADD_TO_CART', {cartItem,qty});
    },
    onDeleteItemCart({commit},cartItem) {
        commit('DELETE_CART_ITEM',cartItem);
    },
    incrementsCartItem({commit}, id){
        commit('INCREMENTS', id)
    },
    decrementsCartItem({commit}, id){
        commit('DECREMENTS', id)
    },
    saveProduct({commit}, product){
        delete product.image_url;
        let respone;
        if(product.id) {
            respone = axiosClient.put(`/product/products/${product.id}`,product).then((res) => {
                commit('SET_PRODUCT',product);
                return res;
            })
        }else {
            respone = axiosClient.post("/product/products",product).then((res) => {
                commit('SET_PRODUCT',product);
                return res;
            })
        }
        return respone;
    },
    async deleteProduct({}, id){
        const respone = await axiosClient.delete(`/product/products/${id}`)
        return respone
    },
    async getProduct({commit},id) {
        commit('SET_STATE_LOADING',true);
        let response  = await axiosClient.get(`product/products/${id}`).then((res) => {
            commit('GET_PRODUCT',res.data);
            commit('SET_STATE_LOADING',false);
        })
        return response
    },
    register({commit}, user) {
    return axiosClient.post('/register',user)
            .then(({data}) => {
            commit('SET_USER', data);
            return data;
            })
    },
    login({commit}, user) {
    return axiosClient.post('/login',user)
            .then(({data}) => {
            commit('SET_USER', data);
            return data;
            })
    },
    logout({commit}) {
    return axiosClient.post('/logout')
            .then((res) => {
            commit('LOGOUT')
            return res;
            })
    }   
}