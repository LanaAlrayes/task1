/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

import { ContactData } from "../../tools/Json";
import Buttons from "../Button/Button";

function VideoView({ title, decs, decs1 }) {
  return (
    <>
      <Card className="text-white">
        <Card.Img src="./contact-bg.jpg" />
        <Card.ImgOverlay className="d-flex justify-content-center align-content-center text-center mt-5">
          <div>
            <Card.Subtitle className="text-danger fw-bold text-uppercase">
              {title}
            </Card.Subtitle>
            <Card.Title className="fs-1 fw-bold mt-4">
              {decs}
              <br />
              {decs1}
            </Card.Title>
          </div>
        </Card.ImgOverlay>
      </Card>
      
      <Container>
          <Row>
            <Col xs={8}>
              <Card className="translate-middle-y mx-5">
                <Card.Img src="./map.jpg" />
              </Card>
              <Row>
                {ContactData.map((element, index) => (
                  <Col xs={2} key={index} className="translate-middle-y mx-4 mb-5" style={{ width:"350px" }}>
                    <Card border="light" className="p-2 px-4 shadow">
                      <Stack direction="horizontal" gap={3}>
                        <Image src={element.img} />
                        <Card.Body>
                          <Card.Title className="fw-bolder">{element.title}</Card.Title>
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
            <Col xs={4}>
              <div
                className="translate-middle-y bg-light-subtle p-4"
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

export default VideoView;
