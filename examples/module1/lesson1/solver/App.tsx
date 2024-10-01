import { useState } from 'react';
import { functionMap, FunctionT } from './calculator/functions';
import { Button } from './calculator/Button';

const App = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const handleCalculate = (func: FunctionT) => () => setResult(func(firstInput, secondInput));

  const handleSetNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch(e.target.id) {
      case 'first':
        return setFirstInput(parseFloat(e.target.value));
      case 'second':
        return setSecondInput(parseFloat(e.target.value));
      default:
        return;
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          id="first"
          className="rounded-md shadow-md p-4"
          value={firstInput}
          onChange={handleSetNumber}
        />
        <input
          type="number"
          id="second"
          className="rounded-md shadow-md p-4"
          value={secondInput}
          onChange={handleSetNumber}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
       {Object.keys(functionMap).map(key => {
        return (<Button onClick={handleCalculate(functionMap[key])} text={key} />)
       })}

      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
