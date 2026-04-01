import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface BlogPost {
    slug: string;
    title: string;
    excerpt?: string;
    image?: string;
    category?: string;
    date?: string;
    author?: string;
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <motion.a
                            key={i}
                            id={`blog-post-card-${post.slug}`}
                            href={`/blog/${post.slug}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col group cursor-pointer"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6 shadow-sm">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white px-3 py-1 rounded-lg text-blue-600 font-bold text-[10px] uppercase tracking-widest border border-slate-100 shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                                <div className="flex items-center gap-1.5">
                                    <CalendarIcon className="w-3.5 h-3.5 text-blue-500" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <UserIcon className="w-3.5 h-3.5" />
                                    <span>{post.author}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading group-hover:text-blue-600 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-slate-500 mb-6 leading-relaxed text-sm line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px]">
                                Read Article
                                <ArrowRightIcon className="w-4 h-4" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
