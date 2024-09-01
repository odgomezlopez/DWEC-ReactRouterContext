//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    useParams,
  } from "react-router-dom";

function ProductView(props) {
    const { title } = useParams();

    return (
        <Container className='main d-flex flex-grow-1 flex-column align-items-center justify-content-center'>
            <Row className='align-self-center'>
                <Col className="d-flex flex-wrap justify-content-between">
                    <h1>{title.toUpperCase()}</h1>
                </Col>
            </Row>
            <Row className='align-self-center'>
                <Col className="d-flex flex-wrap justify-content-between">
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}
    
export default ProductView;

