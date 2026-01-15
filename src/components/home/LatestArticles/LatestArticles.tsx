import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Article } from '@/types/article';
import { getArticles } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { FiHeart } from 'react-icons/fi';

export const LatestArticles: React.FC = async () => {
  const articles = await getArticles();

  return (
    <Section padding="lg" background="white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-display-2 font-primary font-bold text-text-primary">
          Latest articles.
        </h2>
        <Link
          href="/blog"
          className="text-body-md font-medium text-primary hover:underline"
        >
          Explore all articles
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} variant="default" className="overflow-hidden">
            <Link href={`/blog/${article.id}`}>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-heading-2 font-semibold text-text-primary mb-2 line-clamp-2 hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center justify-between text-body-sm text-text-secondary">
                <span>By {article.author.name}</span>
                <div className="flex items-center gap-1">
                  <FiHeart />
                  <span>{article.likes}</span>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-body-sm text-text-secondary">
        <Link href="/contact" className="hover:text-primary transition-colors">
          Looking for help? Contact us today
        </Link>
        <span>•</span>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Keep in Touch
        </Link>
        <span>•</span>
        <Link href="#" className="hover:text-primary transition-colors">
          Like us on Facebook
        </Link>
      </div>
    </Section>
  );
};
