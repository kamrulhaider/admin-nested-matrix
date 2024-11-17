import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function DetailsModal({ Details }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <FontAwesomeIcon
        icon={faEye}
        onClick={openModal}
        className="cursor-pointer text-lg mx-2 text-green-600"
      />

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
                <Dialog.Panel className="w-full max-w-[70%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between mb-3 font-semibold text-2xl"
                  >
                    {Details?.name}
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={closeModal}
                      className="cursor-pointer text-lg text-gray-600"
                    />
                  </Dialog.Title>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 border rounded-md">
                      <h3 className="text-md font-semibold">Degrees:</h3>
                      <p className="mb-2">{Details?.Degrees}</p>
                      <h3 className="text-md font-semibold">
                        Fees:
                        <span className="font-normal ml-2">
                          {Details?.price}
                        </span>
                      </h3>
                      <h3 className="text-md font-semibold">
                        Years of Exp:{"  "}
                        <span className="font-normal">
                          {Details?.yearOfExperience}
                        </span>
                      </h3>
                    </div>
                    <div className="p-2 border rounded-md">
                      <h3 className="text-md font-semibold">Chambers:</h3>
                      {Details?.chambers?.map((chamber, index) => (
                        <p key={index} className="mb-2">
                          {`${chamber.address} - ${chamber.time}`}
                        </p>
                      ))}
                    </div>
                    <div className="p-2 border rounded-md">
                      <h3 className="text-md font-semibold">Services:</h3>
                      {Details?.services?.map((service, index) => (
                        <p key={index} className="mb-2">
                          {service}
                        </p>
                      ))}
                    </div>
                    <div className="p-2 border rounded-md">
                      <h3 className="text-md font-semibold">Diseases:</h3>
                      {Details?.diseases?.map((disease, index) => (
                        <p key={index} className="mb-2">
                          {disease}
                        </p>
                      ))}
                    </div>
                    <div className="p-2 border rounded-md">
                      <h3 className="text-md font-semibold">Speciality:</h3>
                      {Details?.specialist?.map((disease, index) => (
                        <p key={index} className="mb-2">
                          {disease}
                        </p>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
