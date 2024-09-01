//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GenericCenterView(props) {
    return (
        <Container className='main d-flex flex-grow-1 flex-column align-items-center justify-content-center'>
            <Row className='align-self-center'>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}
    
export default GenericCenterView;

