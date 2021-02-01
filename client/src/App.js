import { useState } from 'react';
import './App.css';
import Upload from './components/Upload'

function App() {

  const [loaded,setLoaded] = useState(false)
  const [fileName,setFileName] = useState('')

  const liftStateUp = (data) => {
    setLoaded(data)
  }

  const getFileName = (data) => {
    setFileName(data)
  }

  return (
    <div className="outerDiv">

      {loaded ? <div>
        <img src={fileName}></img>
      </div> : <Upload liftStateUp={liftStateUp} getFileName = {getFileName}/>}
    </div>
  );
}

export default App;
