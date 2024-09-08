import './App.css';
import data from './components/data';
import  {Cards}  from './components/Cards';
import { useState } from 'react';
function App() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) =>{
    const temp = tours.filter( tour => id !== tour.id);
    setTours(temp);
  }
  // return (
  //   <div className="App">
  //     <header>Plan with Yourself</header>
  //     <Cards />
  //   </div>
  // );
  if(tours.length === 0) return (
    <div className="container">
      <div className="message">
          <h1>Data Not Found</h1>
          <p>Sorry, we couldn't find the data you're looking for.</p>
          <button className='btn' onClick={()=>setTours(data)}>Refreash</button>
      </div>
    </div>)
  else  return (
      <div className="App">
        <header>Plan with Yourself</header>
        <Cards tours={tours} removeTour={removeTour} />
      </div>
    );
}

export default App;
