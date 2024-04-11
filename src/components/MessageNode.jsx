import { BiMessageRoundedDetail } from "react-icons/bi";
import { Handle, Position } from "reactflow";

const MessageNode = ({ data }) => {
  const { label } = data;
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className="min-w-[300px] max-w-[500px] min-h-[100px] shadow-[0_2px_7px_rgba(0,0,0,0.2)] rounded-lg border-[none] bg-white">
        <p className="title bg-[#7ae9d9] flex items-center gap-2 text-md rounded-t-md font-outfit font-semibold px-2 py-1">
          <BiMessageRoundedDetail /> Send Message
        </p>
        <pre className="font-outfit flex-wrap text-wrap text-sm px-2 py-2 mb-0">
          {label}
        </pre>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
};

export default MessageNode;
