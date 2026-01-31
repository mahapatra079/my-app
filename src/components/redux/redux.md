Notes For Redux

Redux is a global State Management Library used in React.

npm install redux

Flow : 
     UI → Action → Dispatch → Store → Reducer → Store → UI

## Redux Flow Explained:

1. **Action** - Plain JS object describing what happened
   ```js
   { type: 'INCREMENT', payload: 1 }
   ```

2. **Dispatch** - Function that sends action to store
   ```js
   dispatch({ type: 'INCREMENT' })
   ```

3. **Store** - Holds the entire state tree
   ```js
   const store = createStore(
     reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
   ```

## Redux DevTools Extension:

```js
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```

**Purpose:**
- Enables Redux DevTools browser extension
- Allows debugging Redux state changes
- Shows action history, state diff, time travel
- Only works if extension is installed
- Safe fallback if extension not available

4. **Reducer** - Pure function that returns new state
   ```js
   const reducer = (state, action) => {
     switch(action.type) {
       case 'INCREMENT': return { count: state.count + 1 }
       default: return state
     }
   }
   ```

5. **UI** - React components that subscribe to store
   ```js
   const count = useSelector(state => state.count)
   ```

## Provider Component:

```js
<Provider store={store}>
  <App />
</Provider>
```

**Purpose:**
- Makes Redux store available to all components
- Must wrap your entire app at the root level
- Enables useSelector and useDispatch hooks
- Required for React-Redux integration
- Only needed once at the top of component tree

**Example in index.js:**
```js
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## React-Redux Hooks:

**useSelector** - Access state from store
```js
const count = useSelector(state => state.count)
```

**useDispatch** - Dispatch actions to store
```js
const dispatch = useDispatch()
dispatch({ type: 'INCREMENT' })
```

## Redux Principles:

1. **Single Source of Truth** - One store for entire app
2. **State is Read-Only** - Only change via actions
3. **Pure Functions** - Reducers must be pure functions

## When to Use Redux:

✅ **Use Redux when:**
- Large app with complex state
- State shared across many components
- Need predictable state updates
- Time-travel debugging needed

❌ **Don't use Redux when:**
- Simple app with local state
- State only used in one component
- Learning React (use useState first)

## Redux Summary:

**Redux follows one-way data flow:**

1. **UI triggers an action** - User interaction creates action
2. **Action goes to reducer** - Dispatched action reaches reducer
3. **Reducer updates the store** - Pure function returns new state
4. **UI re-renders from store** - Components get updated state

**Key Benefits:**
- Predictable state management
- Time-travel debugging
- Centralized state for large apps
- Easy testing with pure functions