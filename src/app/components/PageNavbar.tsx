'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const PageNavbar = () => {
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('hsl(var(--p))');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='navbar bg-base-100 fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div style={{ color: `${textColor}` }} className='flex-1'>
        <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
          TCC Coding Club
        </Link>
      </div>
      <div className='flex-none'>
        <ul
          style={{ color: `${textColor}` }}
          className='menu menu-horizontal px-4'
        >
          <li>
            <Link href={'/join'}>Join</Link>
          </li>
          <li>
            <Link href={'/flyer'}>Expanded Flyer</Link>
          </li>
          <li>
            <Link
              href={'https://discord.com/invite/dxK5U9b6W7'}
              target='_blank'
              rel='noopener noreferrer'
            >
              Discord
            </Link>
          </li>
          <li>
            <Link href={'/resources'}>Resources</Link>
          </li>
          <li>
            <Link href={'/profiles'}>Club Leaders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageNavbar;
