'use client'
import { ChangeEvent } from "react";

const CheckboxText = ({
  dataName,
}: {
  dataName: string;
}) => {
  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`Checkbox ${dataName} was ${event.target.checked ? "checked" : "unchecked"}`);
  };

  return (
    <div className="flex items-center gap-x-3">
      <input
        onChange={checkboxChangeHandler}
        className="text-primary rounded p-2 focus:ring-0 focus:ring-offset-0"
        id={`checkbox-${dataName}`}
        type="checkbox"
      />
      <label
        className="space-x-1"
        htmlFor={`checkbox-${dataName}`}
        key={dataName}
      >
        <span className="text-secondary-400">{dataName}</span>
      </label>
    </div>
  );
};
export default CheckboxText;