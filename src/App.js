import React, {Component} from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home'
import Shoe from './component/shoes'
import Sandal from './component/sandal'
import Slipper from './component/slipper'
import About from './component/About'
import Contact from './component/Contact'
import Product from './component/product'
import Payment from './component/payment'
// import Paystack from './component/paystack'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />  
          <Route exact path='/' component={Home} />
          <Route path='/shoes' component={Shoe} />
          <Route path='/sandal' component={Sandal} />
          <Route path='/slipper' component={Slipper} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/product' component={Product} />
          <Route path='/payment' component={Payment} />
          {/* <Route path='/paystack' component={Paystack} /> */}
        </div>
      </BrowserRouter>
      
    );
  }
}

export default  App;
