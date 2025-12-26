import React from 'react';
import Image from 'next/image';
import './FrequentlyAskedQuestion.scss';

const FrequentlyAskedQuestion: React.FC = () => (

  <div className='container'>
    <div className='row'>
      <div className='col-lg-6'>
        <h2 className="heading-xxxl mb-3" data-aos="fade-up">Frequently Asked Questions</h2>
        <p className="peragraph-style-1" data-aos="fade-up">When we talk to clients about our IT services for their company, a few of the same questions come up.</p>
        <div>
          <div className='col-12'>
            <div className="accordion accordion-card accordion-gray-card" id="DefaultAccordionsWrap">
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#defaultaccordion1" aria-expanded="true" aria-controls="defaultaccordion1"> What services do you offer? </button>
                </h2>
                <div id="defaultaccordion1" className="accordion-collapse collapse show" data-bs-parent="#DefaultAccordionsWrap">
                  <div className="accordion-body">
                    <p className='mb-2'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#defaultaccordion2" aria-expanded="false" aria-controls="defaultaccordion2"> How long does it take for you to complete a project? </button>
                </h2>
                <div id="defaultaccordion2" className="accordion-collapse collapse" data-bs-parent="#DefaultAccordionsWrap">
                  <div className="accordion-body">
                    <p className='mb-2'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#defaultaccordion3" aria-expanded="false" aria-controls="defaultaccordion3"> How much does it cost to work with your agency? </button>
                </h2>
                <div id="defaultaccordion3" className="accordion-collapse collapse" data-bs-parent="#DefaultAccordionsWrap">
                  <div className="accordion-body">
                    <p className='mb-2'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover</p>
                    <p className='mb-2'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='card card-xxxl __radius-tl-150 __radius-br-150' data-aos="fade-up">
          <Image src="/assets/images/faq-image.jpg" alt="FAQ" className="w-100 img-h-500 object-cover" width={600} height={500} />
        </div>
      </div>
    </div>
  </div>

);

export default FrequentlyAskedQuestion;