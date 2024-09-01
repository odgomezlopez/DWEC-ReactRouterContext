//Importo  estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

//Importo mis componentes
import MyNavBar from './webComp/MyNavBar';
import GenericCenterView from './webComp/GenericCenterView';
import ProductView from './webComp/ProductView';
import MyFooter from './webComp/MyFooter';

//Importo las paginas
import MyHome from './pages/MyHome';
import MyProducts from "./pages/MyProducts";

import NoFound from './pages/NoFound';
import MyInWork from './pages/MyInWork';
import MyUserName from "./pages/MyUserName";

//Importo mis recursos
import Logo from './imgs/logo.svg'

//Importamos las rutas
import {
  Route,
  Routes
} from "react-router-dom";



//Estructura de la Web App
function App() {
  return (
        <div className='d-flex flex-column bg-light min-vh-100'>
            <MyNavBar title="Green Basket" logo={Logo}/>
            
            <Routes>
              <Route path="/" element={<GenericCenterView><MyHome logo={Logo} /> </GenericCenterView>} />
              <Route path="/frutas" element={<GenericCenterView><MyInWork text="Frutas"/></GenericCenterView>} />
              <Route path="/verdura/:title" element={
                <ProductView>
                  <MyProducts action="Adoptar" />
                </ProductView>
              } />
              <Route path="/username" element={<GenericCenterView><MyUserName /> </GenericCenterView>} />


              <Route path="/carrito" element={
              <GenericCenterView><MyInWork text="Carrito"/></GenericCenterView>} />
              <Route path='*' exact={true} element={<GenericCenterView><NoFound/></GenericCenterView>} />
            </Routes>
            
            <MyFooter className="footer"/>
        </div>
  )
}

export default App;