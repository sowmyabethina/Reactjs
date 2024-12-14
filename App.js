import './App.css';
import Example from './sample/Example';
import Example2 from './sample/Example2';
import Example1 from './sample/Example1';
import Example3 from './sample/Example3';
import Hooksdem from './sample/Hooksdem';
import Useref from './sample/Useref';
import Usecontext from './sample/Usecontext';

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
      <h2>Example<Example/></h2>
      <h2>Example2<Example2/></h2>
      
      {x}<br/>
      {a.map((ele)=>ele +" ")}<br/>
      {y.name} {y.age}<br/>
      {arrow()}

      <h2>Example1<Example1/></h2><br/>
      <h2>Example3<Example3/></h2><br/>
      <h2>Hooksdem<Hooksdem/></h2><br/>
      <h2>useref<Useref/></h2>
      <h2>useref<Usecontext/></h2>
    </div>
  );
}

export default App;
