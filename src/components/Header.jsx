import React from 'react'

export default function Header() {
  return (
    <div>
      <ul className='flex gap-2
       bg-yellow-500 text-white px-3'>
        <li className='py-5 px-2 hover:bg-yellow-800'><a href="#">Home</a></li>
        <li className='py-5 px-2 hover:bg-yellow-800'><a href="#">about</a></li>
        <li className='py-5 px-2 hover:bg-yellow-800'><a href="#">Notebook</a></li>
      </ul>
    </div>
  );
}
