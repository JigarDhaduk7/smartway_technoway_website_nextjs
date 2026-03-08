'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getData, getById } from '../../../lib/api';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';
import logoBgPattern from "../../../public/assets/images/logo-large-bg-patterns.svg";
import innerHeroBannerImage from "../../../public/assets/images/blog-categorie-banner-image.jpg";

interface Project {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
}

interface ProjectDetailsClientProps {
  slug: string;
}

const ProjectDetailsClient: React.FC<ProjectDetailsClientProps> = ({ slug }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectData = async () => {
      if (!slug) return;

      try {
        const projectResponse = await getById('projects', slug);
        setProject(projectResponse.data);

        const allProjectsResponse = await getData('projects');
        const publishedProjects = allProjectsResponse.data.filter((p: Project) => p.isPublished && p.slug !== slug);
        setRelatedProjects(publishedProjects.slice(0, 3));
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="placeholder-glow">
          <span className="placeholder col-12 mb-3" style={{ height: '400px' }}></span>
          <span className="placeholder col-8 mb-2"></span>
          <span className="placeholder col-12 mb-2"></span>
        </div>
      </div>
    );
  }

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
                <div key={relatedProject._id} className='col-md-4 mb-4'>
                  <Link href={`/projects/${relatedProject.slug}`}>
                    <div className='card card-xl __radius-tr-50 __radius-bl-50'>
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        width={400}
                        height={250}
                        className="w-100 object-cover img-h-250"
                      />
                    </div>
                    <h5 className='mt-3'>{relatedProject.title}</h5>
                  </Link>
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
