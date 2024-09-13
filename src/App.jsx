
import './App.css';


import FirstComponent from './components/firstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';
import diarioA from './assets/arthur-diario2.jpg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';


function App() {
  <link rel="stylesheet" href="App.css" />

  const n = 1
  const classDiferente = false

  return (
    <div className="App">
      {/* <FirstComponent />
      <br />
      <br />
      <br />
      <TemplateExpressions />
      <br />
      <br />
      <br />
      <MyComponent /> */}


      <ComponentORemake></ComponentORemake>

      <h1>Olha só um texto</h1>

      {/*CSS no próprio módulo  */}
      <OutroComponent></OutroComponent>
      <img src="./lulaRebaixado.jpg" alt="darth vader" width={900} />
      <h1>LULA PARA DE ME TAXAR DIABO</h1>

      {/* CSS inline */}
      <p style={{color:'aliceblue' , padding: '25px' , backgroundColor:'red', fontSize: '40px'}}> Este paragrafo é do App.jsx</p>

      <h3 style={n > 10 ? ({color: 'black', backgroundColor: 'yellow'}) : ({color: 'red' , backgroundColor: 'black'})}>Aqui tem um texto de h3</h3>

      <h2 className={classDiferente ? "red-title" : "normal-title"}>Texto com classe diferente 1 </h2>


      {/* Importação da pasta public */}
      

        {/* armazenando uma img em uma variavel */}
      <img src={diarioA} alt="Arthur lendo o diario e percebendo todos os seus erros." width={900}/>
    </div>
    
  );
}

export default App;
