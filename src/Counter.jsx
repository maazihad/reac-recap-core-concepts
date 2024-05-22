import { useState } from "react";


const Counter = () => {

   const [count, setCount] = useState(0);

   const handleClick = () => {
      const newCount = count + 1;
      setCount(newCount);
   };

   return (
      <div>
         <h2>Counting : {count}</h2>
         <button onClick={handleClick}>Add Count</button>
      </div>
   );
};

export default Counter;