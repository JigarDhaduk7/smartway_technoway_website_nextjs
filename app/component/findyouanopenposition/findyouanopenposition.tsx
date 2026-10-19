"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, Clock, MapPin, Users, Send } from "lucide-react";
import { getData } from "../../../lib/api";
import type { Job } from "@/lib/types";
import Accordion from "../ui/Accordion";
import SectionHeading from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import Button from "../ui/Button";
import { scrollToId } from "../ui/SmoothScroll";

const bullet = 'relative pl-6 before:absolute before:left-1 before:top-[0.6em] before:size-2 before:rotate-45 before:rounded-[2px] before:bg-gradient-to-br before:from-brand-bright before:to-cyan';

const Meta = ({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-normal text-muted">
    <Icon className="size-3.5 text-cyan" aria-hidden />
    <span className="sr-only">{label}: </span>
    {value}
  </span>
);

const FindYouAnOpenPosition: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getData("jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section id="SeeCurrentOpening" className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Open Roles"
          title="Let's find you an open position."
          description="Explore a curated list of opportunities tailored to your skills, interests, and career goals—helping you move confidently toward your next big role."
        />
        <Reveal className="mt-14">
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => <div key={i} className="h-20 animate-pulse rounded-2xl bg-white/5" />)}
            </div>
          ) : jobs.length === 0 ? (
            <p className="rounded-2xl border border-line p-8 text-center text-muted">No open positions right now — send us your resume below and we&apos;ll keep you in mind.</p>
          ) : (
            <Accordion
              items={jobs.map((job) => ({
                key: job._id,
                title: (
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="block text-fg">{job.title}</span>
                      <span className="mt-1 flex items-center gap-1.5 text-sm font-normal text-muted">
                        <MapPin className="size-3.5" aria-hidden /> {job.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <Meta icon={Briefcase} label="Job Type" value={job.jobType} />
                      <Meta icon={Clock} label="Experience" value={job.experience} />
                      <Meta icon={Users} label="No. Of Opening" value={`${job.openings} opening${job.openings === 1 ? '' : 's'}`} />
                    </div>
                  </div>
                ),
                content: (
                  <div className="border-t border-line pt-5">
                    <p className="mb-6">{job.description}</p>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-display text-lg font-semibold text-fg">Required Skills</h4>
                        <ul className="space-y-2">
                          {job.requiredSkills.map((skill, i) => <li key={i} className={bullet}>{skill}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 font-display text-lg font-semibold text-fg">Roles and Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((r, i) => <li key={i} className={bullet}>{r}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button onClick={() => scrollToId('ApplyForCareer')}>
                        <span className="inline-flex items-center gap-2"><Send className="size-4" /> Apply Now</span>
                      </Button>
                    </div>
                  </div>
                ),
              }))}
            />
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default FindYouAnOpenPosition;
