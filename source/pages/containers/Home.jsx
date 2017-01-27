import React, { Component } from 'react';//el component sirve para crear componentes usando clases
import {Link} from 'react-router';

class Home extends Component {
	render(){
    return (

      <section name = "Home">
        <h1> Home </h1>
        <Link to="/about">
          Go to about 
        </Link>
      </section>
    );
	}
}

export default Home;