import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent'
import {DISHES} from '../shared/dishes'
import Header from './headerComponent'
import Footer from './footerComponent'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

    onSelectedDish(dishId) {
      this.setState({
          selectedDish: dishId
      })
  }

  render(){
  return (
    <div>
      <Header/>
      <Menu dishes={this.state.dishes}
        onClick={(dishId)=>this.onSelectedDish(dishId)}/>
      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
      <Footer/>
    </div>
  );
  }
}

export default Main;
