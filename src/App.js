import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';
import React, { Component } from 'react';

const router = createBrowserRouter([
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/about",
    element: Aboutme,
  },
  {
    path: "/contact",
    element: Contact,
  },
]);

class App extends Component {
  render() {
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home',
         command:() => this.props.history.push('/Home')
      },
      {
         label:'Sobre',
         icon:'pi pi-fw pi-user',
         command:() => this.props.history.push('/AboutMe')
      },
      {
         label:'Contato',
         icon:'pi pi-fw pi-comment',
         command:() => this.props.history.push('/Contact')
      }
   ];
    return (
      <div className="App">
        <Menubar model={menuitems}/>
        <Header/>
        <Footer/>
        <div id="main">
            <main>
                <div className="content" id="content">
                    
                <React.StrictMode>
                    <RouterProvider router={router} />
                  </React.StrictMode>


                </div>
            </main>
        </div>
      </div>
    );
  }
}
  

export default App;

/*function BTPedido() {
  return (
    <center><button>Realizar Pedido </button></center>
  );
}

/* Dando a função ao botão pedido com function, return para dar um retorno para a função (Ou seja um feedback)
button dando a característica "Botão" para o BTPedido, style "personalizada" para centralizar o botão.
*/

/*function TeladePedido() {
  return (
    <div>
      <center><h1>Tela de Pedido</h1></center>
      <BTPedido/>
    </div>
  );
}
/* Dando a função ao título vulgo Tela de pedido, div para separar e colocar o botão de pedido a baixo e h1 para formatar ela em título
assim fechando ambos.

<html> 

<body>

<style> 
    body 
        background: rgb(255, 255, 1);
    
  </style>
  </body>

  </html> */