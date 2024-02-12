import React, { useState } from "react";

function SelectInput({ selectList }) {
  const selectListArray = [];
  for (const key in selectList) {
    selectListArray.push(selectList[key]);
  }
  const firstSelectBoxArray = [];
  for (const key in selectList) {
    firstSelectBoxArray.push(selectList[key].question);
  }

  const [firstSelectBox, setFirstSelectBox] = useState(firstSelectBoxArray[0]);

  return (
    <div className="flex mt-6 items-center justify-between">
      <select
        onChange={(event) => setFirstSelectBox(event.target.value)}
        value={firstSelectBox}
        className="w-full p-4 ml-2 text-xs border rounded-md outline-none border-neutral-300 text-neutral-600"
      >
        {firstSelectBoxArray.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <select className="w-full p-4  text-xs border rounded-md outline-none border-neutral-300 text-neutral-600">
        <option value="کدام سفارشتان دچار مشکل شده است؟">
          کدام سفارشتان دچار مشکل شده است؟
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
}

export default SelectInput;
