"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopic = ({ id, title, description }) => {
  console.log(title);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to Fetch");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action=""
      className="flex flex-col gap-y-4"
      // onSubmit={handleEdit}
    >
      <input
        // onChange={(e) => setNewTitle(e.target.value)}
        // value={newTitle}
        // defaultValue={title}
        type="text"
        placeholder="Topic Title"
        className="px-2 py-3 "
      />
      <input
        // onChange={(e) => setNewDescription(e.target.value)}
        // value={newDescription}
        type="text"
        placeholder="Topic Desc"
        className="px-2 py-3"
      />
      <button type="submit" className="px-4 py-2 bg-fuchsia-400 hover:bg-opacity-75">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopic;
