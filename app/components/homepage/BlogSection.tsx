/**
 * Blog Section - Suplementiplus
 * 3-column slider with manual navigation
 */

import {useState} from 'react';
import {Link} from 'react-router';
import {Image} from '@shopify/hydrogen';
import type {ArticleData} from '~/lib/types';
import {Button} from '~/components/ui/button';

interface BlogSectionProps {
  articles: ArticleData[];
}

export function BlogSection({articles}: BlogSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const articlesPerPage = 3;
  const totalSlides = Math.ceil(articles.length / articlesPerPage);

  if (!articles || articles.length === 0) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleArticles = articles.slice(
    currentSlide * articlesPerPage,
    (currentSlide + 1) * articlesPerPage,
  );

  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Blog
          </h2>

          {/* Filter Links */}
          <div className="flex items-center justify-center gap-6 text-sm font-medium mb-8">
            <button className="text-white border-b-2 border-white pb-1">
              Sve
            </button>
            <button className="text-white/70 hover:text-white transition-colors pb-1">
              Članak
            </button>
            <button className="text-white/50 cursor-not-allowed pb-1">
              Plejlista
            </button>
            <button className="text-white/50 cursor-not-allowed pb-1">
              Video
            </button>
          </div>
        </div>

        {/* Articles Slider - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Articles Slider - Mobile */}
        <div className="lg:hidden">
          <div className="mb-8">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Prethodni"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({length: totalSlides}).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white w-6'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Slajd ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Sledeći"
          >
            ›
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold"
            asChild
          >
            <Link to="/articles">
              Pogledaj sve članke <span className="ml-1">›</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({article}: {article: ArticleData}) {
  return (
    <Link
      to={`/articles/${article.handle}`}
      className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Article Image */}
      {article.image && (
        <div className="aspect-video overflow-hidden">
          <Image
            data={article.image}
            aspectRatio="16/9"
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>

        {/* Read Time */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <ClockIcon />
          <span>5 MIN</span>
        </div>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}