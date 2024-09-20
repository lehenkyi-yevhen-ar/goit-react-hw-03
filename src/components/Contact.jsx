import { ImPacman } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css"

const Contact = ({ id, name, number, onDelete}) => {
  return (
    <>
      <div className={s.card}>
        <div className={s.info}>
          <div className={s.inInfo}>
            <ImPacman />
            <p>{name}</p>
          </div>
          <div className={s.inInfo}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <button type="button" className={s.btn}onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
