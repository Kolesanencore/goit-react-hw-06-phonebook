import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../Redux/contactsSlice';
import { getContacts } from '../../Redux/selectors';

import { nanoid } from 'nanoid';

import { Form, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isAlreadyInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number, id: nanoid() }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Name" type="text" name="name" required />
      <Input placeholder="Number" type="tel" name="number" required />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
