import PropTypes from 'prop-types';
import { InputFilter } from "./Filter.styled"
import { useSelector } from 'react-redux';

export const Filter = ({ onChange }) => {
    const filterValue = useSelector(state => state.filter);
    return (
          <label>Find contacts by name
              <InputFilter type="text" value={filterValue} onChange={onChange}/>
        </label>
    )
} 

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
};