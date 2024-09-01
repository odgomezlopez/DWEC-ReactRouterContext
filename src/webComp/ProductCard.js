import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
  return (
    <Card style={{ width: 'auto' }}>
      <Card.Img className="cropped" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className='text-center'>{props.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button className="w-100" variant="primary">{props.action}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;