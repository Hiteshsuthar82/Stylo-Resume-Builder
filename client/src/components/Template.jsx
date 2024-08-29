import React from "react";
import searchIcon from "./../assets/search.svg";

function Template({ templateData, isSelected, onClick, onSearchClick }) {
  return (
    <div
      onClick={() => onClick && onClick(templateData.id)}
      className={`relative mx-auto p-1 rounded-lg cursor-pointer transition-all duration-300 border-4 w-fit group ${
        isSelected
          ? "border-4 border-purple-600"
          : "border-2 border-transparent"
      }`}
    >
      <img
        className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg focus:outline-none"
        src={templateData.src}
        alt={`template ${templateData.id}`}
        tabIndex={0}
      />
      {/* Icon to be displayed on hover/focus */}
      {onSearchClick && (
        <div
          className="absolute top-4 right-8 w-10 h-10 bg-purple-600 p-2 rounded-full flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
          onClick={(e) => {
            onSearchClick(templateData.src);
          }}
        >
          <img src={searchIcon} alt="" />
        </div>
      )}
    </div>
  );
}

export default Template;
