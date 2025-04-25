import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/taskSlice';
import "./index.css"

function App() {
  const dispatch = useDispatch();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-muted rounded-2xl shadow-lg">
    <h1 className="text-3xl font-bold text-primary text-center mb-6">📝 Ma ToDo App</h1>
  
      <AddTask />

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          Tous
        </button>
        <button
          onClick={() => dispatch(setFilter('done'))}
          className="px-3 py-1 rounded bg-green-200 hover:bg-green-300"
        >
          Faits
        </button>
        <button
          onClick={() => dispatch(setFilter('not_done'))}
          className="px-3 py-1 rounded bg-red-200 hover:bg-red-300"
        >
          Non faits
        </button>
      </div>

      <ListTask />
    </div>
  );
}

export default App;
