import logo from './logo.svg';
import './App.css';

import Login from './ULogin/Login';

import Reg from './USignup/Reg';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Sdtdashboard from './Student/Sdtdashboard';
import Tchrdashboard from './Teacher/Tchrdashboard';





function App() {
  
  return (
   <div className="App">
     <BrowserRouter>
     <Switch>
         <Route exact path="/" component={()=><Redirect to="/login"/>}/>
         
         <Route exact path="/login" component={()=><Login/>}/>
         
         <Route exact path="/reg" component={()=><Reg/>}/>

         <Route exact path="/Student/:name" component={(props)=><Sdtdashboard studname={props.match.params.name}/>}/>

         <Route exact path="/Teacher/:name" component={(props)=><Tchrdashboard teachname={props.match.params.name}/>}/>

         
       
       </Switch>
    
     </BrowserRouter>
       
     
   </div>
   
  );
}

export default App;
