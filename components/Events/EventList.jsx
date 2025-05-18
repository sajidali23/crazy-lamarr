import React, { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";
import SkeletonGrid from "../SkeletonGrid";
import Event from "./Event";

const EventList = () => {
  const { filteredEvents, isLoading, error } = useContext(EventContext);

  if (error) return <p>Error: {error}</p>;

  if (filteredEvents.length === 0 && !isLoading) {
    return (
      <div>
        <p>NO events available</p>
      </div>
    );
  }

  if (isLoading) {
    return <SkeletonGrid itemCount={12} />;
  } else {
    return (
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-[30px] mb-32">
          {filteredEvents.map((event, index) => {
            return (
              <div key={index}>
                <Event event={event} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default EventList;
