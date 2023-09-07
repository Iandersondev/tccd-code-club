import Link from 'next/link';
import React from 'react';

const PageHome = () => {
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>How We Began</h1>
          <p className='py-2'>
            It all started with a group of classmates that wanted to work
            together and help each other.
          </p>
          <p className='py-2'>
            Last summer we made a Discord server to help each other out in our
            Python class, and that turned out to be a lot of fun, so we decided
            to make a club.
          </p>
          <Link href='/join' className='btn btn-primary'>
            Join The Club
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
