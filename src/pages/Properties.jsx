/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Buttons from "../components/Button/Button";
import { PropertyData } from "../tools/Json";

export default function Properties( {title}) {
  return (
    <>
    <Card className="text-white">
        <Card.Img src="./page-heading-bg.jpg" />
        <Card.ImgOverlay className="d-flex justify-content-center align-content-center text-center mt-5">
         <div>
           <Card.Title className="bg-light text-dark py-2 fs-6 mb-4">HOME / PROPERTIES</Card.Title>
              <Card.Title className="fs-1 fw-bold text-uppercase">
                {title}
              </Card.Title>
         </div>
        </Card.ImgOverlay>
      </Card>
      
      <Container>
      <Row className="d-flex justify-content-center align-content-center my-5">
        {PropertyData.map((element, index) => (
          <Col xs={4} key={index}>
            <div
              className="bg-light p-4 w-100 mb-5"
              style={{ borderRadius: "10px" }}
            >
              <Image src={element.img} style={{ borderRadius: "10px" }} />
              <Row className="my-4">
                <Col xs={6}>
                  <span
                    className="bg-danger-subtle px-2 py-1 fw-border"
                    style={{ borderRadius: "5px" }}
                  >
                    {element.title}
                  </span>
                </Col>
                <Col xs={6}>
                  <strong className=" text-danger ps-5">{element.price}</strong>
                </Col>
              </Row>
              <strong>{element.subtitle}</strong>
              <Row className="mt-2">
                <Col xs={4}>
                  Bedrooms:
                  <strong> {element.number}</strong>
                </Col>
                <Col xs={4}>
                  Bathrooms:
                  <strong> {element.number1}</strong>
                </Col>
                <Col xs={4}>{/*  */}</Col>
              </Row>
              <Row>
                <Col xs={4}>
                  Area:
                  <strong> {element.number2}</strong>
                </Col>
                <Col xs={3}>
                  Floor:
                  <strong>{element.number3}</strong>
                </Col>
                <Col xs={5}>
                  Parking:
                  <strong> {element.number4}</strong>
                </Col>
              </Row>
              <hr className="text-black-50" />
              <div className="text-center py-3">
                <Buttons title="Schedule a visit" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
    </>
  )
}
