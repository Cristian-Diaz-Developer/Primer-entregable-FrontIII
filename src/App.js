import { useState } from 'react';
import Listado  from './componentes/Listado';
import Cabecera  from './componentes/Cabecera';


function App() {
  const [itemsCompra, setItemsCompra] = useState(0);

  const agregarItem = () => {
    setItemsCompra(itemsCompra + 1)
  }
  return (
    <div className="App">
      <Cabecera itemsCompra={itemsCompra} />
      <Listado agregarItem={agregarItem} />
    </div>
  );
}

export default App;