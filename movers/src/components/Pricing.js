import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Pricing() {
  return (
    <>
    
    {/*<Card.Title>WORLD WIDE MOVERS PRICES</Card.Title>*/}
    <Card  style={{ }}>
    
      <Card.Body style={{justifyContent: 'center',}}>
      <Card.Title className="text-center" >WORLD WIDE MOVERS PRICES</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </>
   
  );
}

export default Pricing;