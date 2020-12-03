import React from 'react';
import { connect } from 'react-redux';

class AllCheck extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        checkbox: [
        {id: 1, value: "", isChecked: false},
        ]
    }
}
          
handleAllChecked = (e) => {
    let checkbox = this.state.checkbox
    //checkbox.forEach(checkbox => checkbox.isChecked = e.target.checked) 
    this.setState({checkbox: checkbox})
    }
render(){
return (
   <input class="form-check-input" type="checkbox" onClick={this.handleAllChecked}  value="checkedall" />
);
    }
}
export default connect()(AllCheck);