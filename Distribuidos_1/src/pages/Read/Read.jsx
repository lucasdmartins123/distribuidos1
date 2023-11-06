import { useState, useRef, useContext, useEffect, useMemo } from "react";
import { BsCalendarDate, BsFillGeoAltFill, BsStack } from "react-icons/bs";
import { MdOutlineAttachMoney, MdOutlineDescription } from "react-icons/md";

import { ReadWriteContext } from "../../components/Context/readWriteContext";

export default function Read() {
  const { carsList } = useContext(ReadWriteContext);
  const reversedCarsList = [...carsList].reverse();

  return (
    <>
      <div className="bg-azul-100  flex flex-col items-center  min-h-[calc(100vh-64px)]">
        <div className="bg-gray-200 mt-6 mb-6 px-8 flex flex-col justify-center items-center shadow-md shadow-black rounded-lg w-2/3 ">
          <div className="pt-2 grid grid-cols-4 w-full ">
            {reversedCarsList.map((car, index) => (
              <div className="pt-5 pb-5  flex flex-col pr-3 " key={index}>
                <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 rounded-md shadow-md  shadow-black p-3 mb-1">
                  {car.model}
                </h1>
                <div className="bg-white rounded-xl text-base font-sans font-bold px-5 py-4 shadow-md shadow-black ">
                  <div className="pb-2 pt-2 ">
                    <BsFillGeoAltFill size={18} className="absolute" />
                    <p className="px-6 ">City: {car.city}</p>
                  </div>
                  <div className="pb-2">
                    <BsFillGeoAltFill size={18} className="absolute" />
                    <p className="px-6">State: {car.state}</p>
                  </div>
                  <div className="pb-2">
                    <MdOutlineDescription size={20} className="absolute" />
                    <p className="px-6">Brand: {car.make}</p>
                  </div>
                  <div className="pb-2">
                    <BsFillGeoAltFill size={18} className="absolute" />
                    <p className="px-6">County: {car.county}</p>
                  </div>
                  <div className="pb-2">
                    <MdOutlineDescription size={18} className="absolute" />
                    <p className="px-6">PostalCode: {car.postalcode}</p>
                  </div>
                  <div className="pb-2">
                    <MdOutlineDescription size={18} className="absolute" />
                    <p className="px-6">Type: {car.electricvehicletype}</p>
                  </div>

                  <div className="pb-2">
                    <MdOutlineDescription size={18} className="absolute" />
                    <p className="px-6">
                      Clean Alternative:{" "}
                      {car.cleanalternativefuelvehicleeligibility}
                    </p>
                  </div>
                  <div className="pb-2">
                    <BsCalendarDate size={18} className="absolute" />
                    <p className="px-6">Model Year: {car.modelyear}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
