import { readdir, readFile } from 'fs/promises'
import { join } from 'path'

import matter from 'gray-matter';

const postDirectory = join(process.cwd(), 'content', 'posts');

export const getPostData = async (postIdentifier) => {
  const slug = postIdentifier.replace(/\.md$/, ''); // remove the file extension
  const fileContent = await readFile(join(postDirectory, `${slug}.md`), 'utf-8');
  const { data, content } = matter(fileContent);

  return { slug, ...data, content }
}

export const getPostsFiles = async () => {
  return readdir(postDirectory)
}

export const getAllposts = async () => {
  const postfiles = await getPostsFiles()

  const allPosts = await Promise.all(postfiles.map(postFile => {
    return getPostData(postFile)
  }))

  return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

export const getFeaturedPosts = async () => {
  const allPosts = await getAllposts();

  return allPosts.filter(post => post.isFeatured)
}