import { useContext } from "react";
import AppContext from "../AppContext";
import EditNode from "./EditNode";

const SideBar = () => {
  const { selectedNode } = useContext(AppContext);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="h-full border-l-2 border-l-[rgba(197,195,195,0.4)] border-t-2 border-t-[rgba(197,195,195,0.4)] border-solid">
      {selectedNode?.id ? (
        // Editing area if user has selected any node
        <EditNode />
      ) : (
        <div className="p-3">
          <div
            className="font-outfit w-[200px] shadow-md rounded-lg bg-white min-w-[200px] min-h-[50px] cursor-grab"
            draggable={true}
            onDragStart={(event) => onDragStart(event, "message")}
          >
            <div className="">
              <label
                htmlFor="text"
                className="bg-[#7ae9d9] font-bold text-black rounded-t-[5px] px-2 py-1 w-full text-[12px] block"
              >
                Add Message
              </label>
              <p className="text-black px-2 py-2 overflow-x-auto text-[11px]">
                Drag and Drop this to add a text message.
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
