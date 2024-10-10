'use client';

import React from 'react';

import Image from 'next/image';
import CustomMenu from '@/components/CustomMenu';

const Header = () => {
  return (
    <div
      id='header'
      className='z-[1000] flex-[0_0_auto] bg-white flex h-20 w-full flex-row items-center px-4 md:pl-8 border-b border-borderGray shadow-md'
    >
      <a href='/' className='cursor-pointer'>
        <Image src='/images/logo.svg' width={60} height={50} alt='FakeDoor' />
      </a>

      <div className='flex flex-1 items-center justify-end gap-2'>
        <CustomMenu />
      </div>
    </div>
  );
};

export default Header;
