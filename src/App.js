import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Header from './components/Header';
import Users from './components/Users';
import { Orders } from './components/Users';
import {Profile} from './components/Users'
// import Account from './components/Account';
// import Form from './components/Form';
// import "./components/store"

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users/:id/:name" element={<Users/>}>
              <Route path="orders" element={<Orders />} />
              <Route path="profile" element={<Profile />} />
          </Route>
      </Routes>
    </BrowserRouter>
    // <>
    // <Form/>
    //  <Account/>
    // </>
   
  );
}

export default App;
