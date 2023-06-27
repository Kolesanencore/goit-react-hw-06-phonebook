import { useDispatch } from 'react-redux';
import { updateFilterValue } from 'Redux/filterSlice';

import { Input } from '../ContactList/ContactList.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search contacts"
      onChange={e => dispatch(updateFilterValue(e.target.value))}
    />
  );
};

export default Filter;
