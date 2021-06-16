import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  

} from "react-router-dom";
import { UserProvider } from './contexts/userContext';
import Header from './views/Header';
import Login from './views/Login';
import Register from './views/Register';
import Addstudent from './views/Addstudent';
import Student from './views/Student';
import Students from './views/Students';
import Update from './views/Update';



function App() {
  return (
  
    <div className="App">
      <>
      <UserProvider>
        
        <Router>
        <Switch>
          <Route path="/student/:id/update">
            <Update/>
          </Route>
          <Route path="/student/:id" >
            <Student />
          </Route>
          <Route path="/add" >
            <Addstudent />
          </Route>
          <Route path="/students"> 
            <Students/>
          </Route>
          <Route path="/Home">
            <Header/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
          
        </Switch>
      </Router>
      </UserProvider>
      
      </>
      
    </div>
    
  );
}

export default App;
