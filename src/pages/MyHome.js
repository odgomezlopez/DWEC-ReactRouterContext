//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

function MyHome(props) {
    return (
        <>
            <Image style={{width: '300px'}} src={props.logo} rounded  />
            <h1>Web en Construcción</h1> 
            <Button className="bounce-top" variant="success">Hacer pedido por Telegram</Button>
            <i>Gastos de envío: 2,99€</i>
        </>
    );
}
    
export default MyHome;

