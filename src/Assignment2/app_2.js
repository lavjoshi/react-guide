import React, { Component } from 'react';
import './App.css';
import Validate from './Assignment2/ValdiadtionComponent'
import CharComponent from './Assignment2/CharComponent'

class App extends Component {
  
  state = {
    enteredText : ""
  }


  onChangeHandler = (event)=>{
      let text  = {...this.state.enteredText};
      text = event.target.value;
      this.setState({enteredText:text});

  }

  onClickHandler = (event,char)=>{
    const chars = this.state.enteredText.split('');
    const index = chars.findIndex(c=>{
      return c===char;
    })

    chars.splice(index,1);
    console.log(chars);
    this.setState({
      enteredText : chars.join('')
    })

  }


  render() {

    let charsToRender = null;
    const charArr = this.state.enteredText.split('');
    if(charArr.length>0){
      charsToRender = (
        
        charArr.map(c=>{
          return <CharComponent char={c} click={(event)=>this.onClickHandler(event,c)} key={c}/>
        })
      );
      
    }

    return (
      <div className="App">
        <h1> 
          Its tiome to react!.
        </h1> 

        <input type="text" onChange={(event)=>this.onChangeHandler(event)} value={this.state.enteredText}>
        </input>
        <p>
          Length is: {this.state.enteredText.length}
        </p>
        <Validate len={this.state.enteredText.length}/>
          {charsToRender}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Time to react!!!'));
  }
}

export default App;
 