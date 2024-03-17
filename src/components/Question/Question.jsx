/* eslint-disable react/prop-types */
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Question({question1,question2,question3}) {
  return (
    <div>
      <Accordion defaultActiveKey="0" className="my-5 me-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{question1}</Accordion.Header>
          <Accordion.Body>
            Get <span className="fw-bolder">the best villa</span> website
            template in HTML CSS and
            <br /> Bootstrap for your business. TemplateMo provides you the{" "}
            <br />
            <Card.Link className="text-decoration-none">
              best free CSS templates
            </Card.Link>{" "}
            in the world. Please tell your <br /> friends about it.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>{question2}</Accordion.Header>
          <Accordion.Body>
            Dolor <span className="fw-bolder">almesit amet</span>, consectetur
            adipiscing elit, sed <br /> does not eiusmod tempor incididunt ut
            labore consectetur <br />{" "}
            <span className="text-danger">adipiscing</span> elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>{question3}</Accordion.Header>
          <Accordion.Body>
            Dolor <span className="fw-bolder">almesit amet</span>, consectetur
            adipiscing elit, sed <br /> does not eiusmod tempor incididunt ut
            labore consectetur <br />{" "}
            <span className="text-danger">adipiscing</span> elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Question;
