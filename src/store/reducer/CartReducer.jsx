const initState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

const CartReducer = (state = initState, action) => {
    let findpro;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload
            const check = state.products.find(prod => prod.id === product.id)
            if (check) {
                return state;
            } else {
                const Tprice = state.totalPrice + product.discountPrice * quantity
                const TQuantity = state.totalQuantity + quantity;
                product.quantity = quantity;
                return {
                    ...state, products: [...state.products, product], totalPrice: Tprice,
                    totalQuantity: TQuantity

                }
            }
        case 'INC':
            findpro = state.products.find(prod => prod.id === action.payload)
            index = state.products.findIndex(produ => produ.id === action.payload)
            findpro.quantity += 1;
            state.products[index] = findpro;
            return {
                ...state,
                totalPrice: state.totalPrice + findpro.discountPrice,
                totalQuantity: state.totalQuantity + 1
            }
        case 'DEC':
            findpro = state.products.find(prod => prod.id === action.payload)
            index = state.products.findIndex(produ => produ.id === action.payload)
            if (findpro.quantity > 1) {
                findpro.quantity -= 1;
                state.products[index] = findpro;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findpro.discountPrice,
                    totalQuantity: state.totalQuantity - 1
                }
            } else {
                return state


            }
        case 'REMOVE':
            findpro = state.products.find(prod => prod.id === action.payload)
            const filtered = state.products.filter(pro=> pro.id !== action.payload)
            return{
                ...state,
                products : filtered,
                totalPrice : state.totalPrice - findpro.discountPrice * findpro.quantity,
                totalQuantity: state.totalQuantity - findpro.quantity 
            }

        default:
            return state
    }
};

export default CartReducer;