import Link from "next/link";
import React from "react";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

const AddTopicPage = () => {
  return (
    <div className="px-4 py-5 bg-teal-300 mt-10">
      <h1 className="text-center text-3xl font-semibold mb-5">Add Topic Here</h1>
      <form action="" className="flex flex-col gap-y-4">
        <input type="text" placeholder="Topic Title" className="px-2 py-3 " />
        <input type="text" placeholder="Topic Desc" className="px-2 py-3" />
        <button type="submit" className="px-4 py-2 bg-fuchsia-400 hover:bg-opacity-75">
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopicPage;
