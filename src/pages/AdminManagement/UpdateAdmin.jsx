/* eslint-disable react/prop-types */
import { useState } from "react";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function UpdateAdmin({ Id, data, handleAdminUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(data?.status || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdminUpdate(Id, status);

    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center bg-gray-600 py-1 px-3 mx-2 text-white rounded"
      >
        <p>Update</p>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-[60%] w-full mx-auto transform overflow-hidden rounded-md bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center py-3 px-7 justify-between"
                  >
                    <p className="text-lg font-medium">Update Account Type</p>
                    <FontAwesomeIcon
                      icon={faMultiply}
                      onClick={closeModal}
                      className="cursor-pointer p-2"
                    />
                  </Dialog.Title>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div className="mt-5 px-7 mb-5">
                      <p className="font-medium">
                        Status
                        <span className="text-red-600">*</span>
                      </p>
                      <select
                        id="status"
                        className="w-full border p-2 my-1 outline-none"
                        defaultValue={status}
                        onInput={(e) => setStatus(e.target.value)}
                      >
                        <option value="">Select Status</option>

                        <option value="0">Active</option>
                        <option value="1">InActive</option>
                      </select>

                      {/* Modal Footer */}
                      <div className="my-6 flex gap-2 justify-between">
                        <button
                          type="button"
                          className="cancel-btn"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="approve-btn">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
