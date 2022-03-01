import React from 'react';
import Contact from './components/Contact';

import './style.css';

// 1. populate the following array with the correct data
const contactInfo = [
  {
    id: 1,
    name: 'Emmanuel',
    email: 'emmanuel@email.com',
    phone: 92034902,
    isDeletable: true,
  },
  {
    id: 2,
    name: 'Johana',
    email: 'johana@email.com',
    phone: 552312354,
    isDeletable: false,
  },
  {
    id: 3,
    name: 'Lucas',
    email: 'lucas@email.com',
    phone: 234983499,
    isDeletable: true,
  },
  {
    id: 4,
    name: 'Marie',
    email: 'marie@email.com',
    phone: 238942384,
    isDeletable: false,
  },
  {
    id: 5,
    name: 'Pedro',
    email: 'pedro@email.com',
    phone: 934584875,
    isDeletable: true,
  },
];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>

      <div id="container">
        {contactInfo.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            isDeletable={contact.isDeletable}
          />
        ))}
      </div>
    </div>
  );
}
