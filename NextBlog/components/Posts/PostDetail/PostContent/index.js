import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import PostHeader from '../PostHeader';

import classes from './styles.module.css'

const PostContent = ({ post }) => {
  const { title, slug, image, content } = post;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image 
    //       src={`/images/posts/${slug}/${image.src}`} 
    //       alt={image.alt} 
    //       width={600}
    //       height={300} 
    //     />
    //   )
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image 
              src={`/images/posts/${slug}/${image.url}`} 
              alt={image.alt} 
              width={600}
              height={300} 
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code
      return (
        <SyntaxHighlighter 
          style={atomDark} 
          language={language} 
          children={value} 
        />
      )
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
      <ReactMarkdown renderers={customRenderers}>
        {content}
      </ReactMarkdown>
    </article>
  )
}

export default PostContent;