import './App.css';
import News from './components/News';
import React, { useState } from 'react'
import NavBar from './components/NavBar';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import LoadingBar from 'react-top-loading-bar'

const App = () =>  {



const pageSize = 6;




const [progress, setProgress] = useState(0);


    return (
      <div>
          <Router>
     <NavBar/>
     <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
  
   <Switch>
          <Route excat path="/general"><News  setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/> </Route>
          <Route excat path="/NewsGate"> <News setProgress={setProgress} key="general" pageSize={pageSize } country="in" category="general"/> </Route>
          <Route excat path="/home"> <News setProgress={setProgress} key="general" pageSize={pageSize } country="in" category="general"/> </Route>
          <Route excat path="/business"> <News setProgress={setProgress} key="business" pageSize={pageSize } country="in" category="business"/> </Route>
          <Route excat path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize } country="in" category="entertainment"/> </Route>
          <Route excat path="/health"> <News setProgress={setProgress} key="health" pageSize={pageSize } country="in" category="health"/> </Route>
          <Route excat path="/science"> <News setProgress={setProgress} key="science" pageSize={pageSize } country="in" category="science"/> </Route>
          <Route excat path="/sports"> <News setProgress={setProgress} key="sports" pageSize={pageSize } country="in" category="sports"/> </Route>
          <Route excat path="/technology"> <News setProgress={setProgress} key="technology" pageSize={pageSize } country="in" category="technology"/> </Route>
  </Switch>
     </Router>
      </div>
    )
  
}
export default App
