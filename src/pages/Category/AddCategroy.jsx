import { useState, Fragment } from "react";
import { faMultiply, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function AddCategory({ handleCategoryCreate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mainCategory, setMainCategory] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setMainCategory("");
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCategoryCreate(mainCategory);
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center bg-[#1D267D] p-1 mx-2 text-white rounded"
      >
        <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
        <p className="font-medium">Create Category</p>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={closeModal}>
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
                    <p className="text-lg font-medium">Create Category</p>
                    <FontAwesomeIcon
                      icon={faMultiply}
                      onClick={closeModal}
                      className="cursor-pointer p-2"
                    />
                  </Dialog.Title>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div className="mt-5 px-7 mb-5">
                      {/* Toggle for Category Type */}
                      <div className="mb-4">
                        <Input
                          label={"Category Name"}
                          placeholder={"Enter your category"}
                          value={mainCategory}
                          onInput={(e) => setMainCategory(e.target.value)}
                        />
                      </div>

                      {/* Modal Footer */}
                      <div className="my-6 flex gap-2 justify-between">
                        <Button
                          type="button"
                          className="cancel-btn"
                          onClick={closeModal}
                          name={"Cancel"}
                        />
                        <Button
                          name={"Save"}
                          type="submit"
                          className="approve-btn"
                        />
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
