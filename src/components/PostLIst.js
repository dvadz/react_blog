import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    if (this.props.posts.length) {
      return this.props.posts.map((post) => {
        return (
          <div className='item' key={post.id}>
            <i className='large user middle aligned icon'></i>
            <div className='content'>
              <div className='header'>{post.title}</div>
              <div className='description'>{post.body}</div>
              <UserHeader useId={post.useId} />
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
