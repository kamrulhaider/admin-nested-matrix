/* eslint-disable react/prop-types */
import { useState } from "react";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import Input from "../../components/Input/Input";

export default function UpdateCategory({ Id, data, handleCategoryUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clientName, setClientName] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCategoryUpdate(Id, clientName);
    setIsOpen(false);
    setClientName("");
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-yellow-500 text-white px-2 py-1  text-xs"
      >
        <p>Edit</p>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={() => {}}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="lg:w-[60%]  w-full mx-auto transform overflow-hidden rounded-md bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="flex items-center py-3 px-7 justify-between"
                  >
                    <p className="text-lg font-medium">Update Category</p>
                    <FontAwesomeIcon
                      icon={faMultiply}
                      onClick={closeModal}
                      className="cursor-pointer p-2"
                    />
                  </DialogTitle>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div className="mt-5 px-7 mb-5">
                      <div>
                        <Input
                          label={"Category Name"}
                          placeholder={"Category Name"}
                          value={data?.name}
                          onInput={(e) => setClientName(e.target.value)}
                        />
                      </div>

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
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
