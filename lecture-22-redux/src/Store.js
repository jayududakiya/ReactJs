import { createStore } from 'redux'
import rootreducer from './redux/reducers/main';
import { ADD } from './redux/actions/action';

console.dir(createStore);


const Store = createStore(
    rootreducer
)



// console.log(Store);
// console.log(Store.getState());

Store.dispatch(ADD({item:"Hello"}))
Store.dispatch(ADD({item:"Hello 01"}))
Store.dispatch({type:"ADD_TO_CART",payload:{item:"Hello 02"}})
console.log(Store.getState().cardreducer.card);
export default Store;