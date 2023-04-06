import React , {useReducer} from "react";
const reducer = (state, { type, payload }) => {
  // switch (type) {
  //   case "add":
  //     return {
  //       ...state,
  //       Current: `${Current} + ${Prev}`,
  //     };
  //   case "result":
  //     return {
  //       ...state,
  //       Current: `${Current} - ${Prev}`,
  //     };
  // }
};
const Sweeper = () => {
  const [{  Prev, Current }, dispatch] = useReducer(reducer, {Current:0 , Prev:0});
  return (
    <div className="flex justify-center h-screen items-center bg-slate-100">
      <div className="container  h-fit py-0.5 px-1 bg-gradient-to-r from-cyan-500 to-blue-400 w-80">
        <div className="bg-black text-xl tracking-wider font-bold my-1 p-3 rounded-lg text-slate-50 text-right">
          {Current} , {Prev}
        </div>
        <div className="grid grid-cols-4  gap-1">
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center col-span-2">
            AC
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            DEL
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            /
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            1
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            2
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            3
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            *
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            4
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            5
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            6
          </button>
          <button onClick={dispatch({type:'add'})} className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            +
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            7
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            8
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            9
          </button>
          <button onClick={()=> dispatch({type:'result'})} className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            -
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            .
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center">
            0
          </button>
          <button className="bg-indigo-300 font-bold text-2xl hover:bg-indigo-200 transition duration-150 h-16 text-center col-span-2">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sweeper;
