import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {posts.map(post => (
      <PostList post={post} key={post.id} comments={comments} users={users} />
    ))}
  </section>
);
