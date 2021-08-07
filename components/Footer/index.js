import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 px-32 gap-y-10 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>Community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>This a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>evertcode</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>Host</h5>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>Support</h5>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </div>
    </div>
  )
}

export default Footer
