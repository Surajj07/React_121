import {incrementCountAction} from './com/action'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const count=useSelector(state=>state.count)
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>Count:{count}</h1>
     <button onClick={()=>dispatch(incrementCountAction(1))}>add</button>
     <button onClick={()=>dispatch(incrementCountAction(-1))}>reduce</button>
    </div>
  );
}

export default App;
