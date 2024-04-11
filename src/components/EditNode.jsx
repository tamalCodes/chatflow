import { useContext } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import AppContext from "../AppContext";

const EditNode = () => {
  const { selectedNode, setSelectedNode } = useContext(AppContext);

  const handleInputChange = (event) => {
    setSelectedNode({
      ...selectedNode,
      data: {
        label: event.target.value,
      },
    });
  };

  return (
    <div className="p-2">
      <div className=" flex">
        <button className="" onClick={() => setSelectedNode({})}>
          <MdOutlineArrowBack />
        </button>
        <div className="mx-auto font-semibold text-xl">Edit Message</div>
      </div>
      <div className="flex w-full mt-1">
        <textarea
          rows={4}
          type="text"
          className="form-control mt-3 max-w-[97%]"
          value={
            selectedNode?.data?.label === "Click me to change the text"
              ? ""
              : selectedNode?.data?.label
          }
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default EditNode;
