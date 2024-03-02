import { useLoaderData } from 'react-router-dom';
import PostList from '../components/PostList';

const BlogPage = () => {
  const posts = useLoaderData();
  return <PostList posts={posts} />;
}

const postsLoader = () => fetch('https://jsonplaceholder.typicode.com/posts')

export default BlogPage;
export {postsLoader}
