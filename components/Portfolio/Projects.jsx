"use client";
import Link from "next/link";
import { useState, useContext, useRef, useEffect } from "react";
import Popup from "../ui/Popup";
import { projects, projectDetails } from "./constants";
import { students } from "../OurTeam/studentsData";
import { IoIosCloseCircle } from "react-icons/io";
import ProjectsCard from "../ui/ProjectsCard";
import { FaLinkedin } from "react-icons/fa";
import { SearchContext } from "../Context/SearchContext";
import Image from "next/image";

const Projects = () => {
  const { searchQuery } = useContext(SearchContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(9);
  const [showDetails, setShowDetails] = useState(false);
  const videoRef = useRef(null); // Ref for video container
  const [activeYear, setActiveYear] = useState("all"); // Add this new state
  const [isAnimating, setIsAnimating] = useState(false); // Add this new state for animation

  const openPopup = (project) => {
    setSelectedProject(project);
    setShowDetails(false);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  // Filter projects based on search query
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to video container when More Info button is clicked
  const handleMoreInfoClick = () => {
    setShowDetails(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center", // Ensures the video is vertically centered
          inline: "nearest", // Ensures the video is horizontally aligned
        });
      }
    }, 300); // Small delay to allow the popup to load first
  };

  // Convert YouTube short link to embeddable link
  const getEmbedLink = (link) => {
    return link.includes("youtu.be")
      ? link.replace("youtu.be", "www.youtube.com/embed")
      : link;
  };

  // Function to display "N/A" if a mentor/role is not found
  const getMentorRole = (projectCode, role) => {
    const mentor = projectDetails.find(
      (detail) => detail.project_code === projectCode && detail.Role === role
    );
    return mentor ? mentor.BasicSkillsRequired : "N/A";
  };

  // Add this new function to get unique years from team members
  const getUniqueYears = (projectCode) => {
    const teamMembers = students.filter(
      (student) => student.project_code === projectCode
    );
    const years = [...new Set(teamMembers.map((member) => member.year))];
    return years.sort();
  };

  // Add this function to filter team members by year
  const getFilteredTeamMembers = (projectCode) => {
    const teamMembers = students.filter(
      (student) => student.project_code === projectCode
    );
    if (activeYear === "all") return teamMembers;
    return teamMembers.filter((member) => member.year === activeYear);
  };

  // Modify the existing function to handle animations
  const handleYearChange = (year) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveYear(year);
      setIsAnimating(false);
    }, 300); // Match this with CSS transition duration
  };

  return (
    <>
      <div className="px-4 mb-32">
        <div className="flex flex-col justify-center items-center">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <ProjectsCard
                image={project.image}
                key={project.id}
                title={project.title}
                tag={project.tag}
                description={project.description}
                onClick={() => openPopup(project)}
              />
            ))}

            {selectedProject && (
              <Popup>
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                  <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg max-w-md md:max-w-3xl lg:max-w-5xl w-full h-auto max-h-[80vh] overflow-auto relative">
                    <button
                      onClick={closePopup}
                      className="absolute top-2 right-2 text-black-500 hover:text-gray-700 z-20"
                    >
                      <IoIosCloseCircle className="w-8 h-8" />
                    </button>

                    <div className="flex flex-col items-center gap-4">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-center">
                        {selectedProject.title}
                      </h2>

                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
                        {selectedProject.poster && (
                          <div className="flex flex-shrink-0">
                            <Image
                              src={selectedProject.poster}
                              width={700}
                              height={500}
                              alt="Poster"
                              priority={true}
                              className="rounded-md object-contain max-w-full max-h-[500px]"
                            />
                          </div>
                        )}

                        <div className="flex flex-col justify-start">
                          <ul className="list-disc text-sm sm:text-base space-y-2">
                            {projectDetails
                              .filter(
                                (detail) =>
                                  detail.project_code ===
                                    selectedProject.project_code &&
                                  (detail.Role === "Type" ||
                                    detail.Role === "Year Created")
                              )
                              .map((detail, index) => (
                                <li key={index}>
                                  <span className="font-bold">
                                    {detail.Role}:
                                  </span>{" "}
                                  {detail.BasicSkillsRequired || "N/A"}
                                </li>
                              ))}

                            <li>
                              <span className="font-bold">Frontend:</span>{" "}
                              {projectDetails
                                .filter(
                                  (detail) =>
                                    detail.project_code ===
                                      selectedProject.project_code &&
                                    detail.Role === "Frontend"
                                )
                                .map(
                                  (detail, index) =>
                                    detail.BasicSkillsRequired || "N/A"
                                )
                                .join(", ")}
                            </li>
                            <li>
                              <span className="font-bold">Backend:</span>{" "}
                              {projectDetails
                                .filter(
                                  (detail) =>
                                    detail.project_code ===
                                      selectedProject.project_code &&
                                    detail.Role === "Backend"
                                )
                                .map(
                                  (detail, index) =>
                                    detail.BasicSkillsRequired || "N/A"
                                )
                                .join(", ")}
                            </li>
                            <li>
                              <span className="font-bold">Database:</span>{" "}
                              {projectDetails
                                .filter(
                                  (detail) =>
                                    detail.project_code ===
                                      selectedProject.project_code &&
                                    detail.Role === "Database"
                                )
                                .map(
                                  (detail, index) =>
                                    detail.BasicSkillsRequired || "N/A"
                                )
                                .join(", ")}
                            </li>

                            {/* Add Faculty Mentor and Industry Mentor */}
                            <li>
                              <span className="font-bold">Faculty Mentor:</span>{" "}
                              {getMentorRole(
                                selectedProject.project_code,
                                "Faculty Mentor"
                              )}
                            </li>
                            <li>
                              <span className="font-bold">
                                Industry Mentor:
                              </span>{" "}
                              {getMentorRole(
                                selectedProject.project_code,
                                "Industry Expert"
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>

                      {!showDetails && (
                        <button
                          onClick={handleMoreInfoClick}
                          className="mt-4 bg-black text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-yellow-400"
                        >
                          More Info
                        </button>
                      )}

                      {showDetails && (
                        <>
                          {selectedProject.link && (
                            <div
                              ref={videoRef}
                              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] mb-4"
                            >
                              <iframe
                                src={`${getEmbedLink(
                                  selectedProject.link
                                )}?autoplay=1`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-full h-full rounded-md"
                              ></iframe>
                            </div>
                          )}
                          <p className="text-sm sm:text-base text-justify mt-4">
                            {selectedProject.description}
                          </p>
                          <div className="flex flex-col items-center gap-4">
                            <h3 className="font-extrabold text-lg sm:text-xl">
                              TEAM
                            </h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                              {getFilteredTeamMembers(
                                selectedProject.project_code
                              ).map((student, index) => (
                                <div
                                  key={index}
                                  className={`flex flex-col items-center transition-all duration-300 ease-in-out ${
                                    isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                  }`}
                                  style={{
                                    transitionDelay: `${index * 50}ms`
                                  }}
                                >
                                  <Image
                                    src={student.profile_picture}
                                    width={60}
                                    height={60}
                                    alt="Profile Picture"
                                    priority={true}
                                    className="w-24 h-24 rounded-full mb-2 object-cover"
                                  />
                                  <div className="flex flex-col items-center">
                                    <Link
                                      href={student.linkedin}
                                      target="_blank"
                                    >
                                      <h3 className="font-bold text-[12px] lg:text-base flex items-center gap-1 text-center">
                                        {student.fullName}
                                        <FaLinkedin />
                                      </h3>
                                    </Link>
                                    <p className="text-[10px] lg:text-sm text-gray-600 text-center">
                                      {student.Position_in_Team}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Update the year filter buttons */}
                            <div className="flex gap-2 mt-4">
                              <button
                                onClick={() => handleYearChange("all")}
                                className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                                  activeYear === "all"
                                    ? "bg-yellow-400 text-black"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                              >
                                All
                              </button>
                              {getUniqueYears(selectedProject.project_code).map(
                                (year) => (
                                  <button
                                    key={year}
                                    onClick={() => handleYearChange(year)}
                                    className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                                      activeYear === year
                                        ? "bg-yellow-400 text-black"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                  >
                                    {year}
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Popup>
            )}
          </div>
          {visibleProjects < filteredProjects.length && (
            <button
              className="px-10 py-2 text-black text-sm font-semibold lg:py-3 lg:px-12 lg:text-lg bg-yellow-400 mt-16"
              onClick={loadMoreProjects}
              title="LOAD MORE"
            >
              LOAD MORE
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
