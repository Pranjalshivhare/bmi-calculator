import React,{useState} from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import Button from './Components/Button';

const App = () => {
  const [weight,setWeight] = useState();
  const [height,setHeight] = useState();
  const [bmi,setBmi] = useState();
  const [bmiClass,setBmiClass] = useState();

  const handleHeightChange = (event) =>setHeight(event.target.value);
  const handleWeightChange = (event) =>setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight/(height/100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight('')
    setWeight('')
  };

  const getBmi  = (bmi) => {
    if(bmi<18.5){
      return 'Underweight';
    }
    if(bmi>=18.5 && bmi<24.9)
    {
      return "normal";
    }
    if(bmi>=25 && bmi<29.9)
    {
      return "overweight";
    }
    if(bmi>=30)
    {
      return "obesity";
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <div 
        style = {{
          display:'block',
          width:'50%',
          margin:'0 auto',
          padding:'20px',
          boxSizing:'border-box',
        }}
        >
          <h2>welcome to our BMI calculator</h2>
         </div>
         <div className='row'>
           <TextInput 
            label='height'
            placeholder='enter height in cm'
            handleChange={handleHeightChange}
            value={height}
            />
         </div>
         <div className='row'>
           <TextInput 
           label='weight'
           placeholder='enter weight in kg'
           handleChange={handleWeightChange}
           value={weight}
           />
         </div>
         <div className='row'>
           <Button label='calculate' onClick={computeBmi} />
         </div>
         <div className='row'>
           {
             isNaN(bmi) ? null:<h3>your bmi = {bmi}</h3>
           }
         </div>
         <div className='row'>
           <h3>{bmiClass}</h3>
         </div>
      </div>
    </div>
  );
};

export default App;
