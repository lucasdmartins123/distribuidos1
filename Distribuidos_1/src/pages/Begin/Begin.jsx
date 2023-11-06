import { Link } from "react-router-dom";

export default function Begin() {
  return (
    <>
      <div className="m1-6 bg-azul-100 opacity-100 h-screen flex justify-center items-center">
        <form className=" w-2/6 lg:w-4/6 xl:w-3/6 2xl:h-2/6 2xl:w-2/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col">
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-9">
              <Link to="/read">
                <button className="py-5 px-16 2xl:py-6 2xl:px-40 2xl:mt-4 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-8">
                  Ver carros
                </button>
              </Link>
            </div>
            <div className="pt-9">
              <Link to="/write">
                <button className="py-5 px-16 2xl:py-6 2xl:px-32 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-8">
                  Adicionar Carro
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
