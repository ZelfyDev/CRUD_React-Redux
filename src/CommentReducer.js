const CommentReducer = (state = [], action) => {
    //เขียนรูปแบบ Action
    switch (action.type) {
        case 'ADD_COMMENT':
        return state.concat([action.data]);
        case 'DELETE_COMMENT':
        return state.filter((comment)=>comment.id !== action.id);
        case 'EDIT_COMMENT':
        return state.map((comment)=>comment.id === action.id ? {...comment,editing:!comment.editing} :comment);
        case 'UPDATE':
        return state.map((comment)=>{
            if(comment.id === action.id) {
                return {
                    ...comment,
                    title: action.data.newtitle,
                    firstname: action.data.newfirstname,
                    lastname: action.data.newlastname,
                    birthday: action.data.newbirthday,
                    nationality: action.data.newnationality,
                    gender: action.data.newgender,
                    phone: action.data.newphone,
                    citizen: action.data.newcitizen,
                    passport: action.data.newpassport,
                    salary: action.data.newsalary,
                    editing: !comment.editing
                }
            } else return comment;
        })
        default:
        return state;
    }
}
export default CommentReducer;