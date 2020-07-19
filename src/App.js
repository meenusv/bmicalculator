import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = {  
      weight: 0,
      height: 0,
      bmi: 0,
      message: '',
      optimalweight: ''
    };
     this.submit = this.submit.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.calculateBMI = this.calculateBMI.bind(this); 
  }
  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var heightSquared = (this.state.height/100  * this.state.height/100);
      var bmi = this.state.weight / heightSquared;
      var low = Math.round(18.5 * heightSquared);                                                         
      var high = Math.round(24.99 * heightSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
          message = " in a healthy weight range";
        }
        else if(bmi >= 25 && bmi <= 29.9){
          message = " overweight";
        }
        else if(bmi >= 30){
            message =" obese";
        }
        else if(bmi < 18.5){
          message = " under weight";
        }
        this.setState({message: message});  
        this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
        this.setState({bmi: Math.round(bmi * 100) / 100});   
  
    }
  
    submit(e) {
       e.preventDefault();
       this.calculateBMI();
    }

    render() {
      let msg=" "
      if (this.state.message){
        msg=<p>You are <strong>{this.state.message}</strong></p>
        }
      let bmival=0
      if (this.state.bmi){
        bmival=<p>Your BMI is {this.state.bmi} </p>
      }
      else{
        bmival=""
      }
      return (
        <div className="App">
          <div className="nav">BMI CALCULATOR!!</div>
            <form onSubmit={this.submit}>
              <p>
               Enter your height : 
              </p>
              <input type="text" 
              name="height" 
              value={this.state.height}
               onChange={this.heightchange}  
                /><label> cms</label>
               <p>
               Enter your weight : 
              </p>
              <input type="text" 
              name="weight"
               value={this.state.weight}
                onChange={this.weightchange}  
                  /><label> kgs</label>
                {bmival}
                {msg}
                <p>{this.state.optimalweight}</p>
               
              <input type="submit" value="Submit" className="button"/>
            </form>
        
        </div>
      );
    }
  }
  
  export default App;
  