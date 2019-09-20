import React, { Component } from 'react';
import './App.css';
import Logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar,Nav,Col,Row,Container} from 'react-bootstrap';
import about from './about';
class modules extends Component {
  render() {
  return (
    <Container>
    <Navbar bg="light" expand="lg"  fixed="top">
  <Navbar.Brand href="#home"><img className="logo" src={Logo} alt=" imagem"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      
      
    
    
    <Nav.Link eventKey={2} href="<About/>">Yiap</Nav.Link>
      <Nav.Link href="<modules/>">Módulos</Nav.Link>
<br/><br/><br/>
  <Row>
  <Col>
    <h1>MÓDULOS</h1>
    </Col><Col>
<h2><strong>Byway </strong>é o modulo de prospecção de clientes em rota, com ele vocês localiza clientes novos com as características que você necessita como cliente para sua base. E ainda é possível gerenciar sua carteira de clientes sem necessidade de abrir seu sistema.</h2>
<h2>Monte rotas novas para prospecção ou faça rotas de visitas para ressuprir seus clientes.</h2>
<h2>Ou simplesmente habilite o modulo e ele vai trabalhar com o waze gerando radar de potencias clientes no seu trajeto.</h2>
<br/></Col><Col>
<h2><strong>Pathros </strong>é o modulo de tirar pedidos com ele é possível gerar acompanhar consultar pedidos e estoque dos seus itens. Acompanhe suas vendas metas e carteira de clientes.</h2>

</Col>
</Row>
</Container>
);
}
}