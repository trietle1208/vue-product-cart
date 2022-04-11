export default {
    SET_PRODUCT(state, products){
        state.products = products;
    },
    GET_PRODUCT(state, product) {
        state.product.data = product.data;
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