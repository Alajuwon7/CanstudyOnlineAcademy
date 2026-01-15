import { Section } from '@/components/layout/Section';
import { getArticles } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { FiHeart } from 'react-icons/fi';

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <Section padding="xl" background="white" className="pt-32">
      <div className="mb-8">
        <h1 className="text-display-2 font-primary font-bold text-text-primary mb-4">
          Latest Articles
        </h1>
        <p className="text-body-lg text-text-secondary">
          Stay updated with our latest insights and tips
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-body-sm text-text-secondary mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-body-sm text-text-secondary">
                <div>
                  <p className="font-medium">By {article.author.name}</p>
                  <p className="text-body-xs">{formatDate(article.publishedAt)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FiHeart />
                  <span>{article.likes}</span>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
