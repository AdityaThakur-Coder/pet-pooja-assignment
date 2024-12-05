import PropTypes from 'prop-types';

const TableContainer = ({ data, columns, defaultStyles }) => {
    // Filtered data example
    const filteredData = data.filter((item) => item.isActive);

    return (
        <div style={defaultStyles}>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.accessor}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={index}>
                            {columns.map((col) => (
                                <td key={col.accessor}>{row[col.accessor]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Prop validation
TableContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            isActive: PropTypes.bool.isRequired,
            // Add other fields that exist in your data objects
        })
    ).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            accessor: PropTypes.string.isRequired,
        })
    ).isRequired,
    defaultStyles: PropTypes.object, // Optional; styling object
};

// Default props
TableContainer.defaultProps = {
    defaultStyles: {
        width: '100%',
        border: '1px solid #ccc',
    },
};

export default TableContainer;
