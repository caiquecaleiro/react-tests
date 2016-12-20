import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={(this.handleSubmit.bind(this))} className="comment-box">
        <textarea
          value={this.state.comment} 
          onChange={this.handleChange.bind(this)} />
        <button action="submit">Submit comment</button>
      </form>
    );
  }
}

CommentBox.propTypes = {
  saveComment: PropTypes.func.isRequired
}

export default connect(null, { saveComment })(CommentBox);