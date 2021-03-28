import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';

import { getFeaturedPosts } from '../lib/postsUtil' 

const Home = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default Home;