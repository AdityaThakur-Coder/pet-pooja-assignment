import PropTypes from 'prop-types';

const TableContainer = ({ data = [], columns = [] }) => {
    if (!data.length || !columns.length) {
        return <p>No data available</p>; // Fallback for empty data or columns
    }

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex}>{row[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TableContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            key: PropTypes.string,
        })
    ),
};

export default TableContainer;
