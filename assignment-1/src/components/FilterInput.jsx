import PropTypes from 'prop-types';

const FilterInput = ({ columnKey, onFilterChange }) => {
    const handleInputChange = (event) => {
        onFilterChange(columnKey, event.target.value);
    };

    return (
        <input
            type="text"
            placeholder={`Filter by ${columnKey}`}
            onChange={handleInputChange}
        />
    );
};

// Define prop-types
FilterInput.propTypes = {
    columnKey: PropTypes.string.isRequired, // The key representing the column being filtered
    onFilterChange: PropTypes.func.isRequired, // Callback to handle filter changes
};

export default FilterInput;
