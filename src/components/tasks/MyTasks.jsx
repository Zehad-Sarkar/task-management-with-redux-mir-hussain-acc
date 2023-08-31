import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, userTask } from "../../redux/features/tasks/tasksSlice";
import DetailsModal from "./DetailsModal";

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);
  const { tasks, userSpecificTask } = useSelector((state) => state.tasks);
  const { name: userName } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleModal = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(userTask(userName));
  }, [userName, dispatch, tasks]);

  return (
    <div>
      <DetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between p-3 rounded-md bg-secondary/10"
          >
            <h1>{item.title}</h1>

            <div className="flex gap-3">
              <button
                onClick={() => handleModal(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateTask({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
