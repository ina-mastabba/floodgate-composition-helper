import { Component } from 'react';

class SelectBox extends Component {
    
    caretUp = this.props.selectBoxObject['has-dropdown'] === true ? require('../assets/images/select_caret_up.png') : null;
    caretDown = this.props.selectBoxObject['has-dropdown'] === true ? require('../assets/images/select_caret_down.png') : null;
    editIcon = this.props.selectBoxObject['options-rows-edit-item-callback'] ? require('../assets/images/edit_pencil_not_hovered.png') : null;
    title = this.props.selectBoxObject['title'];
    hasDropdown = this.props.selectBoxObject['has-dropdown'];

    //  SELECT BOX OBJECT:
    //  'title': 'my first select box',
    //  'has-dropdown' : false
    //  'has-add-item-row-text-and-callback': null,                          // add new composition   +
    //  'options-rows-have-delete-item-button': false, e.g. // my comp three    - || some option
    //  'options-array': ['my composition 3, my_composition_3]
    //  'multiple-values-acceptable' : false                                                    

    // TODO: 
    // DROPDOWN FUNCTIONALITY - done
    // ADD ITEM ROW FUNCTIONALITY - done
    // ROWS WITH DELETE ITEM BUTTON - done
    // ROWS WITHOUT DELETE ITEM BUTTON - done
    // PASS SINGLE VALUE
    // PASS MULTIPLE VALUE
    // HOVER FOR NON-TOUCH DEVICES - done
    // SELECTED BACKGROUND COLOR 
    // CARROT MOVEMENT FOR DROPDOWNS -done
    
    // SUBMIT BUTTON

    componentDidMount(){
        // console.log(`component did mount\n`);
        
    }

    componentDidUpdate(){
        // console.log(`component did update\n`);
        // console.log(`this.props.selectBoxHoverStates from cdu => ${this.props.selectBoxHoverStates}`);
    }


