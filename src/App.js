import './assets/styles/main.css';
import { Component } from 'react';
import SelectBox from './components/select-box.component';
import TempPage from './pages/temp-page';

class App extends Component {

  constructor(props) {

    super(props);

    this.state ={
      
      hasTouchScreen: this._detectTouchDevice(),
      selectBoxObjects : [{}],

    };

    this._detectTouchDevice = this._detectTouchDevice.bind(this);
    this._generateNewSelectBox = this._generateNewSelectBox.bind(this);

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
          console.log('not a touch device\n');
          return false;  
      } 
  }

  _generateNewSelectBox(input){
    // input [{}]

    // {
    //   'title': 'my first select box',
    //   'list-item-call-back': false,
    //   'call-back-buttons': false,
    //   'multiple-value' : false,
    //   'list-call-backs': [],
    //   'list-call-back-buttons': [],
    //   'options-and-values': [['a',1], ['b',2], ['c',3]],

    // }

    this.state.selectBoxObjects.push(input);

  }

  render(){

    return(

      <div>

        <TempPage/>

      </div>

    );

  }

}

export default App;

