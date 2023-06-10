import PropTypes from 'prop-types';
import {InputFilter} from "./Filter.styled"

export const Filter = ({ value, onChange }) => {
    return (
          <label>Find contacts by name
              <InputFilter type="text" value={value} onChange={onChange}/>
        </label>
    )
} 

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};