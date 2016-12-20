import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function CommentList(props) {
  const list = props.comments.map(comment => {
    return <li key={comment}>{comment}</li>;
  });

  return (
    <ul className="comment-list">{list}</ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);