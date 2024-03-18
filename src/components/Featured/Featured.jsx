/* eslint-disable react/prop-types */
import CardFeatured from "../CardFeatured/CardFeatured";
import Question from "../Question/Question";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

function Featured({ title, decs, decs1 }) {
  return (
    <Container expand="lg">
      <Row className="my-5">
        <Col xs={4}>
          <Image src="./featured.jpg" />
          <Badge
            pill
            className="bg-danger w-25 translate-middle"
            style={{height: "100px"}}
          >
            <Image className="pt-3" src="./featured-icon.png" />
          </Badge>
        </Col>

        <Col xs={5}>
          <div className="text-danger fw-bolder text-uppercase">
            <span>{title}</span>
          </div>
          <h1 className="my-5 fw-bold">
            {decs} <br /> {decs1}
          </h1>
          <Question
            question1="Best useful links ?"
            question2="How does this work ?"
            question3="Why is Villa Agency the best ?"
          />
        </Col>
        <Col xs={3}>  
          <CardFeatured
            title1="250 m2"
            sub="Total Flat Space"
            title2="Contract"
            sub1="Contract Ready"
            title3="Payment"
            sub2="Payment Process"
            title4="Safety"
            sub3=" 24/7 Under control"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Featured;
