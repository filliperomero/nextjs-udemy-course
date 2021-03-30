import Head from 'next/head'

import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';

import { getFeaturedPosts } from '../lib/postsUtil' 

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Fillipe's Blog</title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
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