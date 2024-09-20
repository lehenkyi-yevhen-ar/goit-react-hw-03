import { useEffect, useState } from "react"
import ContactList from "./components/ContactList"
import SearchBox from "./components/SearchBox"
import ContactForm from "./components/ContactForm"

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts =
      window.localStorage.getItem("contacts")
    if (savedContacts) {
      return JSON.parse(savedContacts)
    }
    return [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ]
  })

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      newContact,
    ])
  }

  const [filter, setFilter] = useState("")

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase())
  )

  const handleDeleteContact = (idToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter(
        (contact) => contact.id !== idToDelete
      )
    )
  }

  useEffect(() => {
    window.localStorage.setItem(
      "contacts",
      JSON.stringify(contacts)
    )
  }, [contacts])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAddContact={handleAddContact}
      />
      <SearchBox
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      ) : (
        <h3>There is nothing to show :(</h3>
      )}
    </div>
  )
}

export default App
