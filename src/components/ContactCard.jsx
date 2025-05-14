import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdModeEdit, MdDelete } from "react-icons/md";
import '../styles/card.css';

export const ContactCard = () => (
  <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-3">
        <img className="rounded-circle" src={rigoImageUrl} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Name and lastname</h5>
          <p className="card-text">
            <FaLocationDot />
            Location
          </p>
          <p className="card-text">
            <FaPhone />
            Phone
          </p>
          <p className="card-text">
            <MdEmail />
            E-mail
          </p>
        </div>
      </div>

      <div className="col-md-1 text-end">
        <button type="button" className="btn">
          <MdModeEdit />
        </button>

        <button type="button" className="btn">
          <MdDelete className="delete-icon"/>
        </button>
      </div>
    </div>
  </div>
);
