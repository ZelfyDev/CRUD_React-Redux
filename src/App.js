import React from 'react';
import CommentForm from './CommentForm';
import ShowComment from './ShowComment';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CommentForm/>
        <ShowComment />
      </div>
    );
  }
}

export default App;