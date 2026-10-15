'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';
import innerHeroBannerImage from "../../../public/assets/images/our-work-banner-image.png";

interface Project {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
}

interface ProjectDetailsClientProps {
  project: Project | null;
  relatedProjects: Project[];
}

const ProjectDetailsClient: React.FC<ProjectDetailsClientProps> = ({ project, relatedProjects }) => {
  if (!project) {
    return <div className="text-center py-5">Project not found</div>;
  }

  return (
    <div className='smartway-project-details'>
      <section className="inner-hero-sec-wrap">
        <div className='inner-hero-banner'>
          <Image src={innerHeroBannerImage} alt="Project Details Banner" className="w-100" width={1200} height={600} />
        </div>
        <div className='inner-hero-sec-top-text'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 inner-hero-sec-txt'>
                <h2 className='fw-semibold'>{project.title}</h2>
                <ul className='d-flex justify-content-center'>
                  <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                  <li><Link href="/projects" className='nav-list-link'>Projects</Link> / &nbsp; </li>
                  <li>{project.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-100">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='row mb-4'>
                <div className='col-12 col-lg-12'>
                  <div className='card card-xl __radius-tl-70 __radius-br-70 mb-4'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover img-h-400 w-100"
                      width={800}
                      height={400}
                    />
                  </div>
                </div>
              </div>
              <div className='project-content'>
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div className='row mt-5'>
              <div className='col-12'>
                <h3 className='heading-xxl mb-4'>Related Projects</h3>
              </div>
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject._id} className='col-md-4 __card-parent-hover-blue mb-4'>
                  
                    <div className='card card-xl __radius-tr-50 __radius-bl-50'>
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        width={400}
                        height={250}
                        className="w-100 object-cover img-h-250"
                      />
                    </div>
                    <div className='card card-xl __hover-blue __radius-tr-70 __radius-bl-70 mt-3'>
                      <div className='card-body card-pad-40'>
                        <h2 className='heading-xl mb-4'>{relatedProject.title}</h2>
                        <div className="d-inline-block">
                          <Link href={`/projects/${relatedProject.slug}`} className='btn btn-primary d-flex align-items-center'>
                            Learn more <i className="far fa-long-arrow-right font-18 ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="contact-sec-wrap home-sec-pattern-left overflow-hidden">
        {/* <div className="logo-bg-pattern-left">
          <Image src={logoBgPattern} alt="" className="w-100" />
        </div> */}
        <FormContentSection />
      </section>
    </div>
  );
};

export default ProjectDetailsClient;
