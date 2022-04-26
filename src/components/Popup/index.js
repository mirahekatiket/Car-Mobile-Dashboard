import React from 'react';

const Popup = ({ title, children, handleClose }) => {
  return (
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      onClick={handleClose}
    >
      <div className="relative w-full h-full sm:h-fit sm:w-auto sm:my-6 sm:mx-auto  sm:max-w-xl sm:min-w-[800px]" onClick={e => e.stopPropagation()}>
        {/*content*/}
        <div className="border-0 h-full sm:rounded-lg sm:shadow-lg relative flex flex-col w-full bg-white sm:outline-none focus:outline-none over">
          {/*header*/}
          <div className="flex items-center justify-between p-4 rounded-t">
            <h3 className="text-lg sm:text-xl font-semibold">
              {title}
            </h3>
            <button
              className="ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl outline-none focus:outline-none hover:text-red-500 ease-linear transition-all duration-150"
              onClick={() => handleClose(false)}
            >
              <span className="bg-transparent text-black opacity-50 block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-4 flex-auto overflow-y-scroll max-h-[calc(100%-112px)] sm:max-h-[400px] mb-14">
           {children}
          </div>
          {/*footer*/}
          <div className="absolute bottom-0 w-full bg-white flex items-center justify-end p-4 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleClose(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Popup;