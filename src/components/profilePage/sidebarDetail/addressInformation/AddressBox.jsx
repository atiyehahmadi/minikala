import React, { useState } from "react";
import Modal from "../Modal";
import EditAddressDetail from "./EditAddress/EditAddressDetail";
import DeleteAddressDetail from "./EditAddress/DeleteAddressDetail";
import { DeleteBtnIcon, EditBtnIcon } from "../../../shared/UI/Icons";

const AddressBox = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState(false);
  const onDeleteClick = () => {
    setDeleteAddress(true);
    setShowDeleteModal(false);
  };
  return (
    <div>
      {!deleteAddress && (
        <div className="px-4 py-6 mb-4 border rounded-lg cursor-pointer border-neutral-100 hover:bg-neutral-100">
          <h6 className="">تهران - منطقه ۱، ,ونک - واحد ۱ - پلاک ۹</h6>

          <div className="flex items-center justify-end ">
            <h6 className="ml-auto text-neutral-500">09199999999</h6>
            <button
              className="p-1 mx-1 mt-4 rounded-lg hover:bg-neutral-200"
              type="button"
              onClick={() => setShowEditModal(true)}
            >
              <EditBtnIcon className="w-6 h-6" />
            </button>
            <button
              className="p-1 mx-1 mt-4 rounded-lg hover:bg-neutral-200"
              type="button"
              onClick={() => setShowDeleteModal(true)}
            >
              <DeleteBtnIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setShowEditModal(true)}
        type="button"
        className="flex mr-auto text-white bg-red-500 hover:bg-red-600 rounded-lg px-6 py-2 mt-4"
      >
        + افزودن آدرس جدید
      </button>
      {showEditModal && (
        <Modal>
          <EditAddressDetail closeModal={() => setShowEditModal(false)} />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal>
          <DeleteAddressDetail
            closeModal={() => setShowDeleteModal(false)}
            onDeleteClick={onDeleteClick}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddressBox;
