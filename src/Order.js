import Card from "./components/Card";
import Badge from "./components/Badge";
import Button from './components/Button';
import './styles/Order.scss';


function Order({
  orderId, 
  isSameDay, 
  customerName, 
  isWithDriver, 
  phoneNumber, 
  pickupDate, 
  orderDate,
  onConfirm
}) {
  return (
    <Card>
      <p className='order-id'>{`Order ID: ${orderId}`}</p>
      <Badge text={isSameDay ? 'Pesan untuk Sekarang' : 'Pesanan Regular'} background={isSameDay ? 'bg-yellow-200' : 'bg-blue-200'} color={isSameDay ? 'text-red-600' : 'text-blue-700'}/>
      <p className='customer-name'>{customerName}</p>
      <p className='with-driver-status'>{isWithDriver ? `Dengan Sopir`: `Tanpa Sopir`} &#8226; {phoneNumber}</p>
      <p className='date'>Tanggal Pesan :{` ${orderDate}`}</p>
      <p className='date'>Tanggal Jemput :{` ${pickupDate}`}</p>
      <div className='footer'>
        <Button primary label="Konfirmasi" block onClick={() => onConfirm(orderId)}/>  
      </div>
    </Card>  
  ) 
}

export default Order;