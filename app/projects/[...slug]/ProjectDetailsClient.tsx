'use client';

import React from 'react';
import { Mail } from 'lucide-react';

import type { Project } from '@/lib/types';
import { site } from '@/lib/site';
import PageHero from '../../component/ui/PageHero';
import { Reveal } from '../../component/ui/Reveal';
import Button from '../../component/ui/Button';
import SectionHeading from '../../component/ui/SectionHeading';
import ProjectCard from '../../component/ProjectCard/ProjectCard';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';

interface ProjectDetailsClientProps {
  project: Project | null;
  relatedProjects: Project[];
}

const ProjectDetailsClient: React.FC<ProjectDetailsClientProps> = ({ project, relatedProjects }) => {
  if (!project) {
    return (
      <section className="container-x py-48 text-center">
        <h1 className="font-display text-4xl font-semibold">Project not found</h1>
        <div className="mt-8 flex justify-center"><Button href="/projects" arrow>Browse all projects</Button></div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        title={project.title}
        eyebrow="Case Study"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: project.title }]}
        image={project.image}
        imageAlt={project.title}
      />

      <section className="relative pb-20 md:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <article className="prose-content" dangerouslySetInnerHTML={{ __html: project.content }} />
          </Reveal>
          <aside className="lg:col-span-4">
            <div className="glass sticky top-28 rounded-3xl p-7">
              <p className="eyebrow mb-4">Like what you see?</p>
              <h2 className="font-display text-2xl font-semibold">Let&apos;s build something similar for you.</h2>
              <p className="mt-3 text-sm text-muted">Tell us about your goals and we&apos;ll map out the right solution, timeline and team.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contactus" arrow className="w-full">Start a project</Button>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
                  <Mail className="size-4 text-cyan" /> {site.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading align="left" eyebrow="More Work" title="Related Projects" />
              <Button href="/projects" variant="ghost" arrow>All projects</Button>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map((relatedProject, i) => (
                <ProjectCard key={relatedProject._id} project={relatedProject} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FormContentSection />
    </>
  );
};

export default ProjectDetailsClient;
