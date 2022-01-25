import React from 'react';
import {useState} from 'react';


function ButtonConfig(props){

  const[calc,setCalc]=useState("")
  const [result,setResult]=useState("")
  
  const ops=['/' ,'*','+','-','.'];
  const text=() => {
    const digits=[1,2,3,4,5,6,7,8,9]
    const digit = digits.map(value => {
      return <button onClick={() => updateCalc(value.toString())} 
      key={value}>
      {value}
      </button>
  })
  return digit;
  }
  
  
  const updateCalc = value =>{
  
    if(ops.includes(value)&& calc ===''||ops.includes(value)&&ops.includes(calc.slice(-1)))
    {
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }
  
  
  
  const calculate= () => {
  setCalc(eval(calc).toString())
  }
  const deleteLast =() => {
  if(calc=='')
  return
  const value=calc.slice(0,-1)
  setCalc(value)
  }
    return(
        <>
        <div className="display">
          
          {result ? <span>({result})</span>: ''}
          
          {calc  || '0'}
          </div>
        <div className="operators">
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {text()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div></>
    );
}

export default ButtonConfig;