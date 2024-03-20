import React, { useState } from "react";
import { courses } from "../../constants";
import "../../styles/courses/courses.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import Tilt from "react-parallax-tilt";
const CourseCard = (item) => {
  const data = item.item;
  const [readMore, setReadMore] = useState(false);
  const [moreContent, setMoreContent] = useState(false);

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="courses_cotnent_inside"
    >
      <div
        className="courses_content_image"
        onMouseEnter={() => setReadMore(true)}
        onMouseLeave={() => setReadMore(false)}
        onClick={() => setMoreContent(!moreContent)}
      >
        <a href={`#courses_index${data.id}`}>
          <h1
            className={
              readMore && !moreContent ? "readMore pointer" : "readNone pointer"
            }
          >
            Read More
          </h1>
        </a>
        <img src={data.image} alt="" />
      </div>
      <div id={`courses_index${data.id}`} className="courses_content_caption">
        <h2>{data.title}</h2>
        <div className="courses_overview">
          <h3>Overview</h3>
          <p>
            <FaStar /> {data.overview[0]}
          </p>
          {moreContent ? (
            <>
              {data.overview[1] ? (
                <>
                  <p>
                    <FaStar /> {data.overview[1]}
                  </p>
                </>
              ) : (
                <></>
              )}
              <h3>Carrer Growth</h3>
              <p>{data.carrer}</p>
            </>
          ) : (
            <></>
          )}
          <button
            onClick={() => setMoreContent(!moreContent)}
            className="course_content_readMore"
          >
            {moreContent ? " See Less" : " Read More"}
          </button>
        </div>
      </div>
    </Tilt>
  );
};

const Courses = () => {
  return (
    <div id="courses" className="courses">
      <div className="courses_heading">
        <h1>Courses</h1>
      </div>
      <div className="courses_content">
        {courses.map((item, index) => {
          return <CourseCard key={index} item={item} />;
        })}
      </div>
      <div className="courses_table">
        <table className="GeneratedTable">
          <thead>
            <tr>
              <th></th>
              <th>B.sc</th>
              <th>Advance Diploma</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eligibility</td>
              <td>Min Age 17+ 12th Pass Any Stream </td>
              <td>Min Age 17+ 12th Pass Any Stream</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>3 Years</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>Annual Tuition Fess</td>
              <td>70000</td>
              <td>75000</td>
            </tr>
            <tr>
              <td>Total Program Fess</td>
              <td>225500</td>
              <td>159500</td>
            </tr>
            <tr>
              <td>Qrt Instalments</td>
              <td>12</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
        <p>
          <span>
            <PiStudentFill /> One Registration Charges:{" "}
            <span className="courses_amount">
              {" "}
              INR <FaIndianRupeeSign />
              3000{" "}
            </span>
          </span>

          <br />

          <span>
            <PiStudentFill /> Other Annual Charges:{" "}
            <span className="courses_amount">
              INR <FaIndianRupeeSign />
              3000
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Courses;
