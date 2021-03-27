import PostsGrid from '../Posts/PostsGrid';

import classes from './styles.module.css';

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;