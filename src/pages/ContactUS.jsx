/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import Buttons from "../components/Button/Button";
import { ContactData } from "../tools/Json";

function ContactUS({ title, title1, decs, decs1 }) {
  return (
    <>
      <Card className="text-white">
        <Card.Img src="./page-heading-bg.jpg" />
        <Card.ImgOverlay className="d-flex justify-content-center align-content-center text-center mt-5">
          <div>
            <Card.Title className="bg-light text-dark py-2 fs-6 mb-4">
              HOME / CONTACT US
            </Card.Title>
            <Card.Title className="fs-1 fw-bold text-uppercase">
              {title}
            </Card.Title>
          </div>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row className="my-5">
          <Col xs={6}>
            <div className="text-danger fw-bolder text-uppercase">
              <span>{title1}</span>
            </div>
            <h1 className="my-5 fw-bold">
              {decs} <br /> {decs1}
            </h1>
            <span>
              When you really need to download free CSS templates, please
              remember our website TemplateMo. Also, tell your friends about our
              website. Thank you for visiting. There is a variety of Bootstrap
              HTML CSS templates on our website. If you need more information,
              please contact us.
            </span>
            <Row className=" my-5">
              {ContactData.map((element, index) => (
                <Col
                  xs={2}
                  key={index}
                  className="mx-4 mb-5"
                  style={{ width: "350px" }}
                >
                  <Card border="light" className="p-2 px-4 shadow">
                    <Stack direction="horizontal" gap={3}>
                      <Image src={element.img} />
                      <Card.Body>
                        <Card.Title className="fw-bolder">
                          {element.title}
                        </Card.Title>
                        <Card.Subtitle className="text-muted text-black-50 fw-normal">
                          {element.sub}
                        </Card.Subtitle>
                      </Card.Body>
                    </Stack>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={6}>
            <div
              className="shadow bg-light-subtle p-4"
              style={{ borderRadius: "10px" }}
            >
              <Form>
                <Form.Group
                  className="mb-3 px-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="name" placeholder="Your Name ..." />
                </Form.Group>
                <Form.Group
                  className="mb-3 px-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Your E-mail..." />
                </Form.Group>
                <Form.Group
                  className="mb-3 px-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="name" placeholder="Subject..." />
                </Form.Group>
                <Form.Group
                  className="mb-3 px-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    rows={5}
                  />
                </Form.Group>
              </Form>
              <Buttons title="Send Message" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUS;
