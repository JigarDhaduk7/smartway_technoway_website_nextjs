import React from 'react';
import Image from 'next/image';
import './OurTeams.scss';

const OurTeams: React.FC = () => (

  <section className='our-success-teams-wrap'>
    <div className='container'>
      <div className='row align-items-center justify-content-between' data-aos="fade-up">
        <div className='col-lg-7 col-xl-6'>
          <h2 className="heading-xxxl mb-3">The Team Behind Your Success</h2>
        </div>
        <div className='col-lg-5 col-xl-4'>
          <p className="peragraph-style-1">Our team of dedicated IT professionals brings years of expertise, innovation, and passion to every project. From strategists and developers to cybersecurity specialists</p>
        </div>
      </div>
      <div className='row pb-100 pt-4'>
        <div className='col-md-6 col-lg-4 py-4'>
          <div className='success-teams-col-main' data-aos="fade-up">
            <div className='success-teams-inner'>
              <div className='card card-xl card-gray __hover-blue __radius-tl-70 __radius-br-70 h-100'>
                <Image src="/assets/images/our-team-member-1.jpg" alt="Max James" className="w-100 team-img-height object-cover" width={400} height={300} />
              </div>
              <div className='team-info-wrap'>
                <div className='team-info-inner'>
                  <h6 className='fw-semibold mb-1'>Max James</h6>
                  <p className='mb-0'>Chief Technology Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4 py-4'>
          <div className='success-teams-col-main' data-aos="fade-up">
            <div className='success-teams-inner'>
              <div className='card card-xl card-gray __hover-blue __radius-tl-70 __radius-br-70 h-100'>
                <Image src="/assets/images/our-team-member-2.jpg" alt="Maria Bailey" className="w-100 team-img-height object-cover" width={400} height={300} />
              </div>
              <div className='team-info-wrap'>
                <div className='team-info-inner'>
                  <h6 className='fw-semibold mb-1'>Maria Bailey</h6>
                  <p className='mb-0'>Chief Technology Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4 py-4'>
          <div className='success-teams-col-main' data-aos="fade-up">
            <div className='success-teams-inner'>
              <div className='card card-xl card-gray __hover-blue __radius-tl-70 __radius-br-70 h-100'>
                <Image src="/assets/images/our-team-member-3.jpg" alt="Lisa Hunter" className="w-100 team-img-height object-cover" width={400} height={300} />
              </div>
              <div className='team-info-wrap'>
                <div className='team-info-inner'>
                  <h6 className='fw-semibold mb-1'>Lisa Hunter</h6>
                  <p className='mb-0'>Chief Technology Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default OurTeams;