import React from "react";
import EventsDetails from "@/components/EventsComp/EventsDetails";

export default function Events() {
  return (
    <div className="overflow-hidden">
      <div className="bg-[url(/bg/events-bg.png)] bg-cover h-screen text-white flex flex-col justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">EVENTS</h1>
        <p className="text-base md:text-xl lg:text-2xl lg:w-3/4">Explore a diverse range of events that cater to every facet of software development, from hands-on workshops and hackathons to insightful tech talks and networking sessions.</p>
      </div>
      <EventsDetails />
    </div>
  );
}