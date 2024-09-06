import { useState } from "react";
import { DropdownMenu } from "./dropdown";
import { FarmViewFeature } from "../farm-view.feature";
import { useModal } from "../../../context/modal-context";
import FarmRegisterFeature from "../farm-register.feature";
import { removeFarm } from "../farm.slice";
import { useAppDispatch } from "../../../app/store.app";

export const FarmCard = ({ id, date, day, name, location, farmData }: any) => {
  const dispatch = useAppDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const { openModal }: any = useModal();

  function handleOpenDetails() {
    openModal(() => <FarmViewFeature farm={farmData} />);
    toggleDropdown()
  };

  function handleEdit() {
    openModal(() => <FarmRegisterFeature farm={farmData} />);
    toggleDropdown()
  };

  function handleRemove() {
    dispatch(removeFarm(id));
    toggleDropdown()
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    // <Link to={`${id}`}>
    <div className="flex justify-between items-start p-4 bg-white shadow rounded-lg mb-4 relative">
      <div className="flex space-x-4">
        <div className="flex flex-col items-center justify-center border-r-[1px] border-r-gray-500 w-14 pr-4">
          <span className="text-primary font-bold text-sm">{day}</span>
          <span className="text-gray-800 font-semibold text-md">{date}</span>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center  text-primary font-bold text-xs">
            {location}
          </div>
          <div className="flex items-center  text-gray-800 font-semibold text-xl">
            {name}
          </div>

        </div>
      </div>
      <div className="relative">
        <button
          className="flex flex-col gap-[2px] items-center justify-center p-2"
          onClick={toggleDropdown}
        >
          <span className="w-1 h-1 bg-black rounded"></span>
          <span className="w-1 h-1 bg-black rounded"></span>
          <span className="w-1 h-1 bg-black rounded"></span>
        </button>
      </div>

      {showDropdown && (
        <DropdownMenu
          onView={() => handleOpenDetails()}
          onEdit={() => handleEdit()}
          onRemove={() => handleRemove()}
        />
      )}
    </div>
    // </Link>
  );
};