import React,{Component} from 'react';
import Navbar from './Navbar';
import axios from 'axios';


class SingleBeer extends Component{

    constructor(props){
        super(props);
        this.state ={
            image:'',
            name:'',
            tagline:'',
            first_brewed:'',
            attenuation_level:'',
            description:'',
            contributed_by:''
        }
    }



    

      componentDidMount() {
        console.log('hey');
        let beerId=this.props.match.params.beerId;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    .then(response => {
        console.log(response);
        let response2=response.data;
         
        this.setState({image:response2.image_url,name:response2.name,tagline:response2.tagline
        ,first_brewed:response2.first_brewed,attenuation_level:response2.attenuation_level,
    description:response2.description,constributed_by:response2.contributed_by})
        
        
      }).catch(err =>{console.log(err)})
      }

      render(){
                
    return (
        <div>
            <Navbar />
        <div className="">
            
        <img width={100} height={300} src={this.state.image}/>
        <div>
        <h1>{this.state.name}</h1>
        <h2 className="grey">{this.state.tagline}</h2>
        <p>{this.state.description}</p>
    <p><span>{this.state.contributed_by}</span></p>
       
        </div>
        </div>
        </div>
    )
      }
}


export default SingleBeer;