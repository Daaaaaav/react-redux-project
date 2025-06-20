import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store/counter/action';
import './App.css'
import { store } from './store';
import { Provider } from 'react-redux';
import hime from './assets/hime.jpg';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <img src={hime} alt="Himes" width={150} height={250}/>
      <h1>Redux Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </Provider>
  )
}

export default App
