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
import { FaPlay } from "react-icons/fa"; // Add this import

const Projects = () => {
  const { searchQuery } = useContext(SearchContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(9);
  const videoRef = useRef(null); // Ref for video container
  const [activeYear, setActiveYear] = useState("all"); // Add this new state
  const [isAnimating, setIsAnimating] = useState(false); // Add this new state for animation
  const [isPlaying, setIsPlaying] = useState(false);

  const openPopup = (project) => {
    setSelectedProject(project);
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

  // Add this new function to handle outside clicks
  const handleOutsideClick = (e) => {
    // Check if the click is outside the popup content
    if (e.target.classList.contains('popup-overlay')) {
      closePopup();
    }
  };

  const handleVideoClick = () => {
    setIsPlaying(true);
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
                <div 
                  className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 popup-overlay"
                  onClick={handleOutsideClick}
                >
                  <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg w-[95%] md:w-[90%] lg:w-[85%] h-[95vh] overflow-auto relative">
                    <button
                      onClick={closePopup}
                      className="absolute top-4 right-4 text-black-500 hover:text-gray-700 z-20"
                    >
                      <IoIosCloseCircle className="w-8 h-8" />
                    </button>

                    <div className="flex flex-col items-center gap-8">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
                        {selectedProject.title}
                      </h2>

                      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start w-full">
                        <div className="flex flex-col justify-start w-full sm:w-1/3 gap-6">
                          <ul className="list-disc text-sm sm:text-base md:text-lg space-y-3 flex flex-col flex-wrap">
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

                          {/* Add instruction text when video is available and not playing */}
                          {selectedProject.link && !isPlaying && (
                            <p className="text-[#D34747] dark:text-[#EB9335] font-semibold text-sm md:text-base mt-4 animate-pulse">
                              Click on the image to watch a video and learn more about the project!
                            </p>
                          )}

                          {/* Show description after clicking */}
                          {isPlaying && (
                            <p className="text-sm sm:text-base text-justify mt-4">
                              {selectedProject.description}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-shrink-0 w-full sm:w-2/3 justify-center relative">
                          {selectedProject.link && !isPlaying ? (
                            <div className="relative group cursor-pointer" onClick={handleVideoClick}>
                              <Image
                                src={selectedProject.poster || selectedProject.image}
                                width={1200}
                                height={800}
                                alt="Poster"
                                priority={true}
                                className="rounded-md object-contain w-full h-auto max-h-[70vh]"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                                <FaPlay className="text-white text-4xl" />
                              </div>
                            </div>
                          ) : selectedProject.link && isPlaying ? (
                            <div className="w-full h-auto aspect-[4/3]"> {/* Added wrapper div with aspect ratio */}
                              <iframe
                                src={`${getEmbedLink(selectedProject.link)}?autoplay=1`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-full h-full rounded-md object-contain max-h-[70vh]"
                              />
                            </div>
                          ) : selectedProject.poster && (
                            <Image
                              src={selectedProject.poster}
                              width={1200}
                              height={800}
                              alt="Poster"
                              priority={true}
                              className="rounded-md object-contain w-full h-auto max-h-[70vh]"
                            />
                          )}
                        </div>

                      </div>

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
