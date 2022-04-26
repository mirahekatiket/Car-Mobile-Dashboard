import Popup from "./components/Popup";
import Badge from "./components/Badge";

function OrderDetail({data, onClose}){
  const { monolithOrderId, orderDate, carName, carImage, addressPickup, addressDropOff, pickupDate, pickupTime, dropOffDate, dropOffTime, isWithDriver, duration, rentalArea, specialRequest, specialNote, customerName, phoneNumber, email } = data;
  return(
    <Popup title={'Car E-Voucher'} handleClose={onClose}>
      <div className="flex flex-col text-base">
        <div className="flex flex-col sm:flex-row md:justify-between md:items-center">
          <span className="font-semibold" style={{color: '#007BFF'}}>Order ID #{monolithOrderId}</span>
          <Badge text={`Tanggal Pesan : ${orderDate}`} background={'bg-blue-200'} color={'text-blue-700'}/>
        </div>
          
        <div className="my-4 flex flex-col sm:flex-row items-center sm:items-start">
          <div className="sm:mr-4">
            <img className="h-20 w-32" src={carImage} alt="car"/>
          </div>
          <div className="sm:max-w-[calc(100%-144px)]">
            <p className="font-semibold text-center sm:text-left">{carName}</p>
            <div className="flex mt-4">
              <div className="flex flex-col items-center mr-4">
                <div className="w-3 h-3 bg-blue-700 rounded-full my-2"></div>
                <div className="h-24 w-[1px] bg-gray-300"></div>
                <div className="w-3 h-3 border border-gray-300 rounded-full my-2"></div>
              </div>
              <div>
                <div className="sm:flex sm:flex-row-reverse">
                  <p className="text-sm font-semibold">{addressPickup}</p>
                  <div className="text-xs sm:w-[150px] sm:mr-2">
                    <p>{pickupDate}</p>
                    <p>{pickupTime}</p>
                  </div>
                </div>
                <div className="sm:flex sm:flex-row-reverse mt-[50px] sm:mt-[85px]">
                  <p className="text-sm font-semibold">{addressPickup}</p>
                  <div className="text-xs sm:w-[150px] sm:mr-2">
                    <p>{dropOffDate}</p>
                    <p>{dropOffTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] border border-gray-300 rounded-md p-3 mt-4 overflow-y-scroll">
          <p className="font-semibold text-sm sm:text-base">Detail Pesanan</p>
          <div className="my-2 overflow-auto rounded-lg shadow">
            <table className="text-xs sm:text-sm w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-300 text-left">
                <tr>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">Tipe Sewa Mobil</th>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">Durasi</th>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">Area Sewa</th>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">Permintaan Khusus</th>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">Catatan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-20p-1 sm:p-3 tracking-wide">{isWithDriver ? 'Dengan Supir': 'Tanpa Supir'}</td>
                  <td className="w-20 p-1 sm:p-3 tracking-wide">{`${duration} Hari`}</td>
                  <td className="p-1 sm:p-3 tracking-wide">{rentalArea}</td>
                  <td className="p-1 sm:p-3 tracking-wide">{specialRequest}</td>
                  <td className="p-1 sm:p-3 tracking-wide">{specialNote}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm font-semibold">Detail Pemesan</p>
          <div className="mt-2 overflow-auto rounded-lg shadow">
            <table className="text-xs sm:text-sm w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-300 text-left">
                <tr>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">Nama</th>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">No Telp</th>
                  <th className="p-1 sm:p-3 font-semibold tracking-wide">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 sm:p-3 tracking-wide">{customerName}</td>
                  <td className="p-1 sm:p-3 tracking-wide">{phoneNumber}</td>
                  <td className="p-1 sm:p-3 tracking-wide">{email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default OrderDetail;