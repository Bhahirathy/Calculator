import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/result';
import KeyPadComponent from "./components/calci";

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      
      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };


  calculate = () => {
      var checkResult = ''
      if(this.state.result.includes('--')){
          checkResult = this.state.result.replace('--','+')
      }

      else {
          checkResult = this.state.result
      }
      try {
        this.setState({
        
            result: (eval(checkResult) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }

  };

  reset = () => {
      this.setState({
          result: ""
      })
  };


  render() {
      return (
          <div>
              <div className="calculator-body">
                
                  
                  <ResultComponent result={this.state.result}/>
                  <KeyPadComponent onClick={this.onClick}/>
                
              </div>
          </div>
      );
  }
}

export default App;