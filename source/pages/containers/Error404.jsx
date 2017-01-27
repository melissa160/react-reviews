import React, { Component } from 'react';//el component sirve para crear componentes usando clases
import {Link} from 'react-router';

class Error404 extends Component {
	render(){
    return (

      <section name = "error404">
        <h1> Error404 </h1>
        <Link to="/">
          Go back to home  
        </Link>
      </section>
    );
	}
}

export default Error404;