import './assets/styles/main.css';
import { Component } from 'react';
import TempPage from './pages/temp-page';

class App extends Component {

  constructor(props) {

    super(props);

    // STATE OBJECT
    this.state ={
      
      hasTouchScreen: this._detectTouchDevice(),
      selectBoxDropdownStates: [],
      selectBoxHoverStates: [],
      
    };

    // BIND METHODS
    this._addComposition = this._addComposition.bind(this);
    this._detectTouchDevice = this._detectTouchDevice.bind(this);
    this._selectBoxDeleteItem = this._selectBoxDeleteItem.bind(this);
    this._selectBoxEditItem = this._selectBoxEditItem.bind(this);
    this._selectBoxHover = this._selectBoxHover.bind(this);
    this._toggleSelectBoxDropdown = this._toggleSelectBoxDropdown.bind(this);
    
  }

  _addComposition(){
    console.log(`addCompositionCalled\n`);
  }

  _detectTouchDevice(){

// You can check if a device HAS MOUSE POINTER using the method:
// const hasCursor = window.matchMedia('(pointer:fine)').matches
// laptops with both a touchscreen and a touchpad will not match this 

      console.log(`\n_detectTouchDevice() executing\n`);

      // const hasCursor = window.matchMedia('(pointer:fine)').matches;
      // console.log(`window.matchMedia('(pointer:fine)').matches => ${hasCursor}`);

      try {  
          document.createEvent("TouchEvent"); 
          console.log('touch device\n');
          return true;  
      } catch (e) {  
          // console.log('not a touch device\n');
          return false;  
      } 
  }

  _selectBoxDeleteItem(input){
    console.log(`selectBoxDeleteItem called. input => ${input}\n`);
  }

  _selectBoxEditItem(input){
    console.log(`selectBoxEditItem called. input => ${input}\n`);
  }

  _selectBoxHover(input){
    console.log(`selectBoxHover exec\n`);
    console.log(`input.type => ${input[0].type}`);
    console.log(`select-box-id => ${input[1]}`);
    console.log(`selectBox id => ${input[0].currentTarget.id}`);
    let targetId = input[0].currentTarget.id;
    if(this.state.hasTouchScreen === false && input[0].type === 'mouseenter'){
      
      
      this.setState(
        (oldState)=>{
          const newSelectBoxHoverStates = [...oldState.selectBoxHoverStates];
          console.log(`${targetId}`);
          newSelectBoxHoverStates.push(`${input[1]}${targetId}`);
          return {selectBoxHoverStates: newSelectBoxHoverStates};
        }, ()=>{console.log(`this.state.selectBoxHoverStates => ${this.state.selectBoxHoverStates}`)}
      );  

    } else if(this.state.hasTouchScreen === false && input[0].type === 'mouseleave'){
      console.log(`else if called\n`);
      if( this.state.selectBoxHoverStates.includes(`${input[1]}${targetId}`) ){

        let indexOfInput = this.state.selectBoxHoverStates.indexOf(`${input[1]}${input[0].currentTarget.id}`);
  
        this.setState(
          (oldState)=>{
            const newSelectBoxHoverStates = [...oldState.selectBoxHoverStates];
            newSelectBoxHoverStates.splice(indexOfInput, 1);
            return {selectBoxHoverStates: newSelectBoxHoverStates};
          }, ()=>{console.log(`this.state.selectBoxHoverStates => ${this.state.selectBoxHoverStates}`)}
        );
  
      }

    }
    
  }

  _toggleSelectBoxDropdown(input){
    if( this.state.selectBoxDropdownStates.includes(input) ){

      let indexOfInput = this.state.selectBoxDropdownStates.indexOf(input);

      this.setState(
        (oldState)=>{
          const newSelectBoxDropdownStates = [...oldState.selectBoxDropdownStates];
          newSelectBoxDropdownStates.splice(indexOfInput, 1);
          return {selectBoxDropdownStates: newSelectBoxDropdownStates};
        }
      );

    } else {

      this.setState(
        (oldState)=>{
          const newSelectBoxDropdownStates = [...oldState.selectBoxDropdownStates];
          newSelectBoxDropdownStates.push(input);
          return {selectBoxDropdownStates: newSelectBoxDropdownStates};
        }
      );

    }
    
  }
  
  render(){

    return(

      <div>

        <TempPage 
          toggleSelectBoxDropdown = {this._toggleSelectBoxDropdown}
          applicationState = {this.state}
          addComposition = {this._addComposition}
          selectBoxDeleteItem = {this._selectBoxDeleteItem}
          selectBoxEditItem = {this._selectBoxEditItem}
          selectBoxHover = {this._selectBoxHover}
          selectBoxHoverStates = {this.state.selectBoxHoverStates}
        />

      </div>

    );

  }

}

export default App;

