import { useDispatch, useSelector } from 'react-redux';

import { decremetCounter, incrementCounter, restCounter } from './conunterAction/action';

import './App.css';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
 const hendelincrement = () => {
      dispatch(incrementCounter())
  }
  const hendeldecrement = () =>{
    dispatch(decremetCounter())
  }
  const hendelrest = () =>{
    dispatch(restCounter())
  }
  return (
    <div className="App">
     
     <h2>Counter App</h2>
     <button className='cl'>  <h3 className='count'>count : {count}</h3></button>
     <div className="bodys">
     <div className='des'>
     <button className='increment' onClick={hendelincrement}>Increment</button>
     </div>
     <div  className='des'>
     <button className='decrement' onClick={hendeldecrement}>Decrement</button>
     </div>
      <div className='des'>
      <button className='reset' onClick={hendelrest}>Reset</button>
      </div>

     </div>
    </div>
  );
}

export default App;
