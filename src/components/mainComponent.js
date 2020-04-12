import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './homeComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
class Main extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      dishes: DISHES,
      promotions:PROMOTIONS,
      comments:COMMENTS,
      leaders:LEADERS
    };
  }

  render(){
    const HomePage =()=> {
      return(<Home
        dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />);      
    };
    const AboutPage =()=> {
      return(<About
        leaders={this.state.leaders}
        />);      
    };
const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

  return (
    <div>
      <Header/>
      <Switch>        
        <Route exact path='/home' component={HomePage}/>
        <Route exact path='/aboutus' component={AboutPage}/>
        <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes}/>}/>
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={Contact}/>
        <Redirect to='/home' />
      </Switch>
      <Footer/>
    </div>
  );
  }
}

export default Main;
