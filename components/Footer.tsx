import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-col  w-[90%] mx-auto mt-9'>
       <div className='flex justify-between items-center'>

          <div className='flex flex-col'>
            <Image
              src='/logo.svg'
              alt="footerImg"
              width={100}
              height={15}
              className='object-contain mb-2'
            />
            <p className='text-gray-400'>CarHub 2024 <br/> All right Reserved</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
            {footerLinks.map((item) => (
               <>
                <div className='flex flex-col'>
                  <h3 className='font-semibold text-gray-800 mb-3'>{item.title}</h3>
                  {item.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className='text-gray-400 mb-2'
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>  
              </>
            ))}
          </div>
       </div>
       <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100  py-10'>
          <p>@2023 CarHub. All rights reserved</p>

          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Privacy & Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms & Condition
            </Link>
          </div>
        </div>
    </footer>
  )
}
