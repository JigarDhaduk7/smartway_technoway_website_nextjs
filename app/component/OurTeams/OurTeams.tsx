'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './OurTeams.scss';

interface Leader {
  _id: string;
  name: string;
  position: string;
  image: string;
}

const OurTeams: React.FC = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaders')
      .then(res => res.json())
      .then(data => setLeaders(data.data))
      .catch(err => console.error('Error fetching leaders:', err));
  }, []);

  return (
    <section className='our-success-teams-wrap'>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Visionary Leadership Guiding Every Innovation</h2>
          </div>
          <div className='col-lg-5 col-xl-5'>
            <p className="peragraph-style-1">
              Smartway Technoway thrives under the leadership of Mr. Khilan Ramani, a visionary entrepreneur known for redefining innovation across industries. His philosophy — “Keep Going, Keep Growing” — fuels every initiative under the Smartway umbrella.
            </p>
          </div>
        </div>

        <div className='row pb-100 pt-4 success-teams-container'>
          {leaders.map((leader) => (
            <div key={leader._id} className='col-md-6 col-lg-4 py-4'>
              <div className='success-teams-col-main' data-aos="fade-up">
                <div className='success-teams-inner'>
                  <div className='card card-xl card-gray __radius-tl-70 __radius-br-70 h-100'>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className="w-100 team-img-height object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className='team-info-wrap'>
                    <div className='team-info-inner'>
                      <h6 className='fw-semibold mb-1'>{leader.name}</h6>
                      <p className='mb-0'>{leader.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
