
import './App.css';
/* IMPORTO DEPENDENCIAS DE BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';

import { MenuProvider } from './Components/context/MenuProvider';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';




function App() {

  return (
    
      <div className="App">
        <MenuProvider>
          <Header />
        </MenuProvider>
        
        <Main />
      </div>
    
  );
}

export default App;
