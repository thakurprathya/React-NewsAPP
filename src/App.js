import React, {useState} from 'react';
import MainComp from './components/maincomponent';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  //importing react router files
import LoadingBar from 'react-top-loading-bar';  //importing top load bar package

const App= ()=>{
    const apiKey = process.env.REACT_APP_APIKEY;
    const apiHost = process.env.REACT_APP_APIHOST;
    const [progress, setProgress] = useState(0); 
      return (
        <div>
            <Router>
                <Navbar/>
                <LoadingBar color='#f11946' progress={progress} height={3}/>  {/*adding top loader*/}
                <Routes>
                    <Route exact path="/" element={<MainComp setProgress={setProgress} apiKey={apiKey} apiHost={apiHost} category=""/>}/>
                    <Route exact path="/world" element={<MainComp setProgress={setProgress} apiKey={apiKey} apiHost={apiHost} category="world"/>}/>
                    <Route exact path="/business" element={<MainComp setProgress={setProgress} apiKey={apiKey} apiHost={apiHost} category="business"/>}/>            
                    <Route exact path="/entertainment" element={<MainComp setProgress={setProgress} apiKey={apiKey} apiHost={apiHost} category="entertainment"/>}/>
                    <Route exact path="/health" element={<MainComp setProgress={setProgress} apiKey={apiKey} apiHost={apiHost} category="health"/>}/>
                    <Route exact path="/science" element={<MainComp setProgress={setProgress} apiKey={apiKey} apiHost={apiHost} category="science"/>}/>
                    <Route exact path="/sports" element={<MainComp setProgress={setProgress} apiKey={apiKey} apiHost={apiHost} category="sports"/>}/>
                </Routes>
            </Router>
        </div>
      )
}

export default App;