import React from 'react'
 import { PaperClipIcon } from '@heroicons/react/solid'
const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
          
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">About</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Know Who I'M.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Vishal</dd>
          </div>
         
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">VishalKumar3474@gmail.com</dd>
          </div>
        
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Hi Everyone, I am Vishal from Khatima,Uttarakhand, India.
“I am CodeYogi Student, CodeYogi Offers Me 6 Months Long Software Engineering Program”
            </dd>
          </div>
        
        </dl>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
