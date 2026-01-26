export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  instructor: {
    id: string;
    name: string;
    avatar?: string;
  };
  price: number;
  enrolledStudents: number;
  lessons: number;
  language: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  videoThumbnail?: string;
  tags?: string[];
  featured?: boolean;
  whatYoullLearn?: string[];
  certification?: {
    available: boolean;
    description?: string;
  };
  relatedCourses?: string[];
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
}
