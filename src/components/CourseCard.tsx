import Image from "next/image";

export type Course = {
  id: string;
  title: string;
  category: string;
  instructor: string;
  lessons: number;
  students: number;
  rating: number;
  reviews: number;
  price: number;
  image: string;
};

export default function CourseCard({ course }: { course: Course }) {
  const roundedRating = Math.round(course.rating);
  const stars = "★★★★★".slice(0, roundedRating);

  return (
    <article className="card course-card">
      <div className="thumb">
        <Image src={course.image} alt={`${course.title} thumbnail`} fill sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="price">${course.price}</span>
      </div>
      <div className="course-body">
        <div className="meta">
          <span className="pill small">{course.category}</span>
          <span className="instructor">By {course.instructor}</span>
        </div>
        <h3>{course.title}</h3>
        <div className="rating">
          <span className="stars">{stars}</span>
          <span className="score">{course.rating.toFixed(1)}</span>
          <span className="muted">({course.reviews} Reviews)</span>
        </div>
        <div className="facts">
          <span>📚 {course.lessons} Lessons</span>
          <span>👥 {course.students} Students</span>
        </div>
      </div>

      <style jsx>{`
        .course-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(14, 34, 68, 0.18);
        }
        .thumb {
          position: relative;
          height: 240px;
          overflow: hidden;
          background: linear-gradient(135deg, #e6eefc, #fff);
        }
        .thumb :global(img) {
          object-fit: cover;
        }
        .price {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--orange);
          color: var(--white);
          padding: 12px 15px;
          border-radius: 12px;
          font-weight: 800;
          box-shadow: 0 12px 22px rgba(237, 125, 58, 0.35);
        }
        .course-body {
          padding: 20px;
          display: grid;
          gap: 12px;
          background: #fff;
        }
        .meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          color: var(--bluegrey);
          font-weight: 600;
        }
        .pill.small {
          padding: 6px 12px;
          font-size: 13px;
        }
        .instructor {
          color: var(--navy);
          font-weight: 700;
        }
        h3 {
          font-size: 20px;
          line-height: 1.35;
          margin: 0;
        }
        .rating,
        .facts {
          display: flex;
          gap: 10px;
          align-items: center;
          color: var(--bluegrey);
          font-weight: 600;
          flex-wrap: wrap;
        }
        .stars {
          color: #f5a524;
          letter-spacing: 2px;
        }
        .score {
          color: var(--navy);
          font-weight: 800;
        }
        .muted {
          color: var(--slate);
          font-weight: 500;
        }
      `}</style>
    </article>
  );
}
