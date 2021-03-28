import AllPosts from '../../components/Posts/AllPosts';

import { getAllposts } from '../../lib/postsUtil';

const Posts = ({ posts }) => {
  return <AllPosts posts={posts} />
}

export const getStaticProps = async () => {
  const allPosts = await getAllposts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default Posts;