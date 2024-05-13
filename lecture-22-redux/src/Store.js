import { createStore } from 'redux'
import rootreducer from './redux/reducers/main';

console.dir(createStore);


const Store = createStore(
    rootreducer
)



console.log(Store);
console.log(Store.getState());
console.log(Store.dispatch({type:"ADD_TO_CART"}));




export default Store;