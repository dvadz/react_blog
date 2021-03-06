import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
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
              <UserHeader userId={post.userId} />
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
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
