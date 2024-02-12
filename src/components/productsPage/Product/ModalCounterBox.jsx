import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "../../shared/UI/Icons";

const ModalCounterBox = ({
  counter,
  incrementHandler,
  decrementHandler,
  deleteHandler,
  classes,
}) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg bg-white font-bold text-red-500 border border-neutral-200 hover:drop-shadow-md px-2 py-2 ${classes}`}
    >
      <button type="button" onClick={incrementHandler}>
        <PlusIcon className="w-4 h-4" />
      </button>
      <div className="border-l border-r border-neutral-200 border-t-0 border-b-0 px-4">
        {counter}
      </div>

      {counter > 1 ? (
        <button type="button" onClick={decrementHandler}>
          <MinusIcon className="w-4 h-4" />
        </button>
      ) : (
        <button type="button" onClick={deleteHandler}>
          <TrashIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ModalCounterBox;
