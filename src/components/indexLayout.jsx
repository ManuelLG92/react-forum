import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
//import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const IndexLayout = () => {
    return (
        <div>
        <Jumbotron>
  <h1>Hello, Welcome to Forodogs!!!</h1>
  <p>
    This is a forum applicacion, their back-end is an API rest written in Golang, 
    and the front end is in react.
  </p>
  <p>
    This is just for fun, I am not good in material desing, I just checking my back-end in working properly
  </p>
  <p>
    <Button variant="primary">Manuel Leon</Button>
  </p>
</Jumbotron>

</div>
    )
}
export default IndexLayout 
