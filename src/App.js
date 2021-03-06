import React, { Component } from 'react';
import Cena1 from './img/Cena1.png';
import Cena2 from './img/Cena2.png';
import Cena3 from './img/Cena3.png';
import Cena4 from './img/Cena4.png';
import Logo from './img/logo.png';
import Pontinhos from './img/pontinhos.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar,Nav,Col,Row,Container} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.handleScroll=this.handleScroll.bind(this);
    this.state = { scrolling: false }
  }
 
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}
handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
        this.setState({scrolling: false});
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
        this.setState({scrolling: true});
    }
}

render() {
  let teste = this.state.scrolling?'#d4c050 ':'transparent';
  return (
  
    <Container> 
  <Navbar  expand="lg"  fixed="top" className="font1" style={{background:teste}}>
  <Navbar.Brand href="#home"><img className="logo" src={Logo} alt=" imagem"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Empresa</Nav.Link>
      <Nav.Link href="/">Módulos</Nav.Link>
      <Nav.Link href="/">Blog</Nav.Link>
      <Nav.Link href="/">HelpDesk</Nav.Link>
        
      </Nav>
  </Navbar.Collapse>
</Navbar>

<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Row className="cena1">
  <Col><h2 className="font2">“Primeiro sistema de força de vendas de verdade”
Automatizando processos e monitorando o mercado 24 horas por dia.
</h2></Col><Col>
<img className="cena1" src={Cena1} alt=" imagem"/></Col></Row>
<br/><br/>
 <Row> <Col className="gradiente" expand="lg">
  <br/><br/></Col></Row><br/><br/>
<Row><Col>
<img className="cena1" src={Cena2} alt="imagem"/> </Col><Col>
<h2 className="font2">“Nó criamos robôs para prospectar clientes para vocês enquanto você está no trânsito.”
 Trabalhe em conjunto com outros aplicativos como Waze para melhorar a suas rotas comerciais e vender mais.</h2>
 </Col></Row><Row><Col> <img className="pontinhos" src={Pontinhos} alt="imagem"/></Col></Row><Row><Col>
<h2 className="font2">Prospecção realizada é hora de tirar pedido com o módulo de vendas integrando com o seu sistema.
“Importe seus novos clientes automaticamente” </h2></Col><Col>
<img className="cena1" src={Cena3} alt=" imagem"/></Col></Row><Row><Col>
<img className="pontinhos" src={Pontinhos} alt="imagem"/></Col></Row><Row><Col>
<h2 className = "font2">Prospectou vendeu é hora de fidelizar o cliente, 
vamos juntos antecipar que seus produtos nunca faltem nas lojas do seu cliente o 
sistema monitor a hora de ressuprir.</h2></Col><Col>
<img className="cena2" src={Cena4} alt="imagem"/>  </Col></Row> 

</Container>
      
    
  );
}
}
export default App;
