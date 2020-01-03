import React from 'react';

// Components
import HeaderDp from './components/Header/HeaderDp.js';
import HeaderButton from './components/Header/HeaderButton.js';
import HeaderSerchBar from './components/Header/HeaderSerchBar.js';
import Product from './components/Product/RecomendedProduct.js';
import BigProduct from './components/Product/BigProduct.js';
import BottomMenu from './components/Menu/BottomMenu.js';
import Footer from './components/Footer.js';
import HeaderComponent from './components/Header/HeaderComponent';
import FeaturedProductComponent from './components/Product/FeaturedProductComponent'

import BottomMenuComponent from './BottomMenuComponent.js';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductPage() {

  return (
    <Container>

      <Row>
        <FeaturedProductComponent/>
      </Row>
      <br />
      <Row>
      <Col>
      <h2 style={{display: 'flex',  justifyContent:'center'}}>
      Recomended Produtcs
      </h2>
      </Col >
      </Row>
      
      <br />
      <Row>
        <Col sm-1 col-xs-4 col-md-3>
          <Product Name="Product 1" Price="500" Img ="https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068" />
        </Col>

        <Col sm-1 col-xs-4 col-md-3>
           <Product Name="Product 2" Price="400" Img ="https://img.scryfall.com/cards/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1562933099" />
       
        </Col>

        <Col sm-1 col-xs-4 col-md-3>
           <Product Name="Product 3" Price="600" Img ="https://img.scryfall.com/cards/large/front/5/d/5d10b752-d9cb-419d-a5c4-d4ee1acb655e.jpg?1562736365" />
       
        </Col>
<Col sm-1 col-xs-4 col-md-3>
          <Product Name="Garruk" Price="666" Img ="https://img.scryfall.com/cards/large/front/e/a/ea9f8dd7-b774-40c5-9e67-3eb87bb72541.jpg?1571311203" />
        </Col>

        <Col csm-1 col-xs-4 col-md-3>
           <Product Name="RagingGoblin" Price="1" Img ="https://img.scryfall.com/cards/large/front/e/6/e6df5a36-7bd4-4456-a462-54f65089826c.jpg?1562949990" />
       
        </Col>
      </Row>
      <BottomMenuComponent />
        <Footer />
    </Container>
  );
}

export default ProductPage;
