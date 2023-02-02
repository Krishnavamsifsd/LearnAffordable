import React from "react";
import { Card } from "react-bootstrap";
import "./CoursesCard.css";

const CoursesCard = ({ course }) => {
  const { name, background, price, instructor, email, enrollUser, company } = course;
  const sendMessage = () => {
    window.location.href = `https://wa.me/+918309702035?text=I%20am%20interested%20in%20enrolling%20in%20${name}%20course%20offered%20by%20${company}`;
  };
  return (
    <article className="col col-lg-4" lg="4" data-aos="zoom-out-up">
      <Card className="my-3 mx-auto shadow course-card">
        <Card.Img variant="top" src={background} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Title>Price: {price}</Card.Title>
          <div className="fw-light">
            <small>Company: {company}</small> <br />
            <small>Instructor: {instructor}</small> <br />
            <small>Contact: {email}</small>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <div>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="far fa-star text-warning"></i>
            </div>
            <div>
              <i className="fas fa-user me-1"></i>
              <small>{enrollUser}</small>
            </div>
          </div>
          <button
            className="mt-3 btn btn-dark w-100 text-capitalize fs-6 mt-1 button-card"
            onClick={sendMessage}
          >
            <i className="fas fa-cart-plus me-2 "></i>
            Enroll Now
          </button>
        </Card.Body>
      </Card>
    </article>
  );
};

export default CoursesCard;
