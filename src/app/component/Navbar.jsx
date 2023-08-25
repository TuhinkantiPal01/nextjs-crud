import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-blue-300 p-4 flex justify-between'>
          <Link href={"/"}>MongoDB Crud</Link> 
          <Link href={"/addTopic"}><button className='px-3 py-2 bg-slate-200'>Add Topic</button></Link>
        </nav>
    );
};

export default Navbar;