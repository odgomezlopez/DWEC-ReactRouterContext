//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

function NoFound(props) {
    return (
        <>
            <i className="bi bi-file-earmark-excel-fill" style={{ fontSize: '250px' }}></i>
            <h1>Error 404: Page Not Found.</h1> 
        </>
    );
}
    
export default NoFound;

