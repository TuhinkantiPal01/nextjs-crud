import useTopics from "@/Hooks/getTopics";
import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import DeleteTopic from "./DeleteTopic";

const TopicList = async () => {
  const { topics } = await useTopics();
  // console.log(topics);

  return (
    <div>
      {topics?.map((topic) => (
        <div key={topic._id} className="flex justify-between px-4 py-5 bg-teal-300 mt-10">
          <div>
            <h2>{topic.title}</h2>
            <div>{topic.description}</div>
            <h1>{topic._id}</h1>
          </div>
          <div className="flex items-center gap-x-5">
            <DeleteTopic id={topic._id}/>
            <Link href={`/editTopic/${topic?._id}`}>
              <HiPencilAlt size={25} color="#313866" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
