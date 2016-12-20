import React from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <CommentBox />
        </div>
        <div className="col-md-6">
          <CommentList />
        </div>
      </div>
    </div>
  );
}

export default App;