import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  
  state = {
    persons : [
      {id:'12',name : 'lav',age : 24},
      {id:'13',name: 'xyz',age:29},
      {id:'14',name: 'abc',age:29}
    ],
    extra : 'temp'
  }
  




nameChangedHandler = (event,id) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id===id;
  });
  
  const person = { 
    ...this.state.persons[personIndex]
  };

  // const person = Object.assign({},this.state.persons[personIndex]);

  person.name = event.target.value;
  const persons = [... this.state.persons];

  persons[personIndex] = person;

  this.setState({
    persons : persons 
    })
}

deletePersonHandler =(i)=>{
  // const persons = this.state.persons.slice();

  const persons = [...this.state.persons];
  persons.splice(i,1);

  this.setState({persons:persons});
}

togglePersonsHandler = ()=>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons : !doesShow});
}

  render() {

    const style = {
      backgroundColor : 'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor : 'pointer'      
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
              {this.state.persons.map((person,index) => {
                 return <Person
                          name={person.name}
                          age={person.age}
                          click={()=>this.deletePersonHandler(index)}
                          key={person.id}
                          changed={(event)=>this.nameChangedHandler(event,person.id)}
                          />
              })}
              
        </div>
      );
      
      style.backgroundColor = 'red';
      
    }
    
    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
        
      <div className="App">
        <h1> 
          Its tiome to react!.
        </h1> 
        <p className={classes.join(' ')}>Lets work!</p>
        <button 
            style = {style}
            onClick = {this.togglePersonsHandler}> Toggle Person 
            </button>
            {persons}
        
          
      </div>

    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Time to react!!!'));
  }
}

export default App;
 