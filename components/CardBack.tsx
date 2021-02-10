import { motion } from 'framer-motion';
import { ChangeEvent } from 'react';

interface ICardBack{
    creditCardNumber: string;
    functionToSetCreaditCardNumber(e: ChangeEvent<HTMLInputElement>): void;
    validateDate: string;
    functionToSetValidateDate(e: ChangeEvent<HTMLInputElement>): void;
    securityCod: string;
    functionToSetSecurityCod(e: ChangeEvent<HTMLInputElement>): void;
    isToFlip: boolean;
}

export default function CardBack({ creditCardNumber, validateDate, securityCod, functionToSetCreaditCardNumber, functionToSetSecurityCod, functionToSetValidateDate, isToFlip }: ICardBack){
    return(
        <motion.div initial={!!isToFlip ? {rotateY: 180} : {}} animate={!!isToFlip ? {rotateY: 0, scale: 1} : {}} transition={{duration: 1}} className="flex justify-start items-start flex-col w-92 md:w-96 h-48 md:h-52 bg-gradient-to-r from-purple-600 shadow-2xl rounded-xl py-5 mb-8">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="w-full h-12 bg-gradient-to-r from-gray-300 to-gray-400 mt-3"/>

            <motion.input 
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="bg-transparent text-xl mt-auto mx-4 md:ml-6 text-white mb-2 md:mb-4" 
                placeholder="0000 0000 0000 0000" 
                value={creditCardNumber}
                onChange={functionToSetCreaditCardNumber}/>
        
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="flex items-start justify-center">
                <div className="px-4 md:px-6 text-sm text-white flex items-start justify-start flex-col">
                    <p>Data de val:</p>

                    <input 
                      className="bg-transparent text-white text-sm placeholder-sm w-10" 
                      placeholder="03/24"
                      value={validateDate}
                      onChange={functionToSetValidateDate}
                    />
                </div>

                <div className="text-sm text-white flex items-start justify-start flex-col">
                    <p>Cód de segurança:</p>

                    <input 
                      className="bg-transparent text-white text-sm placeholder-sm w-10" 
                      placeholder="000"
                      value={securityCod}
                      onChange={functionToSetSecurityCod}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}