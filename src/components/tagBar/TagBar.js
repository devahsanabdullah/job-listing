import React from "react";

export default function TagBar(props) {
  const funclear = (index) => {
    let data = props.stateData.filter((e, i) => i !== index);
    // let data2 = props.deepfilter.filter((e,i)=>i !== i);
    // let data3 = props.againfilter.filter((e,i)=>i !== i)
    props.setpropsdata(data);
    props.setDeepFilter([])
    
  };
  return (
    <div className={`tagbar w-4/5  flex  justify-between bg-[#fff] rounded px-8 py-6 mx-auto mt-[-2rem] mb-0 `}>
      <div className="flex flex-wrap ">
        {props.stateData &&
          props.stateData.filter((el) => el).map((e, index) => {
                return (
                  <div key={index} className="mr-2 mt-5">
                    <span className="bg-tag text-cardborder p-[2px] md:p-[11px] md:pl-2  rounded-l-sm align-middle  text-lg font-bold  ">
                      {e}
                    </span>
                    <span
                      onClick={() => funclear(index)}
                      className="text-[#fff]   p-[3px] md:p-3  bg-cardborder rounded-r-sm hover:bg-hoverclose  cursor-pointer "
                    >
                      <i className="fa-solid fa-xmark align-middle "></i>
                    </span>
                  </div>
                );
            })}
      </div>
      <div
        onClick={() =>
          props.setpropsdata(props.stateData.filter((e) => e !== e))
        }
        className="text-cardborder text-lg font-bold hover:underline hover:underline-offset-4 cursor-pointer hover:decoration-2 "
      >
        Clear
      </div>
    </div>
  );
}
