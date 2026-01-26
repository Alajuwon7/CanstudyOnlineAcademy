import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { PopularCourses } from '@/components/home/PopularCourses';
import { PremiumLearning } from '@/components/home/PremiumLearning';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <PopularCourses />
      <PremiumLearning />
    </>
  );
}
