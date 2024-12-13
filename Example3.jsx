import React,{Component} from 'react'
export class Example3 extends Component{
    constructor(){
        super()
        this.state={name:" ",age:0}
    }
    changeName=(e)=>{
        this.setState({name:e.target.value})
    }
    changeAge=(e)=>{
        this.setState({age:e.target.value})
    }
    render(){
        return(
            <div>
                <div>Name:<input type='text'onChange={this.changeName}></input></div>
                <div>Age:<input type='number'onChange={this.changeAge}></input></div>
                <button onClick={ChangeState}>click</button>
                name:{this.state.name}<br/>
                agee:{this.state.age}<br/>
                
            </div>
        )
        
    }
}