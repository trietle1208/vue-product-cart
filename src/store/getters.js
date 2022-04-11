export default {
    cartItemCount(state) {
        return state.cart.length;
    },
    getTotalCart(state) {
        let total = 0;
        state.cart.forEach(item => {
        total += item.cartItem.price * item.qty
    })
        return total;
    }
}