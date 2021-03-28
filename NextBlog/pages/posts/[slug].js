import PostContent from '../../components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/postsUtil'

const PostDetail = ({ post }) => {
  return <PostContent post={post} />;
}

export const getStaticProps = async (context) => {
  const { params: { slug } } = context;

  const postData = await getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 1800
  }
}

export const getStaticPaths = async () => {
  const postFilenames = await getPostsFiles();
  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''))
  
  // If you have a lot of posts in the blog, use fallback: 'blocking' 
  // and maybe return only the featured posts in the paths.
  return {
    paths: slugs.map(slug => ({ params: { slug: slug}})),
    fallback: false // use blocking for a lot of posts in the blog
  }
}

export default PostDetail;