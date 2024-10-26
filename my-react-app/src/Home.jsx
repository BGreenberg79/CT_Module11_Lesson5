// Task 1.1 Integrating React-Bootstrap and adding buttons
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './home-styles.css';
import Card from 'react-bootstrap/Card';
import CardBody from "react-bootstrap/esm/CardBody";
import CardTitle from "react-bootstrap/esm/CardTitle";
import Image from 'react-bootstrap/Image';
import jordan2 from './assets/jordan2.jpg';
import jordanSneakers from './assets/jordan_sneakers.jpg';

const Home = () =>{
    return (
        <Container fluid>
            <Container fluid className='square border border-warning'>    
                <Row>
                    <Col className="p-2 m-2">
                        <h2 className="text-center">Home</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2">
                        <p>This section is currently being constructed</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="square border border-success">
                <Row>
                    <Col className="text-center">
                        <Button variant="primary" className="shadow-lg m-3 p-3">
                            Shop Now
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="my-4">
                    {/* Task 1.3 Enhancing UI with Borders, Shadows and cards */}
                    <Card>
                        <Card.Img variant="top" src={jordanSneakers} alt="Jordan Sneakers" fluid/>
                        <Card.Body>
                            <Card.Title>Buy New Jordan Sneakers</Card.Title>
                            <Card.Text>
                                The best place on the internet to buy Jordan sneakers with fast delivery and low prices.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row class="my-2">
                    <Image src={jordan2} alt="Air Jordan sneakers" fluid/>
{/* Task 1.4 add a responsive image */}
                </Row>
            </Container>
    </Container>
    );
};

export default Home;