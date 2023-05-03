import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/Home/Main"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Main from "./Components/Home/Main"
import cart from "./Components/Home/cart"
import card from "./Components/Home/card"


import Register from "./Components/login/Register"


function App() {
  return (
    <>
<card/>
<cart/>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/' component={Main} />
         
          
        </Switch>
        <Footer />
      </Router>
      
    </>
  )
}

export default App
