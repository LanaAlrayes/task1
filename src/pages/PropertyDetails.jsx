/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import CardFeatured from "../components/CardFeatured/CardFeatured";
import Question from "../components/Question/Question";
import BestDeal from "../components/BestDeal/BestDeal";
// import Buttons from "../components/Button/Button";

export default function PropertyDetails({ title }) {
  return (
    <>
      <Card className="text-white">
        <Card.Img src="page-heading-bg.jpg" />
        <Card.ImgOverlay className="d-flex justify-content-center align-content-center text-center mt-5">
          <div>
            <Card.Title className="bg-light text-dark py-2 fs-6 mb-4">
              HOME / SINGLE PROPERTY
            </Card.Title>
            <Card.Title className="fs-1 fw-bold text-uppercase">
              {title}
            </Card.Title>
          </div>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row className="my-5">
          <Col xs={9}>
            <Image src="single-property.jpg" />
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
        <Row className="my-4">
          <Col xs={6}>
            <div className="w-100">
              <span
                className="bg-danger-subtle px-2 py-1 fw-border"
                style={{ borderRadius: "5px" }}
              >
                Apparment
              </span>
              <h3 className="my-4 fw-bold">24 New Street Miami, OR 24560</h3>
              <hr className="text-black-50" />
              <span>
                Get <span className="fw-bolder">the best villa</span> agency
                HTML CSS Bootstrap Template for your company website. TemplateMo
                provides you the best free CSS templates in the world. Please
                tell your friends about it. Thank you. Cloud bread kogi bitters
                pitchfork shoreditch tumblr yr succulents single-origin coffee
                schlitz enamel pin you probably have not heard of them ugh
                hella.
              </span>
              <br />
              <br />

              <span>
                When you look for free CSS templates, you can simply type
                TemplateMo in any search engine website. In addition, you can
                type TemplateMo Digital Marketing, TemplateMo Corporate Layouts,
                etc. Master cleanse +1 intelligentsia swag post-ironic,
                slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan
                hoodie pop-up.
              </span>
            </div>
          </Col>
        </Row>
        <div className="w-75">
          <Question
            question1="Best useful links ?"
            question2="How does this work ?"
            question3="Why is Villa Agency the best ?"
          />
        </div>
        <BestDeal
          title="| BEST DEAL"
          decs="Find Your Best Deal"
          decs1="Right Now!"
        />
      </Container>
    </>
  );
}
