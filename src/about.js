import React, { Component } from 'react';
import './App.css';
import Logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar,Nav,Col,Row,Container} from 'react-bootstrap';
import modules from './modules';

class about extends React.Component {
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
        
      </Nav>
  </Navbar.Collapse>
</Navbar>
<br/><br/><br/>
  <Row>
  <Col>
    
    <h1>Sobre a YIAP</h1></Col></Row><Row><Col>
    <h2>A yiap é uma startup nasceu de uma necessidade real de um departamento de TI que buscava uma solução de Força de vendas para o departamento comercial da empresa.</h2>
<br/>
<h2>Desenvolvemos o que buscávamos no mercado, visto o que as soluções disponíveis no mercado não era uma solução de força de vendas e sim apenas de tirar pedidos.</h2>
<h2>Entendíamos que força de vendas era um sistema que trouxe-se vendas novas e clientes e ajuda-se a vender mais para a carteira de clientes formada pelo time comercial. </h2>
<br/>
<h2>Em 2017 começamos a desenvolver o que não era possível ainda, mas com dedicação e visualizando novas formas de se fazer os processos comercias, acreditávamos que um sistema de força de vendas deveria ter integrações com o brasil, e que trabalhar com várias ferramentas não se fazia mais sentido. O mundo de dados só gera resultados aplicando diretamente para o usuário que precisa da informação, deixando para os robôs realizarem as análises comerciais.</h2>
<h2>Grandes e pequenos negócios poderão utilizar os módulos do sistema de força de vendas da YIAP. </h2>
<br/>
<h2>Agora vamos começamos a trilhar o caminho de mostrar a incrível ferramenta que desenvolvemos sem igual no mercado </h2>
<br/></Col></Row><Row><Col>
<h1>Missão</h1>
<br/>
<h2>Aumentar a competitividade de nossos clientes por meio de soluções inovadoras para a facilitar e automatizar processos de vendas e suprimentos.</h2>

<br/></Col></Row><Row><Col>
<h1>Visão</h1>
<br/></Col></Row><Row><Col>
<h2>Ser referência nacional em soluções comerciais, suprimentos e analitycs para inteligência em força vendas.</h2>
<br/>
</Col></Row><Row><Col>
<h1>Valores</h1>
<br/>
<h2>Valorizar cada real aplicado pelos nossos clientes, na nossa plataforma, trabalhando dia-a-dia para que nosso cliente nos reconheça como a melhor solução do mercado.</h2>

</Col>
</Row>
</Container>
);
}
}
