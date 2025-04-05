"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { nav_links } from "./constants";
import { projects } from "./constants";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../Context/SearchContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { searchQuery, handleSearch, clearSearch } = useContext(SearchContext);
  const pathname = usePathname();
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isBlackBg, setIsBlackBg] = useState(pathname === "/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchTab, setShowSearchTab] = useState(false);

  // Initial state setup
  useEffect(() => {
    const initializeNavbar = () => {
      if (pathname === "/") {
        setIsBlackBg(true);
        setIsDarkBg(false);
      } else {
        setIsBlackBg(false);
        setIsDarkBg(false);
      }
    };

    initializeNavbar();
    return () => {
      // Reset state when component unmounts
      setIsBlackBg(false);
      setIsDarkBg(false);
    };
  }, [pathname]);

  // Keep the scroll handler separate
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        const heroSection = document.querySelector(".hero-section");
        if (!heroSection) return; // Guard clause

        const heroRect = heroSection.getBoundingClientRect();
        const whiteSections = document.querySelectorAll(".white-section");

        if (heroRect.bottom > 0) {
          setIsDarkBg(false);
          setIsBlackBg(true);
          return;
        }

        const isInWhiteSection = Array.from(whiteSections).some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom >= 0;
        });

        setIsDarkBg(isInWhiteSection);
        setIsBlackBg(!isInWhiteSection);
      } else {
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop;
        const hasScrolledPastInitialScreen =
          scrollPosition > window.innerHeight;

        if (hasScrolledPastInitialScreen) {
          const whiteSections = document.querySelectorAll(".white-section");
          if (whiteSections) {
            const isAnyWhiteSectionVisible = Array.from(whiteSections).some(
              (section) => {
                const rect = section.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom >= 0;
              }
            );
            setIsDarkBg(isAnyWhiteSectionVisible);
          }
        } else {
          setIsDarkBg(false);
          setIsBlackBg(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(e.target.value);
      if (!e.target.value) {
        setShowSearchTab(false);
      }
    }
  };

  const handleSearchClick = () => {
    if (showSearchTab && !searchQuery) {
      setShowSearchTab(false);
    } else {
      setShowSearchTab(true);
    }
  };

  useEffect(() => {
    setShowSearchTab(!!searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (pathname !== "/projects") {
      clearSearch();
      setShowSearchTab(false);
    }
  }, [pathname]);

  useEffect(() => {
    clearSearch();
    setShowSearchTab(false);
  }, []);

  const showSearchFeature = pathname === "/projects";

  return (
    <nav
      className={`px-4 py-3 lg:px-16 z-40 fixed w-full ${
        isDarkBg
          ? "text-black bg-white drop-shadow-lg"
          : isBlackBg
          ? "text-white bg-black"
          : "text-white bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-4xl">
          <Image
            src={"/logo/sdc-logo-" + `${isDarkBg ? "black.png" : "white.png"}`}
            width={150}
            height={150}
            alt="SDC"
            className="w-24"
          />
        </Link>
        <ul className="hidden lg:flex gap-16 text-base items-center">
          {nav_links.map((link) =>
            link.key === "join_sdc" ? (
              <Link key={link.key} href={link.href}>
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white font-semibold transform hover:scale-105 transition-all duration-200 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
                  {link.label}
                </button>
              </Link>
            ) : (
              <Link key={link.key} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            )
          )}

          {showSearchFeature && (
            <>
              {showSearchTab && (
                <input
                  className="px-2 w-64 focus:outline-none rounded-lg placeholder:text-[#a9a9a9] text-[#000000]"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleEnter}
                />
              )}
              <div className="bg-yellow-400 hover:bg-orange-500 flex justify-center items-center w-7 h-7 rounded-full cursor-pointer">
                <FaSearch
                  className=" hover:text-black text-white w-4 h-4"
                  onClick={handleSearchClick}
                />
              </div>
            </>
          )}
        </ul>
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`p-1 rounded-full ${isDarkBg ? "bg-black" : "bg-white"}`}
          >
            <CgMenuRightAlt
              className={`w-8 h-8 ${isDarkBg ? "text-white" : "text-black"}`}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="px-4 py-3 bg-white text-black h-screen w-screen absolute top-0 right-0 items-start lg:hidden">
          <div className="flex justify-between">
            <div className="">
              <Link href="/" className="font-bold text-4xl">
                <Image
                  src={"/logo/sdc-logo-black.png"}
                  width={150}
                  height={150}
                  alt="SDC"
                  className="w-24"
                />
              </Link>
              <ul className="flex flex-col gap-4 mt-8">
                {nav_links.map((link) => (
                  <Link
                    onClick={toggleMobileMenu}
                    key={link.key}
                    href={link.href}
                    className={`text-lg font-semibold hover:underline ${
                      link.key === "join_sdc"
                        ? "inline-block px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white transform hover:scale-105 transition-all duration-200 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex items-start">
              <button
                onClick={toggleMobileMenu}
                className="p-1 bg-black rounded-full"
              >
                <IoClose className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
