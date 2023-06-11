import { InputFilter } from './Filter.styled';
import { useSelector } from 'react-redux';
import { addValue } from 'redux/sliceFilter';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(addValue(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <InputFilter type="text" value={filterValue} onChange={changeFilter} />
    </label>
  );
};
