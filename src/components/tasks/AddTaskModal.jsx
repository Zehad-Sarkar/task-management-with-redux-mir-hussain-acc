import { useForm } from "react-hook-form";
import Modal from "../ui/Modal/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    handleCancel();
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="P-Hero">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="title">Title</label>
            <input type="text" {...register("title")} />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="description">Description</label>
            <input type="text" {...register("description")} />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="deadline">Deadline</label>
            <input type="date" {...register("deadline")} />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="name">Assign To</label>
            <select name="priority" id="priority" {...register("assignedTo")}>
              <option value="" defaultValue="Select One">
                Select One
              </option>
              <option value="Zehad Sarkar">Zehad Sarkar</option>
              <option value="Md Robiul Sarkar">Md Robiul Sarkar</option>
              <option value="Robiul Sarkar">Robiul Sarkar</option>
              <option value="Robiul Islam">Robiul Islam</option>
              <option value="Halim Akanda">Halim Akanda</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="priority">Priority</label>
            <select name="priority" id="priority" {...register("priority")}>
              <option value="" defaultValue="select one">
                Select One
              </option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex items-center justify-end">
            <button onClick={() => handleCancel()} className="btn btn-danger">
              Cancel
            </button>
            <button type="submit" className="ml-4 btn-primary btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
