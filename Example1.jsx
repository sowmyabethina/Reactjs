import React from 'react'
class Example1 extends React.Component{
    constructor(){
        super()
        this.name='mahesh'
        this.state={name:"ramesh",age:20}
    }
    
    
    render(){
        return <>
            <h1>name:{this.state.name}</h1>
            <h2>age:{this.state.age}</h2>
            <button onClick={()=>this.setState({age:this.state.age+1})}>Click</button>
        </>
    }
}
export default Example1