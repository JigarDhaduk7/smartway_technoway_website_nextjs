import React from 'react';
import './CompanySuccessHighlights.scss';

const CompanySuccessHighlights: React.FC = () => (

  <section className='company-success-highlights-wrap'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-lg-3 py-4'>
          <div className='text-center' data-aos="fade-up">
            <h2 className='fw-bold text-secondary'>500+</h2>
            <h6>Successful Projects</h6>
          </div>
        </div>
        <div className='col-md-6 col-lg-3 py-4'>
          <div className='text-center' data-aos="fade-up">
            <h2 className='fw-bold text-secondary'>50,3K</h2>
            <h6>Customer happy</h6>
          </div>
        </div>
        <div className='col-md-6 col-lg-3 py-4'>
          <div className='text-center' data-aos="fade-up">
            <h2 className='fw-bold text-secondary'>99%</h2>
            <h6>Client Satisfaction</h6>
          </div>
        </div>
        <div className='col-md-6 col-lg-3 py-4'>
          <div className='text-center' data-aos="fade-up">
            <h2 className='fw-bold text-secondary'>860+</h2>
            <h6>Industries Served</h6>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default CompanySuccessHighlights;
