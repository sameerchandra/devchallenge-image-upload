import { useState } from 'react';
import './App.css';
import Upload from './components/Upload'

function App() {

  const [loaded,setLoaded] = useState(false)

  const liftStateUp = (data) => {
    setLoaded(data)
  }

  return (
    <div className="outerDiv">

      {loaded ? <div></div> : <Upload liftStateUp={liftStateUp}/>}
    </div>
  );
}

export default App;
