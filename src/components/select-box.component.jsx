import { Component } from 'react';
import caretUp from '../assets/images/select_caret_up.png';
import caretDown from '../assets/images/select_caret_down.png';

class SelectBox extends Component {

    title = this.props.selectBoxObject['title'];
    hasDropdown = this.props.selectBoxObject['has-dropdown'];

    //   'title': 'my first select box',
    //   'has-dropdown' : false
    //   'has-add-item-row': false,                              // add new composition   +
    //   'options-rows-have-delete-item-button': false, e.g.     // my comp three    - || some option
    //   'multiple-values-acceptable' : false                                                    


    selectBoxTitle =    <div className={this.props.selectBoxObject['has-dropdown'] ? 'basic-select-box-title-row has-dropdown' : 'basic-select-box-title-row'}>
                            <h3 className='basic-select-box-title-row-header'>{this.props.selectBoxObject['title']}</h3>
                            <img className='basic-select-box-title-row-caret' alt='up caret' src={caretDown}/>
                        </div>;

    selectBoxOptionsSection =   <div className='basic-select-box-options-section-placeholder'>

                                </div>

    //  ????
    //  title row has dropdown?
    //  has add item row?
    //  options rows have delete item button?
    //  are multiple values acceptable?

	render(){

		return(

			<div className='basic-select-box-outer-wrapper'>

                { this.selectBoxTitle }
                { this.selectBoxOptionsSection }

            </div>    

        );

    }

}

export default SelectBox;
