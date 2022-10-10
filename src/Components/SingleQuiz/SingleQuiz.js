import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";

const SingleQuiz = ({ quest }) => {
  //   console.log(quest);
  const { options } = quest;
  //   console.log(options);
  const toast = (value) => {
    console.log(value);
  };
  return (
    <div className="border rounded font-bold bg-slate-200 my-6 mx-24 text-indigo-800">
      <div className="text-center mt-4 text-2xl">
      <div className="flex justify-end mr-4">
          <EyeIcon title="See correct answer" className="h-6 w-6 text-slate-800" />
        </div>
        <h1>{quest.question}</h1>
       
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <div
          onClick={() => toast(quest.options)}
          className="border rounded bg-gray-300 overflow-auto h-20 p-2"
        >
          <input type="radio" id="" name="fav_language" value="" />
          <label className="ml-1" for="html">
            {quest.options[0]}
          </label>
        </div>
        <div className="border rounded bg-gray-300 overflow-auto h-20 p-2">
          <input type="radio" id="" name="fav_language" value="" />
          <label className="ml-1" for="html">
            {quest.options[1]}
          </label>
        </div>
        <div className="border rounded bg-gray-300 overflow-auto h-20 p-2">
          <input type="radio" id="" name="fav_language" value="" />
          <label className="ml-1" for="html">
            {quest.options[2]}
          </label>
        </div>
        <div className="border rounded bg-gray-300 overflow-auto h-20 p-2">
          <input type="radio" id="" name="fav_language" value="" />
          <label className="ml-1" for="html">
            {quest.options[3]}
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;