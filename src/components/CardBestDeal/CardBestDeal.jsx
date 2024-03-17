/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function CardBestDeal({
  title1,
  title2,
  title3,
  title4,
  title5,
  sub,
  sub1,
  sub2,
  sub3,
  sub4,
}) {
  return (
    <Card className="shadow px-4">
      <Card.Body>
        <Stack direction="horizontal" gap={4}>
          <Card.Subtitle className="text-muted text-black-50 fw-normal">
            {title1}
          </Card.Subtitle>
          <Card.Title className="fs-4 fw-bold">{sub}</Card.Title>
        </Stack>
      </Card.Body>
      <hr className="m-0 text-black-50" />
      <Card.Body>
        <Stack direction="horizontal" gap={5}>
          <Card.Subtitle className="text-muted text-black-50 text-black-50 fw-normal">
            {title2}
          </Card.Subtitle>
          <Card.Title className="fs-4 fw-bold ps-3">{sub1}</Card.Title>
        </Stack>
      </Card.Body>
      <hr className="m-0 text-black-50" />
      <Card.Body>
        <Stack direction="horizontal" gap={5}>
          <Card.Subtitle className="text-muted text-black-50 fw-normal">
            {title3}
          </Card.Subtitle>
          <Card.Title className="fs-4 fw-bold ps-3">{sub2}</Card.Title>
        </Stack>
      </Card.Body>
      <hr className="m-0 text-black-50" />
      <Card.Body>
        <Stack direction="horizontal" gap={4}>
          <Card.Subtitle className="text-muted text-black-50 fw-normal">
            {title4}
          </Card.Subtitle>
          <Card.Title className="fs-4 fw-bold ps-3">{sub3}</Card.Title>
        </Stack>
      </Card.Body>
      <hr className="m-0 text-black-50" />
      <Card.Body>
        <Stack direction="horizontal" gap={4}>
          <Card.Subtitle className="text-muted text-black-50 fw-normal">
            {title5}
          </Card.Subtitle>
          <Card.Title className="fs-4 fw-bold ps-3">{sub4}</Card.Title>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default CardBestDeal;
