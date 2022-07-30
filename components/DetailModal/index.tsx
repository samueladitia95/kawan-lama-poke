import { Dispatch, SetStateAction } from "react";

export default function DetailModal({
  closeModal,
}: {
  closeModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="bg-black opacity-40 fixed h-screen w-screen top-0 left-0 z-40"></div>
      <div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-full flex justify-center ">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ">
          <div className="relative bg-white rounded-xl shadow dark:bg-bDarkPrimary">
            <div className="flex justify-between items-center p-5 rounded-t border-b">
              <p className="text-xl">Detail Pokemon</p>
              <button
                type="button"
                className="text-tLightPrimary dark:text-tDarkPrimary bg-transparent hover:bg-bLightSecondary dark:hover:bg-bDarkSecondary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => closeModal(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center p-5">
              HELLO THERE
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
