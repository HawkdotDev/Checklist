/* eslint-disable react/prop-types */
import edit from "../assets/SVGs/edit1.svg";
import paint from "../assets/SVGs/paint2.svg";

const Cards = ({ id, taskName, description, bgColor, discColor, setIsOpen, setTaskId }) => {
  const currentBG = bgColor ? bgColor : "#FFFFFF"; //"#99ff99";
  const currentDiscBG = discColor ? discColor : "#FEF08A"; //"#99ff99";

  function handlePopup(taskId) {
    setTaskId(taskId);
    setIsOpen("visible");
    console.log(taskId);
  }
  return (
    <div
      style={{ backgroundColor: currentBG }}
      className="w-[15%] h-[25%] rounded-xl text-black p-2 m-1  border-black border-[1px]"
    >
      <div className="flex justify-between">
        <h1>{taskName ? taskName : "New Task"}</h1>

        <div className="flex w-[32.5%] justify-around">
          <button className="bg-pink-400 rounded-full w-[40%] flex justify-center items-center mb-1  border-black border-[1px]">
            <img src={paint} alt="Logo" />
          </button>
          <button
            onClick={() => handlePopup(id)}
            className="bg-green-400 rounded-full w-[40%] flex justify-center items-center mb-1  border-black border-[1px]"
          >
            <img src={edit} alt="Logo" />
          </button>
        </div>
      </div>

      <h1
        style={{ backgroundColor: currentDiscBG }}
        className="flex justify-center items-center h-[80%] rounded-b-xl border-black border-[1px]"
      >
        {description ? description : "Description"}
      </h1>
    </div>
  );
};

export default Cards;
