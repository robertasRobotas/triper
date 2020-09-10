import React from 'react';
import './SelectItem.css';

const selectItem = ({ item, setPreferredSports, preferredSports }) => {
  if (!preferredSports.includes(item)) {
    setPreferredSports([...preferredSports, item]);
  } else {
    setPreferredSports(preferredSports.filter((val) => val !== item));
  }
};

const selectCheck = ({ item, preferredSports }) => {
  return preferredSports.includes(item);
};

const SelectItem = ({ item, setPreferredSports, preferredSports }) => {
  return (
    <div
      onClick={() => selectItem({ item, setPreferredSports, preferredSports })}
      className={
        selectCheck({ item, preferredSports })
          ? 'selectedItem'
          : 'notSelectedItem'
      }>
      {item}
    </div>
  );
};

export default SelectItem;
