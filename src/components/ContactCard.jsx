import contactBase from "../assets/img/contact-base.webp";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdModeEdit, MdDelete } from "react-icons/md";
import '../styles/card.css';

export const ContactCard = ({contact}) => (
  <div className="card mb-3 p-3">
    <div className="row g-0">
      <div className="col-md-3">
        <img className="rounded-circle" src={contactBase} />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h5 className="card-title mb-4">{contact.fullName}</h5>
          <p className="card-text">
            <FaLocationDot className="me-2" />
            {contact.location}
          </p>
          <p className="card-text">
            <FaPhone className="me-2"/>
            {contact.phone}
          </p>
          <p className="card-text">
            <MdEmail className="me-2"/>
            {contact.email}
          </p>
        </div>
      </div>

      <div className="col-md-2 text-end">
        <button type="button" className="btn">
          <MdModeEdit className="icon" />
        </button>

        <button type="button" className="btn">
          <MdDelete className="delete-icon icon "/>
        </button>
      </div>
    </div>
  </div>
);
