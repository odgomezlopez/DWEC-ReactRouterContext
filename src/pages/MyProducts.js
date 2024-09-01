import * as React from "react";
import { useState, useEffect } from 'react';
import {
  useParams,
} from "react-router-dom";


//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Comunicación con la API
//import getProducts from '../Network/VegetableAPI';
import getProducts from '../Network/ShibeAPI';


import ProductCard from '../webComp/ProductCard';


//https://fruityvice.com/#2
function MyProducts(props) {
    const [init, setInit] = useState(false);
    const [products, setProducts] = useState([]);


    useEffect(() => {    
      //https://devtrium.com/posts/async-functions-useeffect
      const fetchData = async () => {
        const data = await getProducts(10);
        setProducts(data);
      }
      
      if(!init)fetchData().catch(console.error);
      setInit(true)
    });

    return (
        <>
                    {/*<i className="bi bi-circle-fill" style={{ fontSize: '250px' }}></i>
                    <h1>{productType.toUpperCase()}</h1>*/}
                    {products.map((item,i) => (
                        <ProductCard key={i} img={item.image} title={item.title} action={props.action} /> 
                      ))
                    }

        </>
    );
}
export default MyProducts;

