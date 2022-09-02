// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import React, { useState } from 'react';
import Cabecera from './componentes/Cabecera';
import Listado from './componentes/Listado';

function App() {

  const [counterProduct, setCounter] = useState(0);

  const increaseAmount = () => {
    setCounter(counterProduct + 1);
  }

  return (
    <div className="App">
      <Cabecera counter={counterProduct} />
      <Listado increaseAmount={increaseAmount} />
    </div>
  );
}

export default App;
