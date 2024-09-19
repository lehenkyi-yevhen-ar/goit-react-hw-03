import { ImPacman } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css"

const Contact = ({ name, number }) => {
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
        <button type="button" className={s.btn}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
