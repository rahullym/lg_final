import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

interface Post {
    title: string;
    image?: string;
    author?: string;
    date?: string;
    category?: string;
}

export default function BlogPost({ post, children }: { post: Post, children: React.ReactNode }) {
    if (!post) return null;

    return (
        <article className="pt-32 pb-24 lg:pt-48 lg:pb-40 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs & Back */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12"
                    >
                        <a href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors group">
                            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </a>
                    </motion.div>

                    {/* Header */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest border border-blue-100 mb-6">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-heading leading-[1.1] tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest border-y border-slate-100 py-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-blue-600">
                                        <UserIcon className="w-4 h-4" />
                                    </div>
                                    <span>By {post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4 text-blue-500" />
                                    <span>{post.date}</span>
                                </div>
                                <button className="ml-auto flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <ShareIcon className="w-4 h-4" />
                                    Share
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl mb-16"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="blog-content max-w-none text-slate-700 leading-relaxed font-body
                            [&>p]:mb-6 [&>p]:text-lg
                            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:font-heading
                            [&>h4]:text-xl [&>h4]:font-bold [&>h4]:text-slate-900 [&>h4]:mb-4 [&>h4]:mt-6 [&>h4]:font-heading
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
                            [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800
                            [&_strong]:text-slate-900 [&_strong]:font-bold"
                    >
                        {children}
                    </motion.div>

                    {/* Author & Tags Section (Optional) */}
                    <div className="mt-20 pt-12 border-t border-slate-100">
                        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-slate-100">
                            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 shrink-0">
                                <UserIcon className="w-12 h-12" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">About {post.author}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Industry expert at Logistics Gurukul with years of experience in global supply chain management and international shipping operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
