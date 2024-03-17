/* eslint-disable react/prop-types */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import CardBestDeal from "../CardBestDeal/CardBestDeal";
import Buttons from "../Button/Button";

function BestTabs({ title, title1, title2, subtitle, subtitle1 }) {
  return (
    <Row>
      <Col className="mt-5">
        <Tabs
          defaultActiveKey="appartment"
          id="uncontrolled-tab-example"
          fill
          variant="pills"
          className="mb-4 w-50"
        >
          <Tab eventKey="appartment" title="Appartment">
            <Row>
              <Col xs={3}>
                <CardBestDeal
                  title1="Total Flat Space"
                  sub="185 m2"
                  title2="Floor number"
                  sub1="26th"
                  title3="Number of rooms"
                  sub2="4"
                  title4="Parking Available"
                  sub3=" Yes"
                  title5="Payment Process"
                  sub4=" Bank"
                />
              </Col>
              <Col xs={5}>
                <Image src="deal-01.jpg" />
              </Col>
              <Col xs={4}>
                <Card.Body className="ps-5">
                  <Card.Title className="fs-5 fw-bold pb-4">{title}</Card.Title>
                  <Card.Subtitle className="fs-6 lh-base fw-normal mb-5">
                    {subtitle}
                    <br />
                    <br />
                    {subtitle1}
                  </Card.Subtitle>
                  <Buttons title="Schedule a visit" />
                </Card.Body>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="villa" title="Villa House">
            <Row className="d-flex justify-content-center align-content-center">
              <Col xs={3}>
                <CardBestDeal
                  title1="Total Flat Space"
                  sub="250 m2"
                  title2="Floor number"
                  sub1="26th"
                  title3="Number of rooms"
                  sub2="5"
                  title4="Parking Available"
                  sub3=" Yes"
                  title5="Payment Process"
                  sub4=" Bank"
                />
              </Col>
              <Col xs={5}>
                <Image src="deal-02.jpg" />
              </Col>
              <Col xs={4}>
                <Card.Body className="ps-5">
                  <Card.Title className="fs-5 fw-bold pb-4">
                    {title1}
                  </Card.Title>
                  <Card.Subtitle className="fs-6 lh-base fw-normal mb-5">
                    {subtitle}
                    <br />
                    <br />
                    {subtitle1}
                  </Card.Subtitle>
                  <Buttons title="Schedule a visit" />
                </Card.Body>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="penthouse" title="Penthouse">
            <Row className="d-flex justify-content-center align-content-center">
              <Col xs={3}>
                <CardBestDeal
                  title1="Total Flat Space"
                  sub="320 m2"
                  title2="Floor number"
                  sub1="34th"
                  title3="Number of rooms"
                  sub2="6"
                  title4="Parking Available"
                  sub3=" Yes"
                  title5="Payment Process"
                  sub4=" Bank"
                />
              </Col>
              <Col xs={5}>
                <Image src="deal-03.jpg" />
              </Col>
              <Col xs={4}>
                <Card.Body className="ps-5">
                  <Card.Title className="fs-5 fw-bold pb-4">
                    {title2}
                  </Card.Title>
                  <Card.Subtitle className="fs-6 lh-base fw-normal mb-5">
                    {subtitle}
                    <br />
                    <br />
                    {subtitle1}
                  </Card.Subtitle>
                  <Buttons title="Schedule a visit" />
                </Card.Body>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
}
export default BestTabs;
