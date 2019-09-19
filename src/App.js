import React from 'react';
import Cena1 from './img/Cena1.png';
import Cena2 from './img/Cena2.png';
import Cena3 from './img/Cena3.png';
import Cena4 from './img/Cena4.png';
import Pontinhos from './img/pontinhos.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="cenadiv"><div className="texto1"><h2 className="texto1">“Primeiro sistema de força de vendas de verdade”<br/>
Automatizando processos e monitorando o mercado 24 horas por dia.
</h2></div><div><img className="cena1" src={Cena1} alt=" imagem"/></div></div><br/><img className="pontinhos" src={Pontinhos} alt="imagem"/><br/><br/>
<img className="cena1" src={Cena2} alt="imagem"/><div className="texto1">“Nó criamos robôs para prospectar clientes para vocês enquanto você está no trânsito.”
 Trabalhe em conjunto com outros aplicativos como Waze para melhorar a suas rotas comerciais e vender mais.
</div> <br/><img className="pontinhos" src={Pontinhos} alt="imagem"/><br/><br/>
<div className="texto">Prospecção realizada é hora de tirar pedido com o módulo de vendas integrando com o seu sistema.
“Importe seus novos clientes automaticamente” 
</div><img className="cena1" src={Cena3} alt=" imagem"/> <br/><img className="pontinhos" src={Pontinhos} alt="imagem"/><br/><br/>
<div className="texto1">Prospectou vendeu é hora de fidelizar o cliente, 
vamos juntos antecipar que seus produtos nunca faltem nas lojas do seu cliente o 
sistema monitor a hora de ressuprir.</div><img className="cena2" src={Cena4} alt="imagem"/>  <center/> <br/>    

      </header>
    </div>
  );
}

export default App;
