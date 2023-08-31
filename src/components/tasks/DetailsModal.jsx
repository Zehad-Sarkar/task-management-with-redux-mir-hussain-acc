import { useSelector } from "react-redux";
import Modal from "../ui/Modal/Modal";

const DetailsModal = ({ isOpen, setIsOpen, id }) => {
  const {tasks} = useSelector((state) => state.tasks);
  const task = tasks.find((item) => item.id === id);
  console.log(task);
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
        <h2>hello modal details</h2>
        <h2>{task?.title}</h2>
        <h2>{task?.description}</h2>
      </Modal>
    </div>
  );
};

export default DetailsModal;
