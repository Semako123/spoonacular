import "./dropdown.css";
import React from "react";
import { useSelect } from "downshift";
import { useEffect } from "react";
import "animate.css/animate.css";

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
    // eslint-disable-next-line
  }, [selectedItem]);

  return (
    <div className="dropdown">
      <div className="dropdown__title">
        <div
          className="p-2 bg-white flex justify-between cursor-pointer"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem : title}</span>
          <span style={{ paddingLeft: "10px" }}>
            {isOpen ? <>&#8593;</> : <>&#8595;</>}
          </span>
        </div>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          data.map((item, index) => (
            <li
              className="animate__animated animate__fadeInUp"
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item ? item : title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
