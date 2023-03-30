import { Component } from 'react';
import SelectBox from '../components/select-box.component';

class TempPage extends Component {

	render(){

		return(

			<div>
                
                <SelectBox 
                    selectBoxClick = {this.props.selectBoxClick}
                    selectBoxClickStates = {this.props.selectBoxClickStates}
                    selectBoxDropdownStates = {this.props.applicationState.selectBoxDropdownStates}
                    selectBoxHover = {this.props.selectBoxHover}
                    selectBoxHoverStates = {this.props.selectBoxHoverStates}
                    selectBoxObject = { 

                        {
                            'select-box-id': 1,
                            'title': 'my first select box',
                            'has-dropdown' : true,
                            'has-add-item-row-text-and-callback': ['add composition', this.props.addComposition],                        // add new composition   +
                            'options-rows-delete-item-callback': this.props.selectBoxDeleteItem, 
                            'options-rows-edit-item-callback': false,
                            'options-array': [['my 1st composition', 234], ['my 2nd composition', 235], ['my 3rd composition', 236], ['my 4th composition', 237], ['my 5th composition', 127], ['my 6th composition', 128]],
                            'multiple-values-acceptable' : false                
                        } 

                    }

                    toggleSelectBoxDropdown = {this.props.toggleSelectBoxDropdown}
                    
                />
                <SelectBox 
                    selectBoxClick = {this.props.selectBoxClick}
                    selectBoxClickStates = {this.props.selectBoxClickStates}
                    selectBoxHover = {this.props.selectBoxHover}
                    selectBoxHoverStates = {this.props.selectBoxHoverStates}
                    selectBoxObject = { 

                        {
                            'select-box-id': 2,
                            'title': 'my second select box',
                            'has-dropdown' : false,
                            'has-add-item-row-text-and-callback': false,                       
                            'options-rows-delete-item-callback': this.props.selectBoxDeleteItem, 
                            'options-rows-edit-item-callback': false,      
                            'options-array': [['some composition 1', 238], ['some composition 2', 239], ['some composition 3', 240], ['some composition 4', 241], ['some composition 5', 129], ['some composition 6', 130],],
                            'multiple-values-acceptable' : false                
                        } 

                    }

                />
                <SelectBox 
                    selectBoxClick = {this.props.selectBoxClick}
                    selectBoxClickStates = {this.props.selectBoxClickStates}
                    selectBoxDropdownStates = {this.props.applicationState.selectBoxDropdownStates}   
                    selectBoxHover = {this.props.selectBoxHover}
                    selectBoxHoverStates = {this.props.selectBoxHoverStates}
                    selectBoxObject = { 

                        {
                            'select-box-id': 3,
                            'title': 'my third select box',
                            'has-dropdown' : true,
                            'has-add-item-row-text-and-callback': false,             
                            'options-rows-delete-item-callback': false,
                            'options-rows-edit-item-callback': false,   
                            'options-array': [['ingleberts composition 1', 246], ['ingleberts composition 2', 247], ['ingleberts composition 3', 248], ['ingleberts composition 4', 249], ['ingleberts composition 4', 131], ['ingleberts composition 5', 132]],
                            'multiple-values-acceptable' : false                
                        } 

                    }

                    toggleSelectBoxDropdown = {this.props.toggleSelectBoxDropdown}

                />
                <SelectBox 
                    selectBoxClick = {this.props.selectBoxClick}
                    selectBoxClickStates = {this.props.selectBoxClickStates}
                    selectBoxHover = {this.props.selectBoxHover}
                    selectBoxHoverStates = {this.props.selectBoxHoverStates}
                    selectBoxObject = { 

                        {
                            'select-box-id': 4,
                            'title': 'my fourth select box',
                            'has-dropdown' : false,
                            'has-add-item-row-text-and-callback': false,                       
                            'options-rows-delete-item-callback': false,  
                            'options-rows-edit-item-callback': this.props.selectBoxEditItem,
                            'options-array': [['mervs composition 1', 242], ['mervs composition 2', 243], ['mervs composition 3', 244], ['mervs composition 4', 245], ['mervs composition 5', 133], ['mervs composition 6', 134]],
                            'multiple-values-acceptable' : false                
                        } 

                    }

                /> 

            </div>

        );

    }

}

export default TempPage;