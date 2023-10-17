import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Button from 'react-bootstrap/Button';
import {Card, Container} from 'react-bootstrap';

function App() {
   let MyName = 'Idrissa Boly';
  return (
    <>
    <Container>
<Card style={{ width: '18rem' }}>
<Image variant={'top'}/>
      <Card.Body>
        <Card.Title> <Name /> </Card.Title>
        <Card.Text>
         
      <Description />    
        </Card.Text>
        <Button variant="primary"> <Price /> </Button>
      </Card.Body>
    </Card>

    </Container>

     <hr />
      <h2>Hello , {MyName} </h2>
      { MyName ? <img src={logo} alt="MyImage" className="img-fluid col-2" /> : "No Name"}
    </>
  );
}

export default App;
