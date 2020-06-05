import React from 'react';
import {robots} from './robots';
import Cardlist from './Cardlist';
import SearchBox from './Searchbox';
import Scroll from './Scroll';
import './App.css';


class App extends React.Component{
	
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then( users =>{this.setState({robots: users})} )
	}
	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value});
		
	}
	render(){
	const searchRobo = this.state.robots.filter(robots=> {
			return ( 
				robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
				// robots.email.toLowerCase().includes(this.state.searchfield.toLowerCase())
				);
	})	
	if(this.state.robots.length === 0){
		console.log(this.state.robots.length);
		return (
			<div className='tc'>
			  	<h1 id='head' className='f2'>RoboFriends</h1>
			  	<SearchBox searchChange={this.onSearchChange} />
			    <p id='head' className='f2'> Loading... </p>
			 </div>
			 );
	} else {
		console.log('hi1');
	return(

  	<div className='tc'>
  	<h1 id='head' className='f2'>RoboFriends</h1>
  	<SearchBox searchChange={this.onSearchChange} />
  	<Scroll>
    <Cardlist robots={searchRobo}/>
    </Scroll>
    </div>
    ); 
	}
  }
}
export default App;