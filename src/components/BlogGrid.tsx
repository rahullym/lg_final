import React, { useMemo, useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface BlogPost {
    slug: string;
    title: string;
    excerpt?: string;
    image?: string;
    category?: string;
    date?: string;
    author?: string;
}

const POSTS_PER_PAGE = 5;

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const recentPosts = useMemo(() => posts.slice(0, 3), [posts]);

    const categories = useMemo(() => {
        const counts = new Map<string, number>();
        for (const p of posts) {
            const c = (p.category ?? '').trim();
            if (!c) continue;
            counts.set(c, (counts.get(c) ?? 0) + 1);
        }
        return [...counts.entries()].sort((a, b) => b[1] - a[1]);
    }, [posts]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return posts.filter((p) => {
            if (activeCategory && (p.category ?? '') !== activeCategory) return false;
            if (!q) return true;
            return (
                p.title.toLowerCase().includes(q) ||
                (p.excerpt ?? '').toLowerCase().includes(q) ||
                (p.author ?? '').toLowerCase().includes(q)
            );
        });
    }, [posts, query, activeCategory]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const visible = filtered.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

    function resetPaging<T>(setter: (v: T) => void): (v: T) => void {
        return (v) => {
            setter(v);
            setPage(1);
        };
    }

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
                    {/* Main column */}
                    <div className="lg:col-span-2 space-y-14">
                        {visible.length === 0 && (
                            <p className="text-slate-500 text-sm py-12 text-center">
                                No posts match your search.
                            </p>
                        )}

                        {visible.map((post) => (
                            <article key={post.slug} className="group">
                                <a
                                    id={`blog-post-card-${post.slug}`}
                                    href={`/blog/${post.slug}`}
                                    className="block"
                                >
                                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight font-heading mb-6 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>

                                    {post.image && (
                                        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    )}

                                    {post.excerpt && (
                                        <p className="text-slate-600 leading-relaxed text-base mb-5 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    )}
                                </a>

                                <div className="border-t border-slate-200 pt-3 flex items-center gap-2 text-slate-500 text-sm">
                                    <CalendarIcon className="w-4 h-4 text-blue-500" />
                                    <span>{post.date}</span>
                                </div>
                            </article>
                        ))}

                        {totalPages > 1 && (
                            <nav
                                className="flex items-center justify-center gap-2 pt-2"
                                aria-label="Blog pagination"
                            >
                                <button
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    disabled={safePage === 1}
                                    className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    Prev
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setPage(p)}
                                        aria-current={p === safePage ? 'page' : undefined}
                                        className={
                                            p === safePage
                                                ? 'min-w-[2.5rem] px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-bold'
                                                : 'min-w-[2.5rem] px-3 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50'
                                        }
                                    >
                                        {p}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={safePage === totalPages}
                                    className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </nav>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Search */}
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <h3 className="text-base font-bold text-slate-900 mb-3">Search</h3>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex items-stretch gap-2"
                            >
                                <input
                                    type="search"
                                    value={query}
                                    onChange={(e) => resetPaging(setQuery)(e.target.value)}
                                    placeholder="search here…"
                                    className="flex-1 min-w-0 px-3 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-md bg-orange-400 hover:bg-orange-500 text-white text-sm font-bold transition-colors"
                                >
                                    Search
                                </button>
                            </form>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <h3 className="text-base font-bold text-slate-900 mb-4">Recent Posts</h3>
                            <ul className="space-y-4">
                                {recentPosts.map((rp) => (
                                    <li key={rp.slug}>
                                        <a
                                            href={`/blog/${rp.slug}`}
                                            className="flex items-start gap-3 group"
                                        >
                                            {rp.image ? (
                                                <img
                                                    src={rp.image}
                                                    alt={rp.title}
                                                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border border-slate-200"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 rounded-full bg-slate-200 flex-shrink-0" />
                                            )}
                                            <div className="min-w-0">
                                                <p className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {rp.title}
                                                </p>
                                                {rp.date && (
                                                    <p className="text-xs text-slate-500 mt-1">{rp.date}</p>
                                                )}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                {recentPosts.length === 0 && (
                                    <li className="text-sm text-slate-500">No posts yet.</li>
                                )}
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <h3 className="text-base font-bold text-slate-900 mb-4">Categories</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => resetPaging(setActiveCategory)(null)}
                                        className={
                                            'text-sm font-semibold transition-colors ' +
                                            (activeCategory === null
                                                ? 'text-blue-600'
                                                : 'text-slate-700 hover:text-blue-600')
                                        }
                                    >
                                        All Posts
                                    </button>
                                </li>
                                {categories.map(([name, count]) => (
                                    <li key={name}>
                                        <button
                                            onClick={() => resetPaging(setActiveCategory)(name)}
                                            className={
                                                'text-sm transition-colors ' +
                                                (activeCategory === name
                                                    ? 'text-blue-600 font-bold'
                                                    : 'text-slate-700 hover:text-blue-600 font-semibold')
                                            }
                                        >
                                            <span className="mr-1.5">•</span>
                                            {name}{' '}
                                            <span className="text-slate-400 font-normal">({count})</span>
                                        </button>
                                    </li>
                                ))}
                                {categories.length === 0 && (
                                    <li className="text-sm text-slate-500">No categories yet.</li>
                                )}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
