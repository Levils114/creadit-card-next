import { useCallback, useState,ChangeEvent } from 'react';

import CardBack from '../components/CardBack';
import CardFront from './../components/CardFront';

import { motion } from 'framer-motion';

import { MdRotateRight } from 'react-icons/md';

export default function Home() {
  const [showCardBack, setShowCardBack] = useState(false);

  const [name, setName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [validateDate, setValidateDate] = useState('');
  const [securityCod, setSecurityCod] = useState('');

  const [isToFlip, setIsToFlip] = useState(false);

  const handleChangeCreditCardNumber = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const formatNumber = Number(event.target.value.replaceAll(' ', ''));

    if(!!Number.isNaN(formatNumber)){
      return;
    }

    if(event.target.value.length === 4 || event.target.value.length === 9 || event.target.value.length === 14){
      return setCreditCardNumber(`${event.target.value} `)
    };

    if(event.target.value.length === 20){
      return;
    }

    setCreditCardNumber(event.target.value);
  }, []);

  const handleChangeValidateDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const formatNumber = Number(event.target.value.replaceAll('/', ''));

    if(!!Number.isNaN(formatNumber)){
      return;
    }

    if(event.target.value.length === 2){
      return setValidateDate(`${event.target.value}/`);
    }

    if(event.target.value.length === 6){
      return;
    }

    setValidateDate(event.target.value);
  }, []);

  const handleChangeSecurityCod = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const formatNumber = Number(event.target.value);

    if(!!Number.isNaN(formatNumber)){
      return;
    }

    if(event.target.value.length === 4){
      return;
    }

    setSecurityCod(event.target.value);
  }, []);

  const handleSetName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.toLocaleUpperCase());
  }, []);

  return (
    <div className="w-screen h-screen bg-purple-700 flex items-center justify-center flex-col">
      {!showCardBack ? (
        <CardFront functionToSetName={(e) => handleSetName(e)} name={name} isToFlip={isToFlip}/>
      ) : (
        <CardBack 
          functionToSetCreaditCardNumber={(e) => handleChangeCreditCardNumber(e)}
          functionToSetValidateDate={(e) => handleChangeValidateDate(e)}
          functionToSetSecurityCod={(e) => handleChangeSecurityCod(e)}
          creditCardNumber={creditCardNumber}
          validateDate={validateDate}
          securityCod={securityCod}
          isToFlip={isToFlip}
        />
      )}
    
      <motion.div initial={!!isToFlip ? {opacity: 0} : {opacity: 1}} animate={!isToFlip ? {opacity: [0,1]} : {}} transition={{duration: 1}} className="w-92 md:w-96 flex items-end justify-end ml-64 md:ml-0 md:pr-1">
        <button onClick={() => {
            setShowCardBack(!showCardBack)
            setIsToFlip(true)
          }}>
          <MdRotateRight size={26} color="#FFFFFF"/>
        </button>
      </motion.div>
    </div>
  )
}
