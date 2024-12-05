
import PropTypes from 'prop-types';

const TableBody = ({ data, columns, styles }) => {
    return (
        <tbody style={{ backgroundColor: styles.bodyBgColor }}>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((col) => (
                        <td
                            key={col.accessor}
                            style={{
                                color: styles.bodyFontColor,
                                fontSize: styles.bodyFontSize,
                            }}
                        >
                            {row[col.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

// Define prop-types
TableBody.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            // Define the properties in your data object
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            isActive: PropTypes.bool,
            // Add any other expected fields in your data objects
        })
    ).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            accessor: PropTypes.string.isRequired,
        })
    ).isRequired,
    styles: PropTypes.shape({
        bodyBgColor: PropTypes.string,
        bodyFontColor: PropTypes.string,
        bodyFontSize: PropTypes.string,
    }).isRequired,
};

export default TableBody;
