import React from "react";

const EditTopic = () => {
  return (
    <form action="" className="flex flex-col gap-y-4">
      <input type="text" placeholder="Topic Title" className="px-2 py-3 " />
      <input type="text" placeholder="Topic Desc" className="px-2 py-3" />
      <button type="submit" className="px-4 py-2 bg-fuchsia-400 hover:bg-opacity-75">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopic;
