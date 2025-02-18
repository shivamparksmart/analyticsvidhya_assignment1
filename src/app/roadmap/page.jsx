"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import styles from "./Roadmap.module.css";

const lessons = [
  {
    id: 1,
    coursename: "Introduction to Python",
    title: "Complete Tutorial: Learn Data Python from Scratch",
    link: "/course/python-intro",
  },
  {
    id: 2,
    coursename: "Introduction to Python",
    title: "How to Learn Python Step by Step",
    link: "/course/python-step",
  },
  {
    id: 3,
    coursename: "Introduction to Python",
    title: "Python Libraries - NumPy and Pandas",
    link: "/course/data-python",
  },
  {
    id: 4,
    coursename: "Introduction to Python",
    title: "Working with Functions in Python - Defining and Calling Functions",
    link: "/course/data-python",
  },
  {
    id: 5,
    coursename: "Introduction to Python",
    title: "How to Learn Python Step by Step",
    link: "/course/data-python",
  },
  {
    id: 6,
    coursename: "Introduction to Python",
    title: "Control Flow in Python - Loops and Conditionals",
    link: "/course/data-python",
  },
  {
    id: 7,
    coursename: "Introduction to Python",
    title: "How to Learn Python Step by Step",
    link: "/course/data-python",
  },
];

export default function Roadmap() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedProgress = localStorage.getItem("roadmapProgress");
    if (savedProgress) setProgress(parseInt(savedProgress, 10));
  }, []);

  const handleLessonClick = (index, link) => {
    setProgress(index);
    localStorage.setItem("roadmapProgress", index);
    toast.success(`Navigating to: ${lessons[index].title}`);
  };

  return (
    <div className={styles.roadmapContainer}>
      {lessons.map((lesson, index) => (
        <div key={lesson.id}>
          <div
            className={
              index < progress
                ? `${styles.lessonCircle} ${styles.completed}`
                : index === progress
                ? `${styles.lessonCircle} ${styles.inProgress}`
                : styles.lessonCircle
            }
            onClick={() => handleLessonClick(index, lesson.link)}
          ></div>
          <div
            className={`${styles.courseTitle} ${
              index % 2 === 0 ? styles.leftAligned : styles.rightAligned
            }`}
          >
            <span className={styles.yellowTitle}>{lesson.coursename}</span>
            {lesson.title}
          </div>

          <div
            className={
              index < progress ? styles.completionline : styles.pendingline
            }
            style={{
              marginLeft: `${index % 2 === 0 ? "60px" : "-60px"}`,
              transform: `rotate(${index % 2 === 0 ? "-135deg" : "130deg"})`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
