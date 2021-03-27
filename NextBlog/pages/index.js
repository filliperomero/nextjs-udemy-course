import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production.',
    date: '2022-02-10'
  }
]

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}

export default Home;