import { createStore } from 'redux';
import moviesReducer from '../reducers/movies';

const store = createStore(moviesReducer);
store.subscribe(() => {
 console.log('store data:', store.getState());
});

export default store;