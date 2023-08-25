"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";


const AddTopicPage = () => {
  
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);

  const addTopicHandler = (e) => {
    e.preventDefault();
    const newTopic = {
      title,
      description,
    };

    fetch("http://localhost:3000/api/topics", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTopic),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.message === "Topic Created") {
          setTitle("");
          setDescription("");

          Swal.fire({
            icon: 'success',
            title: 'Topic Created',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  };

  return (
    <div className="px-4 py-5 bg-teal-300 mt-10">
      <h1 className="text-center text-3xl font-semibold mb-5">Add Topic Here</h1>
      <form action="" className="flex flex-col gap-y-4">
        <input
          type="text"
          placeholder="Topic Title"
          className="px-2 py-3 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Topic Desc"
          className="px-2 py-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addTopicHandler}
          type="submit"
          className="px-4 py-2 bg-fuchsia-400 hover:bg-opacity-75"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopicPage;
