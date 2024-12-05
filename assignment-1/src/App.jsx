import TableContainer from './components/TableContainer';

const App = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
    ];

    const columns = [
        { header: 'ID', key: 'id' },
        { header: 'Name', key: 'name' },
        { header: 'Age', key: 'age' },
    ];

    return (
        <div>
            <h1>Custom Table Component</h1>
            <TableContainer data={data} columns={columns} />
        </div>
    );
};

export default App;
