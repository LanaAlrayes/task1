/* eslint-disable react/prop-types */
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import photo from "./../../../public/info-icon-01.png"
import photo1 from "./../../../public/info-icon-02.png"
import photo2 from "./../../../public/info-icon-03.png"
import photo3 from "./../../../public/info-icon-04.png"
function CardFeatured({
  title1,
  title2,
  title3,
  title4,
  sub,
  sub1,
  sub2,
  sub3,
}) {
  return (
    <Card className="shadow px-4 py-4 w-100">
      <Stack direction="horizontal" gap={3}>
        <Image src={photo} />
        <Card.Body>
          <Card.Title className="fw-bolder">{title1}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-black-50 fw-normal">
            {sub}
          </Card.Subtitle>
        </Card.Body>
      </Stack>
      <hr className="text-black-50" />
      <Stack direction="horizontal" gap={3}>
        <Image src={photo1} />
        <Card.Body>
          <Card.Title className="fw-bolder">{title2}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-black-50 fw-normal">
            {sub1}
          </Card.Subtitle>
        </Card.Body>
      </Stack>
      <hr className="text-black-50" />
      <Stack direction="horizontal" gap={3}>
        <Image src={photo2} />
        <Card.Body>
          <Card.Title className="fw-bolder">{title3}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-black-50 fw-normal">
            {sub2}
          </Card.Subtitle>
        </Card.Body>
      </Stack>
      <hr className="text-black-50" />
      <Stack direction="horizontal" gap={3}>
        <Image src={photo3} />
        <Card.Body>
          <Card.Title className="fw-bolder">{title4}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-black-50 fw-normal">
            {sub3}
          </Card.Subtitle>
        </Card.Body>
      </Stack>
    </Card>
  );
}

export default CardFeatured;
