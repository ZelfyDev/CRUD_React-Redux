import React from 'react';
import { connect } from 'react-redux';

class CheckBox  extends React.Component {
constructor(props) {
        super(props)
        this.state = {
                checkbox: [
                {id: 1, value: "", isChecked: false},
                ]
        }
}
handleCheckChieldElement = (e) => {
        const checkbox = this.state.checkbox
        checkbox.forEach(checkbox => {
                if (checkbox.value === e.target.value)
                checkbox.isChecked =  e.target.checked
        })
        this.setState({checkbox: checkbox})
}
              
render(){
return (
        //<input class="form-check-input" key={this.state.checkbox} onClick={this.handleCheckChieldElement} type="checkbox" checked={this.state.isChecked} value={this.state.value}/>
       <input class="form-check-input" onClick=""type="checkbox" />
);
}
}
export default connect()(CheckBox);

