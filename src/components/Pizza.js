import myImage from '../assets/pizza.png'
import myImage2 from '../assets/pizza2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesRectangle, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Pizza({ variant, price }) {

  let className = 'container';

  if (variant === '1') {
    className += ' 1';
  } else if (variant === '2') {
    className += ' 2';
  }


  let [count, setCount] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(true);

  function handleAdd() {
    setCount(count + 1)
    if (count + 1) {
      setTotalPrice(parseFloat((totalPrice + price).toFixed(2)))
    }

  }
  function handleSub() {
    setCount(count - 1)
    setTotalPrice(parseFloat((totalPrice - price).toFixed(2)))
    if (count <= 0) {
      setCount(count = 0)
      setTotalPrice(totalPrice = 0)
    }
  }
  return (
    <div className={className}>
      <div>
        <button onClick={() => setShow(!show)} className='toggle-button'>
          {show ? <FontAwesomeIcon icon={faTimesRectangle} style={{ fontSize: "24px" }} /> : <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "24px" }} />}
        </button>
        {show && variant === '1' && (
          <div>
            <img src={myImage} alt="" className='pizza' />
            <p className='p-title'>Pizza Margherita 15,90 €</p>
            <p className='p-price'>{totalPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>

            <p className='info-p'>mit Tomatensauce und Käse</p>
            <p className='p-button'>
              <button className='add' onClick={handleAdd}>Hinzufügen</button>
              {count}
              <button className='sub' onClick={handleSub}>Entfernen</button>
            </p>
          </div>)}

      </div>
      {show && variant === '2' && (
        <div className='box-1'>
          <img src={myImage2} alt="" className='pizza2' />
          <p className='p-title'>Pizza Rustica 16,50 €</p>
          <p className='p-price'>{totalPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
          <p className='info-p'>mit Rucola, Kirschtomaten und Grana  Padano</p>
          <p className='p-button'>
            <button className='add' onClick={handleAdd}>Hinzufügen</button>
            {count}
            <button className='sub' onClick={handleSub}>Entfernen</button>
          </p>
        </div>)}
    </div>
  );
}

export default Pizza;