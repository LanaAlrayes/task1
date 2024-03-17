import Card from "react-bootstrap/Card";

export default function Footer() {
  return (
    <Card.Footer style={{ height:"100px", background:"black" }}>
        <h5 className="text-center text-white p-5">
          Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design:
          TemplateMo
        </h5>
    </Card.Footer>
  );
}
