import React from 'react'

function HomePage() {
  return (
    <>
      <div className='main-container'>
        <div className='top-container'>
          <img className='home-image' src='/images/aeroplane_curiousEarthworm.jpg' alt='walkingimage' />
          {/* <div className='banner-contents'>
          <h1>10-Minute Walks</h1>
          <h3>Taking a few 10-minutes walks spread throughout the day every day makes a difference. Not only it is good for your physical health, it also positively impacts your mood and mental health.</h3>
          <button className='banner-btn'>View More</button>
          </div> */}
        </div>
        <div className='page-contents'>
          <h2>Make Creative Part of your Everday Life</h2>
          <p>In this buss of productivity, what happens to the creative mind and body? </p>
          <p>Ten minutes isn't a huge time commitment (that's the point!), but those minutes really add up over the course of the day. The physical health benefits of 30 minutes of walking each day are numerous! We get some fresh air, increased Vitamin D, regular walk also help to maintain bone density.</p>
          <ul>
            <li>Clearer, Sharper, Calmer Mind</li>
            <li>Aware of yourself &amp; surrounding</li>
            <li>Make Art</li>
          </ul>
        </div>

        

          <div className='art-journal'>
                <div className='card'>
                    <img className='session-image' src='/images/photo-1487956382158-bb926046304a.jpg' alt='walkingimage' />
                    <h3>Birds</h3>
                </div>
                <div className='card'>
                    <img className='session-image' src='/images/photo-1487956382158-bb926046304a.jpg' alt='walkingimage' />
                    <h3>Plants</h3>
                </div>
                <div className='card'>
                    <img className='session-image' src='/images/photo-1487956382158-bb926046304a.jpg' alt='walkingimage' />
                    <h3>Places</h3>
                </div>
                <div className='card'>
                    <img className='session-image' src='/images/photo-1487956382158-bb926046304a.jpg' alt='walkingimage' />
                    <h3>Walking Journal</h3>
                </div>
            </div>
       
        </div>
    </>
  )}

export default HomePage;
