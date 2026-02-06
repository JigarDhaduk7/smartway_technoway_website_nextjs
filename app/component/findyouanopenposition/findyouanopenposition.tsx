"use client";

import React, { useState, useEffect } from "react";
import { getData } from "../../../lib/api";

interface Job {
  _id: string;
  title: string;
  location: string;
  jobType: string;
  experience: string;
  openings: number;
  description: string;
  requiredSkills: string[];
  responsibilities: string[];
}

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
    <section id='SeeCurrentOpening' className="company-values-wrap home-sec-pattern-right py-100">
      <div className="container">
        <div
          className="row align-items-center justify-content-between"
          data-aos="fade-up"
        >
          <div className="col-lg-7 col-xl-6">
            <h2 className="heading-xxxl mb-3">
              Let's find you an open position.
            </h2>
          </div>
          <div className="col-lg-5 col-xl-4">
            <p className="peragraph-style-1">
              Explore a curated list of opportunities tailored to your skills,
              interests, and career goals—helping you move confidently toward
              your next big role.
            </p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12" data-aos="fade-up">
            {loading ? (
              <div className="placeholder-glow">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="card mb-3">
                    <div className="card-body">
                      <span className="placeholder col-6 mb-2"></span>
                      <span className="placeholder col-12 mb-2"></span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="accordion accordion-card career-accordion"
                id="DefaultAccordionsWrap"
              >
                {jobs.map((job, index) => (
                  <div key={job._id} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button font-14 pe-0 ${index !== 0 ? "collapsed" : ""
                          }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#accordion${index + 1}`}
                        aria-expanded={index === 0}
                        aria-controls={`accordion${index + 1}`}
                      >
                        <div className="col-auto">
                          <div className="text-secondary fw-semibold mb-1">
                            {job.title}
                          </div>
                          <div className="text-primary-emphasis fw-normal">
                            {job.location}
                          </div>
                        </div>
                        <div className="col">
                          <div className="row mx-0 justify-content-end">
                            <div className="col-auto">
                              <span className="text-secondary fw-semibold mb-1">
                                Job Type:{" "}
                              </span>
                              <span className="fw-semibold">{job.jobType}</span>
                            </div>
                            <div className="col-auto">
                              <span className="text-secondary fw-semibold mb-1">
                                Experience:{" "}
                              </span>
                              <span className="fw-semibold">
                                {job.experience}
                              </span>
                            </div>
                            <div className="col-auto">
                              <span className="text-secondary fw-semibold mb-1">
                                No. Of Opening:{" "}
                              </span>
                              <span className="fw-semibold">{job.openings}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={`accordion${index + 1}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                        }`}
                      data-bs-parent="#DefaultAccordionsWrap"
                    >
                      <div className="accordion-body">
                        <div className="bg-white">
                          <div className="row mx-0 py-3">
                            <div className="col-12 px-4 border-bottom mb-4">
                              <p>{job.description}</p>
                            </div>
                            <div className="col-12 px-4">
                              <div className="row justify-content-between">
                                <div className="col-xl-6 col-xxl-5 mb-3">
                                  <h5 className="heading-sm fw-bold text-primary mb-3">
                                    Required Skills
                                  </h5>
                                  {job.requiredSkills.map((skill, skillIndex) => (
                                    <p
                                      key={skillIndex}
                                      className="peragraph-style-1 list-sty-arrow"
                                    >
                                      <i className="far fa-angle-double-right text-secondary me-2"></i>{" "}
                                      {skill}
                                    </p>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-xxl-5 mb-3">
                                  <h5 className="heading-sm fw-bold text-primary mb-3">
                                    Roles and Responsibilities
                                  </h5>
                                  {job.responsibilities.map(
                                    (responsibility, respIndex) => (
                                      <p
                                        key={respIndex}
                                        className="peragraph-style-1 list-sty-arrow"
                                      >
                                        <i className="far fa-angle-double-right text-secondary me-2"></i>{" "}
                                        {responsibility}
                                      </p>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-end mt-4 mb-1">
                          <div className="d-inline-block">
                            <button
                              onClick={() => {
                                const element = document.getElementById('ApplyForCareer');
                                const offset = 80;
                                const elementPosition = element?.getBoundingClientRect().top || 0;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                              }}
                              className="btn btn-primary btn-lg d-flex align-items-center"
                            >
                              <i className="fas fa-envelope font-18 me-2"></i>{" "}
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYouAnOpenPosition;
