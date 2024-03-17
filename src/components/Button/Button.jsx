/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
// import Badge from "react-bootstrap/Badge";
// import { IoMdMail } from "react-icons/io";

function Buttons({title}) {
  return (
    <>
      <Button className="bg-dark border border-dark text-light rounded-3">
        {/* <Badge pill className="bg-danger z-2 fs-6">
          <IoMdMail />
        </Badge> */}
        {title}
      </Button>
    </>
  );
}
export default Buttons;
// link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover