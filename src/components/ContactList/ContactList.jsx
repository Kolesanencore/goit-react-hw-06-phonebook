import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../Redux/contactsSlice';
import { getContacts, getFilter } from '../../Redux/selectors';

import PropTypes from 'prop-types';

import { RiDeleteBinLine } from 'react-icons/ri';

import { Button } from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const existingContacts = (() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  })();

  return (
    <ul>
      {existingContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
          <Button onClick={() => dispatch(removeContact(contact.id))}>
            <RiDeleteBinLine />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
