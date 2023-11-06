import { useContext, useState } from "react";
import { ReadWriteContext } from "../../components/Context/readWriteContext";

export default function JobRegister() {
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [modelyear, setModelYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [electricvehicletype, setElectricVehicleType] = useState("");
  const [cleanalternativefuelvehicleeligibility, setCleanAlternative] =
    useState("");
  const { carRegister } = useContext(ReadWriteContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !county ||
      !city ||
      !state ||
      !postalcode ||
      !modelyear ||
      !make ||
      !model ||
      !electricvehicletype ||
      !cleanalternativefuelvehicleeligibility
    ) {
      alert("preencha todos os campos");
    }

    const newCar = {
      county,
      city,
      state,
      postalcode,
      modelyear,
      make,
      model,
      electricvehicletype,
      cleanalternativefuelvehicleeligibility,
    };
    carRegister(newCar);
  }

  return (
    <>
      <div className="bg-azul-100  min-h-[calc(100vh)] flex justify-center items-center">
        <form
          className="w-5/6 h-5/6 sm:h-full md:h-5/6 lg:w-4/6 lg:h-5/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col ">
            <h1 className=" text-lg lg:text-2xl 2xl:text-3xl font-serif font-bold text-black self-center pb-2 xl:pb-4 pt-3 xl:pt-5">
              Cadastre seu Carro
            </h1>
          </div>
          <div className="flex flex-col 2xl:w-full ">
            <div className="flex justify-center 2xl:w-full">
              <div className="flex flex-col pr-6 md:pr-10 w-1/3">
                <label className=" text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg  font-serif font-bold">
                  County:
                </label>
                <input
                  type="text"
                  className="pl-2 w-full text-sm md:text-md p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setCounty(e.target.value)}
                  value={county}
                ></input>
              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg font-serif font-bold">
                  City:
                </label>
                <input
                  type="text"
                  className="w-5/6 md:w-full 2xl:w-full text-sm md:text-md  p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                ></input>
              </div>
            </div>{" "}
            <div className="flex items-center justify-center">
              <div className="flex flex-col pr-6 md:pr-10 w-1/3">
                <label className=" text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg  font-serif font-bold">
                  State:
                </label>
                <input
                  type="text"
                  className="pl-2 w-5/6 md:w-full text-sm md:text-md p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                ></input>
              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg font-serif font-bold">
                  PostalCode:
                </label>
                <input
                  type="text"
                  className="w-5/6 md:w-full text-sm md:text-md  p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setPostalCode(e.target.value)}
                  value={postalcode}
                ></input>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col pr-6 md:pr-10 w-1/3">
                <label className=" text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg  font-serif font-bold">
                  ModelYear:
                </label>
                <input
                  type="text"
                  className="pl-2 w-5/6 md:w-full text-sm md:text-md p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setModelYear(e.target.value)}
                  value={modelyear}
                ></input>
              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg font-serif font-bold">
                  Make:
                </label>
                <input
                  type="text"
                  className="w-5/6 md:w-full text-sm md:text-md  p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setMake(e.target.value)}
                  value={make}
                ></input>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col pr-6 md:pr-10 w-1/3">
                <label className=" text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg  font-serif font-bold">
                  Model:
                </label>
                <input
                  type="text"
                  className="pl-2 w-5/6 md:w-full text-sm md:text-md p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setModel(e.target.value)}
                  value={model}
                ></input>
              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg font-serif font-bold">
                  ElectricVehicleType:
                </label>
                <input
                  type="text"
                  className="w-5/6 md:w-full text-sm md:text-md  p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setElectricVehicleType(e.target.value)}
                  value={electricvehicletype}
                ></input>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-sm pt-3 md:pt-2 pb-2 md:pb-2 md:text-lg font-serif font-bold">
                CleanAlternative:
              </label>
              <input
                type="text"
                className="w-5/6 md:w-1/3 text-sm md:text-md  p-1 md:p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                onChange={(e) => setCleanAlternative(e.target.value)}
                value={cleanalternativefuelvehicleeligibility}
              ></input>
            </div>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-9">
              <button
                type={"submit"}
                className="py-3 px-8 md:py-4 md:px-10 rounded-xl bg-azul-100  text-xl font-serif font-semibold text-black uppercase hover:ring-4"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
