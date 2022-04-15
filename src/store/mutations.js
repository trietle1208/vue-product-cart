export default {
    SET_PRODUCT(state, products){
        state.products = products;
    },
    SET_REVIEW(state, reviews) {
        state.ratings = [];
        state.ratings = reviews;
    },
    GET_PRODUCT(state, product) {
        console.log(product)
        state.product.data = product.data;
        state.product.sum_review = product.sum_review;
        state.product.sum_rating = product.sum_rating;
        state.product.image = product.image;
    },
    SET_STATE_LOADING(state, loading) {
        state.isLoading = loading
    },
    ADD_TO_CART(state, {cartItem, qty}) {
        let productInCart = state.cart.find(item => {
            return item.cartItem.id === cartItem.id;
        });
        if(productInCart) {
            productInCart.qty += qty;
        }else{
            state.cart.push({
            cartItem,
            qty,
            })
        }
    },
    DELETE_CART_ITEM(state, cartItem){
        state.cart = state.cart.filter(item => {
        return item.cartItem.id !== cartItem.id;
    })
    },
    INCREMENTS(state, id){
        let productInCart = state.cart.find(item => {
            return item.cartItem.id === id;
        });
        productInCart.qty++;
    },
    DECREMENTS(state, id){
        let productInCart = state.cart.find(item => {
            return item.cartItem.id === id;
        });
        if(productInCart.qty > 1){
            productInCart.qty--;
        }
    },
    SET_USER(state, userData) {
        state.user.token = userData.token;
        state.user.data = userData.user;
        sessionStorage.setItem('TOKEN', userData.token);
    },
    LOGOUT(state) {
        state.user.data = {};
        state.user.token = null;
        sessionStorage.removeItem('TOKEN');
    }
}