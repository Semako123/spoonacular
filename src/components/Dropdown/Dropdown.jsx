import "./dropdown.css";
import React from "react";
import { useSelect } from "downshift";
import { useEffect } from "react";

const Dropdown = ({ id, data, title, onchange }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items: data,
  });

  useEffect(() => {
    onchange(id, selectedItem);
  }, [selectedItem]);

  return (
    <div className="dropdown">
      <div className="w-72 flex flex-col gap-1">
        <div
          className="p-2 bg-white flex justify-between cursor-pointer"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem : title}</span>
          <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </div>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          data.map((item, index) => (
            <li
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
