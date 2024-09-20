import Contact from "./Contact";
import s from "./ContactList.module.css"

const ContactList = ({contacts, onDelete}) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              key={contact.id}
              onDelete={onDelete}
            />
          </li>
))}
      </ul>
    </div>
  )
}

export default ContactList;
