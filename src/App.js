import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AllCards } from './components/AllCards';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setTours(res.data));
  }, []);
  
  
  const filterTour = (tit) => {
    setTours(tours.filter((el) => el.name !== tit))
  
}
  
if(tours.length === 0){
  return <div className="wrapper">
    <h1>no tours left</h1>
    <button onClick={() => axios.get(url).then((res) => setTours(res.data)) }>reset tours</button>
  </div>
}


  return (
    <div className='wrapper'>
      <AllCards tours={tours} filterTour={filterTour} />
    
    </div>
  );
}

export default App;
