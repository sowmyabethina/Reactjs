import React, { createContext, useContext } from 'react';

// Create Context
const MyContext = createContext();

function Usecontext() {
  // The value you want to provide through context
  const name = "arjun";
  
  return (
    <MyContext.Provider value={name}>
      <h1>This is Usecontext</h1>
      <Usecontext1 />
    </MyContext.Provider>
  );
}

function Usecontext1() {
  return (
    <>
      <h1>This is Usecontext1</h1>
      <Usecontext2 />
    </>
  );
}

function Usecontext2() {
  return (
    <>
      <h1>This is Usecontext2</h1>
      <Usecontext3 />
    </>
  );
}

function Usecontext3() {
  // Use the useContext hook to access the context value
  const name = useContext(MyContext);
  
  return (
    <>
      <h1>This is Usecontext3</h1>
      <h3>{name}</h3> {/* Display the value from context */}
    </>
  );
}

export default Usecontext;
