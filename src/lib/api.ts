import { Course } from '@/types/course';
import { Instructor } from '@/types/instructor';
import { Testimonial } from '@/types/testimonial';
import { Article } from '@/types/article';
import coursesData from '@/data/courses.json';
import instructorsData from '@/data/instructors.json';
import testimonialsData from '@/data/testimonials.json';
import articlesData from '@/data/articles.json';

export async function getCourses(): Promise<Course[]> {
  return coursesData as Course[];
}

export async function getCourseById(id: string): Promise<Course | null> {
  const courses = coursesData as Course[];
  return courses.find((course) => course.id === id) || null;
}

export async function getCoursesByCategory(category: string): Promise<Course[]> {
  const courses = coursesData as Course[];
  return courses.filter((course) => course.category.toLowerCase() === category.toLowerCase());
}

export async function getInstructors(): Promise<Instructor[]> {
  return instructorsData as Instructor[];
}

export async function getInstructorById(id: string): Promise<Instructor | null> {
  const instructors = instructorsData as Instructor[];
  return instructors.find((instructor) => instructor.id === id) || null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonialsData as Testimonial[];
}

export async function getTestimonialsByCourse(courseId: string): Promise<Testimonial[]> {
  const testimonials = testimonialsData as Testimonial[];
  return testimonials.filter((testimonial) => testimonial.courseId === courseId);
}

export async function getArticles(): Promise<Article[]> {
  return articlesData as Article[];
}

export async function getArticleById(id: string): Promise<Article | null> {
  const articles = articlesData as Article[];
  return articles.find((article) => article.id === id) || null;
}
