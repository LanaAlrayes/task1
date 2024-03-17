/* eslint-disable react/prop-types */
import "./VideoView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import { ViewData } from "../../tools/Json";

function VideoView({ title, decs, decs1 }) {
  return (
    <>
      <Card className="text-white">
        <Card.Img src="video-bg.jpg" />
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
        <Card className="translate-middle-y mx-5 mt-4">
          <Card.Img src="video-frame.jpg" />
        </Card>
        <Row className="d-flex justify-content-between">
          {ViewData.map((element, index) => (
            <Col xs={4} key={index} className="w-25 mb-5">
              <Card border="light" className="px-5 py-2 bg-danger-subtle">
                <Stack direction="horizontal" gap={4}>
                  <h1 className="fw-bolder text-danger">{element.title}</h1>
                  <Card.Body>
                    <Card.Subtitle>{element.sub}</Card.Subtitle>
                  </Card.Body>
                </Stack>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default VideoView;
