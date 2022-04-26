import Button from "./components/Button";

function Filter(){
  return (
    <form className="w-full">
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-first-name">
            Order ID
          </label>
          <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="78929019" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-city">
            Nama Pemesan
          </label>
          <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="John Doe" />
        </div>
        
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-zip">
            Merk Kendaraan
          </label>
          <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Mitshubisi" />
        </div>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-state">
            Tipe Pesanan
          </label>
          <div className="relative">
            <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-500" id="grid-state">
              <option>Dengan Sopir</option>
              <option>Tanpa Sopir</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-state">
            Urutkan
          </label>
          <div className="relative">
            <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-500" id="grid-state">
              <option>Tanggal Pesan paling awal</option>
              <option>Tanggal Jemput paling dekat</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:justify-end px-3 sm:p-0 first:mb-2 first:sm:mr-2">
        <Button secondary label="Reset" onClick={() => {}}/>  
        <div className="my-2 sm:mx-2"/>
        <Button primary label="Cari" onClick={() => {}}/>  
      </div>
    </form>
  )
}

export default Filter;