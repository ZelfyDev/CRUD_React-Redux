import React from 'react';
import { connect } from 'react-redux';
import  CheckBox  from './CheckBox';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <center><table>
                    <tr>
                        <td class="tname">
                            <div class="tcheckbox">          
                            <div class="form-check form-check-inline">
                                < CheckBox/>
                                </div>
                            {this.props.comment.firstname}&nbsp;&nbsp;{this.props.comment.lastname}
                            
                            </div>
                        </td>
                        <td class="tgender">{this.props.comment.gender}</td>
                        <td class="tphone">+{this.props.comment.countrycode}&nbsp;&nbsp;{this.props.comment.phone}</td>
                        {console.log(this.props.comment.gender)}
                        <td class="tnattionality">{this.props.comment.nationality}</td>
                        <td class="tbuttonaction">
                            <button type="button" class="btn btn-warning"
                            onClick={()=>this.props.dispatch({type:'EDIT_COMMENT',id:this.props.comment.id})}>
                            Edit</button>&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-danger"
                            onClick={()=>this.props.dispatch({type:'DELETE_COMMENT',id:this.props.comment.id})}>
                            Delete</button>  
                        </td>
                    </tr>
                </table>
                </center>
            </div>
        );
        
    }
}


export default connect()(Comment);