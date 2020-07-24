

import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';




class BeerList extends Component{

constructor(){
  super()
  this.state={
    beers:[]
  }
}


componentDidMount() {
  console.log('hey');
  axios.get("https://ih-beers-api2.herokuapp.com/beers")
  .then(response => {
    console.log(response);
    this.setState({beers: response.data})
  }).catch(err => console.log(err));
}

render(){
  return (
    <div className='beerList'>
  <Navbar/>
    {this.state.beers.map(beer =>{
      return(
        
        <div className="beerCard">
          <Link to={`beers/${beer._id}`}>
          <img width={100} height={300} src={beer.image_url}/>
          </Link>
          <div>
          <h1>{beer.name}</h1>
          <h2 className="grey">{beer.tagline}</h2>
          <p><strong>Created by:</strong>{beer.name}</p>
          </div>
          <hr/>
          </div>
          
      )
    })}
      </div>

      
)


  }
  
        
}

export default BeerList;