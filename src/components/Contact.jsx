import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0cc60f42-6d2a-428d-b35c-a968ca8dfe67" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or - 
                <a href="http://mailto:balogunkehinde3@gmail.com"> Click this to send me an email</a>
                </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact