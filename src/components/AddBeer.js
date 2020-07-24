import React,{Component} from 'react';
import Navbar from './Navbar';
import axios from 'axios';


class AddBeer extends Component{

    constructor(props){
        super(props);
        this.state ={
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            attenuation_level:0,
            brewers_tips:'',
            contributed_by:''
        }
    }
    handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
      }

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new",this.state)
        .then(response =>{console.log("response is:",response)})
        .catch(error =>{console.log("error is",error)})
        this.setState ({
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            attenuation_level:0,
            brewers_tips:'',
            contributed_by:''
        })
           
      }


    

      

      render(){
                
    return (
        <div>
            <Navbar />
            <div >
        <form className="formy" onSubmit={this.handleFormSubmit} >

            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            <label>Tagline</label>
            <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />
            <label>Description</label>
            <textarea name="description" value={this.state.description}></textarea>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />
            <label>Brewers Tips</label>
            <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />
            <label>Contributed By</label>
            <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />

            <input type="submit" value="ADD NEW" />
        </form>
      </div>
        </div>
    )
      }
}


export default AddBeer;