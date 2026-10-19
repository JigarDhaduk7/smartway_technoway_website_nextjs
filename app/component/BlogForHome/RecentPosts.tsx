import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, type Blog } from '@/lib/types';

// Sidebar list of the latest published posts.
export default function RecentPosts({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="mb-5 font-display text-lg font-semibold">Recent Posts</h2>
      {blogs.length > 0 ? (
        <ul className="space-y-1">
          {blogs.map((blog) => (
            <li key={blog._id}>
              <Link href={`/blogs/${blog.slug}`} className="group -mx-2 flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white/5">
                <span className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                  <Image src={blog.image} alt="" fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </span>
                <span className="min-w-0">
                  <span className="line-clamp-2 text-sm font-semibold text-fg group-hover:text-cyan">{blog.title}</span>
                  <span className="mt-1 block text-xs text-subtle">{formatDate(blog.createdAt)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">No recent posts available.</p>
      )}
    </div>
  );
}
