import './App.css';
import Example from './sample/Example';
import Example2 from './sample/Example2';
import Example1 from './sample/Example1';
import Example3 from './sample/Example3';

function App() {
  const x=20
  const a=[10,20,'abc']
  const y={
    name:"mahesh",
    age:30
  }
  //arrow function
    const arrow=()=>{
      return <>
        <h1>name:{y.name}</h1>
        <h2>age:{y.age}</h2>
      </>
    }
  
  return (
    <div>
      <h1>Hello World</h1>
      <p>I am from sasi</p>
      <Example/>
      <Example2/>
      
      
      {x}<br/>
      {a.map((ele)=>ele +" ")}<br/>
      {y.name} {y.age}<br/>
      {arrow()}

      <Example1/>
      <Example3/>
    </div>
  );
}

export default App;
