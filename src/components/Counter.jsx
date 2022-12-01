import { useState } from 'react'; //hook de estado

function Counter() {
  let [
    count, // estado reativo
    setCount, //altera o estado
  ] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Contador: {count} </button>
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}

export default Counter