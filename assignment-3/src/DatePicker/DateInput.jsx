
import PropTypes from 'prop-types';

const DateInput = ({ label, value, onChange, styles }) => (
    <label>
        {label}
        <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={styles?.dateInput}
        />
    </label>
);

DateInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.shape({
        dateInput: PropTypes.object,
    }),
};

DateInput.defaultProps = {
    styles: {},
};

export default DateInput;
