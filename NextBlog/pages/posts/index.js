import Head from 'next/head'

import AllPosts from '../../components/Posts/AllPosts';

import { getAllposts } from '../../lib/postsUtil';

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!" />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
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