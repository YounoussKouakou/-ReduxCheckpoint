import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/taskSlice';
import { useState } from 'react';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: desc }));
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-sm p-4 rounded-xl mb-3 hover:shadow-md transition">

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
          className="w-5 h-5"
        />
        {isEditing ? (
          <input
            className="border p-1 rounded"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <span className={task.isDone ? 'line-through text-gray-400' : ''}>
            {task.description}
          </span>
        )}
      </div>

      <div>
        {isEditing ? (
          <button
            className="text-green-500 hover:underline text-sm"
            onClick={handleEdit}
          >
            Sauvegarder
          </button>
        ) : (
          <button
            className="text-blue-500 hover:underline text-sm"
            onClick={() => setIsEditing(true)}
          >
            Modifier
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
