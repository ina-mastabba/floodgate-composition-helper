import { Component } from 'react';
import SelectBox from '../components/select-box.component';

class TempPage extends Component {


    //   'title': 'my first select box',
    //   'has-dropdown' : false
    //   'drop-down-icon': caret
    //   'has-crud-text-and-crud-button-with-same-event-handler-row': false,                   add new composition   +
    //   'crud-text-and-button': ['abc..', '../assets/images/some-image.webP', handler],
    //   'option-text-with-event-handler-and-crud-button-with-event-handler': false, e.g.     my comp three         -
    //   'option-text-with-event-handler,                                                     some option
    //   'list-call-backs': [],
    //   'list-call-back-buttons': [],
    //   'options-and-values': [['a',1], ['b',2], ['c',3]],


	render(){

		return(

			<div>
                
                <SelectBox 

                    selectBoxObject = { 

                        {
                            'title': 'my first select box',
                            'has-dropdown' : true,
                            'has-add-item-row': false,                        // add new composition   +
                            'options-rows-have-delete-item-button': false,    //   e.g. my comp three    - || some option
                            'multiple-values-acceptable' : false                
                        } 

                    }
                />
                <SelectBox 
                    
                    selectBoxObject = { 

                        {
                            'title': 'my second select box',
                            'has-dropdown' : true,
                            'has-add-item-row': false,                        // add new composition   +
                            'options-rows-have-delete-item-button': false,    //   e.g. my comp three    - || some option
                            'multiple-values-acceptable' : false                
                        } 

                    }

                />
                <SelectBox 
                    
                    selectBoxObject = { 

                        {
                            'title': 'my third select box',
                            'has-dropdown' : true,
                            'has-add-item-row': false,                        // add new composition   +
                            'options-rows-have-delete-item-button': false,    //   e.g. my comp three    - || some option
                            'multiple-values-acceptable' : false                
                        } 

                    }

                />

            </div>

        );

    }

}

export default TempPage;