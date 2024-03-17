import { HeroData } from "../../tools/Json";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      {HeroData.map((element, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={element.img}
            alt="First slide"
          />
          <Carousel.Caption className="h-75 w-50 p-4">
            <div className="text-start">
              {" "}
              <div className="bg-light my-4 p-2 text-center w-25">
                {element.text}
                <span className="text-danger">{element.text1}</span>
              </div>
              <div
                style={{ fontSize: "60px", fontWeight: "bold" }}
                className="text-light text-uppercase"
              >
                {element.desc}
                <br />
                {element.desc1} <br /> {element.desc2} <br /> {element.desc3}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
