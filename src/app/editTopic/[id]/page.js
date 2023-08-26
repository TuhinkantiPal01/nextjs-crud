import EditTopic from "@/app/component/EditTopic";
import React from "react";

const getTopicById = async(id) => {
  
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store"
    })
    if (!res.ok) {
      throw new Error("Error fetching")
    }

    return res.json()
  } catch (error) {
    console.log(error);
  }
}


const EditTopicPage =async({params}) => {
  const {id} = params;
  console.log(`"id":${id}`);

  const topic = await getTopicById(id);
  console.log(topic.topic);
  const {title,description} = topic?.topic;
  return (
    <div className="bg-emerald-400 px-4 py-5">
      <h1 className="text-center mb-4 text-3xl">Specific Item Edit Here</h1>
      <EditTopic id={id} title={title} description={description}/>
    </div>
  );
};

export default EditTopicPage;
