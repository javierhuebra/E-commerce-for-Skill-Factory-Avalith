import './App.css';

/* IMPORTO DEPENDENCIAS DE BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


function App() {
  /* const c = console.log.bind(document);
  c("que onda esta"); */
  
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
