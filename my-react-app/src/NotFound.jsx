import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import sorry from './assets/sorry.jpg'
// Task 2.1 Integrate React-Bootstrap 


function NotFound() {
    return(
        // Task 2.2 Apply a color scheme and Task 2.3 Structure with grid
        <Container className="border border-warning text-white">
            <Row className="my-2">
                <Col>
                    <h2>404- Not Found</h2>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                <p>The page you are seeking does not exist.</p>
                {/* Task 2.5 Enhance navigation with NavLink */}
                <p>Please return to the <Nav.Link as={NavLink} className="text-info" to="/">homepage</Nav.Link></p>
                </Col>
            </Row>
            <Row className="my-2"> 
                {/* Task 2.4 Add an engaging image */}
                <Image src={sorry} alt="Sorry you're lost" fluid/>
            </Row>
            
        </Container>
    )
}
export default NotFound