	render(){
        console.log(`this.props.selectBoxHoverStates from render => ${this.props.selectBoxHoverStates}\n`);
		return(

			<div className='basic-select-box-outer-wrapper'>
                
                { 
                    // TITLE ROW:
                    this.props.selectBoxObject['has-dropdown'] === true ? 
                    <div className='basic-select-box-title-row has-dropdown' onClick={() => this.props.toggleSelectBoxDropdown(this.props.selectBoxObject['select-box-id'])}>
                        <h3 className='basic-select-box-title-row-header'>{this.props.selectBoxObject['title']}</h3>
                        <img className={this.props.selectBoxDropdownStates.includes(this.props.selectBoxObject['select-box-id']) ? 'basic-select-box-title-row-caret dropped' : 'basic-select-box-title-row-caret' } alt='up caret' src={this.caretDown}/>
                    </div> :
                    <div className='basic-select-box-title-row'>
                        <h3 className='basic-select-box-title-row-header'>{this.props.selectBoxObject['title']}</h3>
                    </div>

                }
                {/* OPTIONS SECTION */}
                <div className={ 
                    this.props.selectBoxObject['has-dropdown'] === true && this.props.selectBoxDropdownStates.includes(this.props.selectBoxObject['select-box-id']) ? 'basic-select-box-options-section has-dropdown dropped' :
                    this.props.selectBoxObject['has-dropdown'] === true ? 'basic-select-box-options-section has-dropdown' : 'basic-select-box-options-section no-dropdown'
                }>
                   {
                        this.props.selectBoxObject['has-add-item-row-text-and-callback'] ? 
                        <div    id='add-item-option-row'
                                data={`${this.props.selectBoxObject['select-box-id']}add-item-option-row`}
                                className={this.props.selectBoxHoverStates.includes(`${this.props.selectBoxObject['select-box-id']}add-item-option-row`) === true ? 'add-item-row hovered' : 'add-item-row'}
                                onClick={(e)=>{this.props.selectBoxObject['has-add-item-row-text-and-callback'][1]()}}
                                onMouseEnter={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onMouseLeave={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                        >
                            <div className='add-item-row-col-1'>
                                <p className='add-item-row-col-1-text'><em>{this.props.selectBoxObject['has-add-item-row-text-and-callback'][0]}</em></p>
                            </div>
                            <div className='add-item-row-col-2'>
                                <span className='add-item-icon'>&#10010;</span>
                            </div>
                        </div> : null

                   }
                   {
                    // DELETE ITEM
                    this.props.selectBoxObject['options-rows-delete-item-callback'] ? this.props.selectBoxObject['options-array'].map((option, index)=>(
                        <div 
                            id={`options-row-option-${index}`} 
                            data={`${this.props.selectBoxObject['select-box-id']}options-row-option-${index}`}
                            className='options-row-has-del-item-button'
                            key={index}
                        >
                            <div 
                                id={`options-row-option-col-1-${index}`} 
                                className={this.props.selectBoxHoverStates.includes(`${this.props.selectBoxObject['select-box-id']}options-row-option-col-1-${index}`) === true ? 'options-row-col-1 hovered' : 'options-row-col-1 false' }
                                onMouseEnter={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onMouseLeave={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onClick={()=>{

                                }}
                            >
                                <p  className='options-row-col-1-text'>{option[0]}</p>
                            </div>
                            <div 
                                id={`options-row-option-col-2-${index}`} 
                                className={this.props.selectBoxHoverStates.includes(`${this.props.selectBoxObject['select-box-id']}options-row-option-col-2-${index}`) === true ? 'options-row-col-2 hovered' : 'options-row-col-2 false' }
                                onMouseEnter={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onMouseLeave={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onClick={()=>{

                                }}
                            >
                                <span className='delete-item-icon' onClick={()=>{this.props.selectBoxObject['options-rows-delete-item-callback'](option[1])}}>&#10134;</span>
                            </div>
                        </div>
                    ))
                    : 
                    // EDIT ITEM 
                    this.props.selectBoxObject['options-rows-edit-item-callback'] ? this.props.selectBoxObject['options-array'].map((option, index)=>(
                        <div 
                            id={`options-row-option-${index}`} 
                            data={`${this.props.selectBoxObject['select-box-id']}options-row-option-${index}`}
                            className='options-row-has-edit-item-button'
                            key={index}
                        >
                            <div 
                                id={`options-row-option-col-1-${index}`}
                                className={this.props.selectBoxHoverStates.includes(`${this.props.selectBoxObject['select-box-id']}options-row-option-col-1-${index}`) === true ? 'options-row-col-1 hovered' : 'options-row-col-1 false' }
                                onMouseEnter={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onMouseLeave={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                            >
                                <p  className='options-row-col-1-text'
                                    onClick={()=>{

                                    }}
                                >{option[0]}</p>
                            </div>
                            <div 
                                id={`options-row-option-col-2-${index}`}
                                className={this.props.selectBoxHoverStates.includes(`${this.props.selectBoxObject['select-box-id']}options-row-option-col-2-${index}`) === true ? 'options-row-col-2 hovered' : 'options-row-col-2 false' }
                                onMouseEnter={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onMouseLeave={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                            >
                                <span className='edit-item-icon' onClick={()=>{this.props.selectBoxObject['options-rows-edit-item-callback'](option[1])}}><img className='edit-icon' alt='Edit icon.' src={this.editIcon}/></span>
                            </div>
                        </div>
                    ))
                : 
                    this.props.selectBoxObject['options-array'].map((option, index)=>(
                        <div    className={this.props.selectBoxHoverStates.includes(`${this.props.selectBoxObject['select-box-id']}${`options-row-option-${index}`}`) === true ? 'options-row-single-col hovered' : 'options-row-single-col' }
                                id={`options-row-option-${index}`} 
                                key={index}
                                onMouseEnter={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                                onMouseLeave={(e)=>{this.props.selectBoxHover([e, this.props.selectBoxObject['select-box-id']])}}
                        >
                            <p className='options-row-single-col-text'>{option[0]}</p>
                        </div>
                    ))
                   }

                </div>

            </div>    

        );

    }

}

export default SelectBox;
