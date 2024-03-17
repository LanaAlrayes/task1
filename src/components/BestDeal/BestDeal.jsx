/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BestTabs from "../BestTabs/BestTabs";

function BestDeal({ title, decs, decs1 }) {
  return (
    <Container expand="lg">
      <Row className="my-5">
        <Col>
          <div className="text-danger fw-bolder text-uppercase">
            <span>{title}</span>
          </div>
          <h1 className="my-5 fw-bold">
            {decs} <br /> {decs1}
          </h1>
        </Col>
        <BestTabs
          title="Extra Info About Property"
          title1="Detail Info About Villa"
          title2="Extra Info About Penthouse"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          do eiusmod tempor pack incididunt ut labore et dolore
          magna aliqua quised ipsum suspendisse."
          
          subtitle1="Swag fanny pack lyft blog twee. JOMO ethical copper mug,
          succulents typewriter shaman DIY kitsch twee taiyaki fixie
          hella venmo after messenger poutine next level humblebrag
          swag franzen."
        />
      </Row>
    </Container>
  );
}

export default BestDeal;
