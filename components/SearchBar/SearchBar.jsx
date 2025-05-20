import React, { useContext } from "react";
import EventLocation from "./EventLocation";
import EventDate from "./EventDate";
import EventSearch from "./EventSearch";
import EventType from "./EventType";
import { BiRightArrowAlt } from "react-icons/bi";
import { EventContext } from "@/contexts/EventContext";

const SearchBar = () => {
  const { handleSubmit } = useContext(EventContext);
  return (
    <div className="bg-white/5 w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8 xl:pr-2 h-auto xl:h-[70px] rounded-3xl xl:rounded-full backdrop-blur-[20px] flex flex-col xl:flex-row items-center gap-6 mx-auto text-sm z-50">
      <EventSearch />
      <div className="border h-[20px] border-white/10 hidden xl:flex "></div>
      <EventLocation />
      <div className="border h-[20px] border-white/10 hidden xl:flex "></div>
      <EventDate />
      <div className="border h-[20px] border-white/10 hidden xl:flex "></div>
      <EventType />
      <button
        onClick={handleSubmit}
        className="w-full xl:w-[54px] h-[54px] rounded-[40px] xl-rounded-full bg-accent hover:bg-accent-hover transition-all flex items-center justiy-center"
      >
        <BiRightArrowAlt className="text-3xl" />
      </button>
    </div>
  );
};

export default SearchBar;
