import React from "react";
import { eventsData } from "./eventsData";

const currdate = new Date();
const pastEvents = eventsData.filter((event) => {
  const mydate = new Date(event.date + " 0:00:00");
  return mydate < currdate;
});
const upcomingEvents = eventsData.filter((event) => {
  const mydate = new Date(event.date + " 0:00:00");
  return mydate >= currdate;
});

export default function EventsDetails() {
  return (
    <div className="white-section">
      
      <div className="flex flex-col gap-24 py-16 xl:py-20">
        <div className="flex flex-col gap-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 white-section">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Upcoming Events
          </h2>

          {/* upcomingevent section */}
          <div className="py-12 px-4 md:px-12 flex flex-col items-start gap-10 white-section relative z-30 bg-[#0119FF29] md:items-center">
            {upcomingEvents.map((event) => {
              const mydate = new Date(event.date);
              const date = mydate.getDate();
              const m = mydate.toLocaleString("locale", { month: "short" });
              const day = mydate.toLocaleDateString("locale", {
                weekday: "short",
              });

              return (
                <div key={event.id} className="flex items-start gap-4 md:gap-12">
                  <div className="rounded-full px-11 py-4 bg-white flex flex-col items-center">
                    <h1 className="text-xl">{m}</h1>
                    <h1 className="text-3xl text-[#271D70]">{date}</h1>
                    <h1 className="text-xl">{day}</h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-lg lg:text-3xl">{event.title}</h1>
                    <p>{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* pastevent */}
        <div className="flex flex-col gap-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 white-section">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Past Events
          </h2>
          <div className="py-12 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 items-start gap-10 white-section relative z-30 bg-[#0119FF29] md:items-center">
            {pastEvents.map((event) => {
              const mydate = new Date(event.date);
              const date = mydate.getDate();
              const m = mydate.toLocaleString("locale", { month: "short" });
              const day = mydate.toLocaleDateString("locale", {
                weekday: "short",
              });

              return (
                <div key={event.id} className="flex items-start gap-4 md:gap-12">
                  <div className="rounded-full px-11 py-4 bg-white flex flex-col items-center justify-center ">
                    <h1 className="text-xl">{m}</h1>
                    <h1 className="text-3xl text-[#271D70]">{date}</h1>
                    <h1 className="text-xl">{day}</h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-lg lg:text-3xl">{event.title}</h1>
                    <p>{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}