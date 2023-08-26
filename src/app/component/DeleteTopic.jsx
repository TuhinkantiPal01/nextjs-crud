"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const DeleteTopic = ({ id }) => {

  const router = useRouter();


  const handleDeleteTopic = async (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            router.refresh();
          } else {
            throw new Error("Failed to delete");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });

    try {
    } catch (error) {}

  };

  return (
    <>
      <button>
        <HiOutlineTrash onClick={() => handleDeleteTopic(id)} size={25} color="#F24C3D" />
      </button>
    </>
  );
};

export default DeleteTopic;
