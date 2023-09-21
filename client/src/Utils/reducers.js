import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART,
    TOGGLE_CART,
} from "./actions";

const defaultState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
};

// Reducers must return new state, not mutate the original state.
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        // TODO: Add a comment describing the functionality of the UPDATE_PRODUCTS case
        // Updates the products in the state with new data from action
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            };
        // TODO: Add a comment describing the functionality of the UPDATE_CART_QUANTITY case
        // Your comment here
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((product) => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                }),
            };

        // TODO: Add a comment describing the functionality of the REMOVE_FROM_CART case
        //  Removes a product from the shopping cart in the state
        case REMOVE_FROM_CART:
            let newState = state.cart.filter((product) => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState,
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: [],
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen,
            };

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            };

        // TODO: Add a comment describing what the default case is for
        // Returns the current state when no matching action
        default:
            return state;
    }
};

export default reducer;