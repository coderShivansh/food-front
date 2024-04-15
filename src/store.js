import {combineReducers} from 'redux'
import { getAllFoodsReducer , addFoodReducer , getFoodByIdReducer, editFoodReducer} from './reducers/foodReducers'
import { createStore, applyMiddleware} from 'redux'
import  {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { loginUserReducer, registerUserReducer , getAllUsersReducer} from './reducers/userReducers'
import { placeOrderReducer ,getUserOrdersReducer , getAllOrdersReducer } from './reducers/orderReducers'


const finalReducer=combineReducers({
    getAllFoodsReducer:getAllFoodsReducer,
    cartReducer:cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addFoodReducer: addFoodReducer,
    getFoodByIdReducer :getFoodByIdReducer,
    editFoodReducer: editFoodReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer
})

const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems'))  : []

const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState={
   cartReducer:{
    cartItems: cartItems
   },
   loginUserReducer: {
    currentUser: currentUser
   }
}

const composedEnhancers=composeWithDevTools({})

const store=createStore(finalReducer,initialState,composedEnhancers(applyMiddleware(thunk)))

export default store