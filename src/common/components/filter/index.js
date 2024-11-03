import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style.css";

const Filter = ({
  name,
  data,
  isMultiplSelect,
  selectedItems,
  onFilterChange,
  secondName,
}) => {
  const isMobile = window.innerWidth < 700;
  let responsiveFilterRef = React.createRef();
  const [openContent, setOpenContent] = useState(false);
  const [animate, setAnimate] = useState("up");
  let timerFetching = null;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleClickOutside(event) {
    if (
      responsiveFilterRef.current &&
      !responsiveFilterRef.current.contains(event.target)
    ) {
      onCloseContent();
    }
  }

  const onCloseContent = () => {
    setOpenContent(false);
  };

  useEffect(() => {
    //  if (isMobile) return

    document.addEventListener("mousedown", (e) => handleClickOutside(e));
    return () => {
      clearTimeout(timerFetching);
      document.removeEventListener("mousedown", (e) => handleClickOutside(e));
    };
  }, [data, isMobile, timerFetching, handleClickOutside]);

  function onSetOpenContent(bool) {
    const close = () => {
      setOpenContent(bool);
      setAnimate("up");
    };

    if (!isMobile) {
      close();
    } else {
      if (!bool) {
        setAnimate("down");
        timerFetching = setTimeout(() => {
          close();
        }, 800);
      } else {
        close();
      }
    }
  }

  const contentRef = useRef(null);

  return (
    <div
      ref={responsiveFilterRef}
      className={cx({
        "w-fit select-none": true,
        relative: !isMobile,
      })}
    >
      <div
        className="bg-white border border-solid rounded-lg cursor-pointer px-3.5 py-2 hover:bg-hover"
        role="presentation"
        onClick={() => {
          clearTimeout(timerFetching);
          setOpenContent(!openContent);
          onSetOpenContent(!openContent);
        }}
      >
        <div className="flex flex-1 items-center justify-between">
          {!!name && (
            <span>
              {name}
              {!!selectedItems?.length && !!secondName
                ? ` : ${secondName}`
                : ""}
            </span>
          )}
          <div className="h-3 w-3 flex items-center justify-center ml-2">
            {openContent ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {openContent && (
        <div 
        className={cx({
         [`w-fit absolute top-12 z-20 animated_${animate}`]: true,
         "flex items-end z-60 w-full h-full bg-transparent top-[unset] bottom-0 left-0 backdrop-blur-sm": isMobile,
        })}
        role="presentation"
        onClick={(e) => {
         if(isMobile) onCloseContent()
        }}
        >
          <div
            className={cx({
              [`flex flex-col w-full py-1 border rounded-lg h-fit max-h-[400px] overflow-y-auto bg-white`]: true,
            })}
            ref={contentRef}
          >
            {data.map((item, index) => {
              let isSelected = selectedItems?.includes(item?.value);

              return (
                <div
                  key={index}
                  className="flex cursor-pointer gap-3 justify-between items-center px-3.5 py-2 group hover:bg-hover border-border"
                  onClick={() => {
                    onFilterChange(item.value);
                    if (!isMultiplSelect) onCloseContent();
                  }}
                >
                  <p className="truncate">{item.name}</p>
                  <div
                    className={cx({
                      "w-4 h-4 border rounded-sm border-blue-100 p-[3.5px] pt-[1px]": true,
                      "!rounded-full !p-[3.2px]": !isMultiplSelect,
                      "border-blue-300": isSelected,
                    })}
                  >
                    {isSelected && (
                      <div
                        className={cx({
                          "w-2 h-2": true,
                          "rotate-45 border border-transparent border-r-blue-300 border-b-blue-300 ":
                            isMultiplSelect,
                          "bg-blue-300 rounded-full": !isMultiplSelect,
                        })}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
