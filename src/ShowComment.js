import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import EditComponent from './EditComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCheck from './AllCheck';

class ShowComment extends React.Component {
    render() {
        return ( 
            <div>
                <center><div class="row">
                <div className="col-md-5">
                    <div class="form-check form-check-inline">
                        <AllCheck />
                        <label class="form-check-label" for="inlineCheckbox1" >Select All &nbsp;</label>
                    </div>
                <button type="button" class="btn btn-danger"
                            onClick={()=>this.props.dispatch({type:'SELECT_DELETEALL_COMMENT',id:this.props.comment.id})}>
                            Delete</button>
                            </div>
                <div className="col-md-5">
                <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                </div>
                </div>
                </center>
                <center><table>
                    <tr>
                        <th class="tname">NAME</th>
                        <th class="tgender">GENDER</th> 
                        <th class="tphone">MOBILE PHONE</th>
                        <th class="tnattionality">NATIONALITY</th>
                        <th class="tbuttonaction"></th>
                    </tr>
                </table>
                </center>
                {this.props.comments.map((comment) => (
                    <div key={comment.id}>
                        {comment.editing ? <EditComponent comment={comment} key={comment.id} /> :
                        <Comment key={comment.id} comment={comment} />}
                    </div>
                ))}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state
    }
}
export default connect(mapStateToProps)(ShowComment);