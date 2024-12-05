
import PropTypes from 'prop-types';

const TableHeader = ({ columns, sortConfig, onSort, styles }) => {
    return (
        <thead style={{ backgroundColor: styles?.headerBgColor }}>
            <tr>
                {columns.map((column) => (
                    <th
                        key={column.dataKey}
                        style={{
                            color: styles?.headerFontColor,
                            fontSize: styles?.headerFontSize,
                        }}
                        onClick={() => onSort(column.dataKey)}
                    >
                        {column.title}
                        {sortConfig?.key === column.dataKey && (
                            <span>
                                {sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}
                            </span>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            dataKey: PropTypes.string.isRequired,
            sortable: PropTypes.bool,
            filterable: PropTypes.bool,
        })
    ).isRequired,
    sortConfig: PropTypes.shape({
        key: PropTypes.string,
        direction: PropTypes.oneOf(['asc', 'desc', null]),
    }),
    onSort: PropTypes.func.isRequired,
    styles: PropTypes.shape({
        headerBgColor: PropTypes.string,
        headerFontColor: PropTypes.string,
        headerFontSize: PropTypes.string,
    }),
};

TableHeader.defaultProps = {
    sortConfig: { key: null, direction: null },
    styles: {
        headerBgColor: '#fff',
        headerFontColor: '#000',
        headerFontSize: '16px',
    },
};

export default TableHeader;
