import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Home extends Component {
  render() {
 
    return (
      
        
          <Card className="text-center" style={{  background: 'transparent' }} >
        <Card.Img variant='top' src="/movers.jpg " alt = "movers" style={{width:'200px', height:'150px', alignItem: 'center', alignSelf: 'center'}}  />

        <Card.Body style={{height:'100%'}} >
          <Card.Title > World wide movers </Card.Title>

          <Card.Text>
            We are the best movers available at and for your service. 
          </Card.Text>

         

        </Card.Body>


          </Card>

    
        
      
    )
  }
}
