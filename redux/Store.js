import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/CountReducers';

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = createStore(rootReducer);


