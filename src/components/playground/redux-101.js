import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) =>({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1}) => ({
  type: 'DECREMENT',
  decrementBy,
})

const setCount = ({count}) => ({
  type: 'SET',
  count,
})

const resetCount = () => ({
  type: 'RESET',
})

const reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': 
    return {
      count: state.count + action.incrementBy
    }
    case 'DECREMENT': 
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
    return {
      count: state.count - decrementBy
    }
    case 'RESET': return {
      count: state.count = 0
    }
    case 'SET': return {
      count: action.count
    }
    default: 
      return state;
  }
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 10}));
store.dispatch(resetCount())
unsubscribe()
