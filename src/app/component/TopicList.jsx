import Link from 'next/link';
import React from 'react';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';

const TopicList = () => {
    return (
        <div className="flex justify-between px-4 py-5 bg-teal-300 mt-10">
      <div>
        <h2>Topic Title</h2>
        <div>Topic Desc</div>
      </div>
      <div className="flex items-center gap-x-5">
        <button><HiOutlineTrash size={25} color="#F24C3D"/></button>
        <Link href={"/editTopic/123"}><HiPencilAlt size={25} color="#313866"/></Link>
      </div>
    </div>
    );
};

export default TopicList;