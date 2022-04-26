import { useState, useEffect } from 'react';
import queryString from 'query-string';

import Badge from './components/Badge';
import Button from './components/Button';
import Tab from './components/Tab';
import Popup from './components/Popup';


import Order from './Order';
import OrderDetail from './OrderDetail';
import Filter from './Filter';
import './App.scss';

function App() {
  const [dataList, setDataList] = useState([]);
  const [dataOrderDetail, setDataOrderDetail] = useState({});
  const [orderStatus, setOrderStatus] = useState('ALL');
  const [activeModal, setActiveModal] = useState('');
  const [openFilter, setOpenFilter] = useState(false);


  const tabConfig = [
    {
      title: 'Semua Pesanan',
      value: 'ALL'
    },
    {
      title: 'Pesanan Baru',
      value: 'WAITING_CONFIRMATION'
    },
    {
      title: 'Siap Berangkat',
      value: 'READY_GO'
    },

  ]

  useEffect(() => {
    handleFetchList({orderStatus: 'ALL'});
  }, []);

  const handleFetchList = async (params={}) => {
    const qsParams = params ? `?${queryString.stringify(params)}` : '';
    
    try {
      const response = await fetch(`http://localhost:3001/orderCar/order-list${qsParams}`);
      const result = await response.json();
      console.log('result: ', result);
      
      if (result.data.code === 'SUCCESS'){
        setDataList(result.data.data.content);
      }
    } catch (err){
      console.log('err', err);
    }
  }

  const handleFetchOrderDetail = async (orderId='') => {
    try {
      const response = await fetch(`http://localhost:3001/orderCar/confirm-order/detail/${orderId}`);
      const result = await response.json();
      
      if (result.code === 'SUCCESS'){
        setDataOrderDetail(result.data);
      }
    } catch (err){
      console.log('err', err);
    }
  }

  const handleChangeTab = tabActive => {
    const params = {
      page: 0,
      size: 10, 
      orderStatus: tabActive
    }

    handleFetchList(params);
    setOrderStatus(tabActive);
  }

  const handleConfirmation = async (orderId) => {
    await handleFetchOrderDetail(orderId);
    handleOpenPopup(orderId);
  }

  const handleOpenPopup = (orderId) => {
    setActiveModal(orderId);
    document.body.classList.add('overflow-hidden'); 
  }

  const handleClosePopup = () => {
    setActiveModal('');
    document.body.classList.remove('overflow-hidden');
  }

  const handleOpenFilter = () => {
    setOpenFilter(true)
  };

  const handleCloseFilter = () => {
    setOpenFilter(false)
  };

  return (
    <div className='App'>
      <div className='sm:p-6 bg-white'>
        <div className='hidden sm:block'>
          <Filter />
        </div>
        <Tab activeTab={orderStatus} onClickTab={handleChangeTab}>
          {
            tabConfig.map((tab, idx) => {
              return (
                <Tab.TabPane key={`tabpane-${idx}`} tab={tab} >
                  <div className='list-wrapper block sm:hidden'>
                    {
                      dataList.map(item => {
                        const {orderId, isSameDay, customerName, isWithDriver, phoneNumber, pickupDate, orderDate } = item;
                        return (
                          <Order 
                            orderId={orderId}
                            isSameDay={isSameDay}
                            customerName={customerName}
                            isWithDriver={isWithDriver}
                            phoneNumber={phoneNumber}
                            pickupDate={pickupDate}
                            orderDate={orderDate}
                            onConfirm={handleConfirmation}
                          />
                        )
                      })
                    }
                    <div className='sticky bottom-[12px] z-50 m-auto w-fit min-w-[100px] bg-blue-400 my-2 p-2 text-white rounded-xl text-center' onClick={handleOpenFilter}>Filter</div>
                  </div>
                  <div className='my-4 hidden sm:block'>
                    <div className='overflow-auto rounded-lg shadow border border-gray-200'>
                      <table className="text-xs sm:text-sm w-full">
                        <thead className="border-b-2 border-gray-300 text-left">
                          <tr>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">No.</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Order ID</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Tipe Pesanan</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Tanggal Pesan</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Tanggal & Waktu Jemput</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Nama Pemesan</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Nomor Ponsel</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Email Pemesan</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Transmisi Mobil</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Merk Kendaraan</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Lama Waktu Sewa</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Wilayah</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Tempat Jemput</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Area Pickup</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Area Pemakaian</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Area Drop-off</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Catatan</th>
                            <th className="p-3 font-semibold tracking-wide whitespace-nowrap">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                        {
                          dataList.map((item, idx) => {
                            const {orderId, isSameDay, customerName, isWithDriver, phoneNumber, pickupDate, orderDate, pickupTime, email, transmissionType, brandName, duration, regionalName, addressPickup, pickupZone, usedZone, dropOffZone, note } = item;
                            const isEven = (idx % 2) === 0; 

                            return (
                              <tr className={isEven ? 'bg-gray-50': ''}>
                                <td className="p-3 tracking-wide">{`${idx+1}.`}</td>
                                <td className="p-3 tracking-wide">{orderId}</td>
                                <td className="min-w-[150px] p-3 tracking-wide">
                                  <span>{isWithDriver ? 'Dengan Sopir' : 'Tanpa Sopir'}</span>
                                  <Badge text={isSameDay ? 'Pesan untuk Sekarang' : 'Pesanan Regular'} background={isSameDay ? 'bg-yellow-200' : 'bg-blue-200'} color={isSameDay ? 'text-red-600' : 'text-blue-700'}/>
                                </td>
                                <td className="p-3 tracking-wide">{orderDate}</td>
                                <td className="p-3 tracking-wide">{`${pickupDate} ${pickupTime}`}</td>
                                <td className="min-w-[150px] p-3 tracking-wide whitespace-nowrap">{customerName}</td>
                                <td className="p-3 tracking-wide">{phoneNumber}</td>
                                <td className="min-w-[180px] p-3 tracking-wide">{email}</td>
                                <td className="p-3 tracking-wide">{transmissionType}</td>
                                <td className="p-3 tracking-wide">{brandName}</td>
                                <td className="p-3 tracking-wide">{`${duration} Hari`}</td>
                                <td className="p-3 tracking-wide">{regionalName}</td>
                                <td className="p-3 tracking-wide min-w-[350px]">{addressPickup}</td>
                                <td className="p-3 tracking-wide min-w-[350px]">{pickupZone}</td>
                                <td className="p-3 tracking-wide min-w-[350px]">{usedZone}</td>
                                <td className="p-3 tracking-wide min-w-[350px]">{dropOffZone}</td>
                                <td className="p-3 tracking-wide min-w-[150px]">{note}</td>
                                <td className="p-3 tracking-wide min-w-[150px]"><Button primary label="Konfirmasi" block onClick={() => handleConfirmation(orderId)}/></td>
                              </tr>
                            )
                          })
                        }
                        </tbody>
                      </table>
                    </div>  
                  </div>
                </Tab.TabPane>
              )
            })
          }
        </Tab>
      </div>
      { activeModal ? <OrderDetail data={dataOrderDetail} onClose={handleClosePopup}/> : null}
      { openFilter ? <Popup title="Filter" handleClose={handleCloseFilter}><Filter/></Popup> : null}

    </div>
  );
}

export default App;
