import React from "react";

function DeleteAddressDetail({ closeModal, onDeleteClick }) {
  return (
    <div className="bg-white rounded-2xl p-4 w-full">
      <h1 className="font-bold text-xl mb-4">حذف آدرس</h1>
      <p className="mb-6">آیا از حذف آدرس خود مطمئن هستید؟</p>
      <div className="flex justify-end">
        <button
          className="border-2 hover:bg-neutral-100 focus:bg-red-200 focus:border-red-200 text-red-600 font-semibold rounded-lg px-4 py-2 ml-2"
          type="button"
          onClick={closeModal}
        >
          انصراف
        </button>
        <button
          onClick={onDeleteClick}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2"
          type="button"
        >
          بله، حذف کن
        </button>
      </div>
    </div>
  );
}

export default DeleteAddressDetail;
