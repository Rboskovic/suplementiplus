/**
 * Blog Section - Suplementiplus
 * Featured blog articles with slider and filters
 */

import {Link} from 'react-router';
import {useState} from 'react';
import type {ArticleData} from '~/lib/types';

interface BlogSectionProps {
  articles: ArticleData[];
}

export function BlogSection({articles}: BlogSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  if (!articles || articles.length === 0) return null;

  const filters = ['All', 'Article', 'Playlist', 'Video'];

  return (
    <section className="w-full py-12 lg:py-16 bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Blog</h2>

          {/* Filter Links */}
          <div className="flex justify-center items-center gap-6 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm font-medium transition-all pb-1 ${
                  activeFilter === filter
                    ? 'border-b-2 border-white'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Prejsť na články
            <span className="text-lg">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard({article}: {article: ArticleData}) {
  return (
    <Link
      to={`/articles/${article.handle}`}
      className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
    >
      {/* Article Image */}
      {article.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={article.image.url}
            alt={article.image.altText || article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-gray-100 transition-colors">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="text-sm text-white/80 line-clamp-3 mb-3">
            {article.excerpt}
          </p>
        )}

        {/* Read Time */}
        <div className="flex items-center gap-2 text-xs text-white/70">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>5 MIN</span>
        </div>
      </div>
    </Link>
  );
}