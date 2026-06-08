import React from 'react';
import BlogPostCard from '../components/blog/BlogPostCard';
import SectionHeading from '../components/ui/SectionHeading';
import { getAllPosts } from '../lib/posts';

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionHeading className="mb-8">My Blog</SectionHeading>
      {posts.length === 0 ? (
        <p className="text-muted dark:text-muted-dark">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid divide-y divide-borderMuted dark:divide-borderMuted">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
