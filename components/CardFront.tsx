import { motion } from 'framer-motion';
import { ChangeEvent } from 'react';

interface ICardFront{
    isToFlip: boolean;
    name: string;
    functionToSetName(e: ChangeEvent<HTMLInputElement>): void;
}

export default function CardFront({ isToFlip, name, functionToSetName }: ICardFront){
    return(
        <motion.div initial={!!isToFlip ? {rotateY: 180} : {scale: 0.5}} animate={!!isToFlip ? {rotateY: 0, scale: 1} : {scale: 1}} transition={{duration: 1}} className="flex justify-start items-start flex-col w-92 md:w-96 h-48 md:h-52 bg-gradient-to-r from-purple-600 shadow-2xl rounded-xl py-5 px-4 md:px-6 mb-8">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="flex items-center justify-between w-full">
                <img className="h-14 md:h-19" src="assets/cardChip.png" alt="cardChip"/>

                <img className="h-8 md:h-19" src="assets/master-card-logo.png" alt="master-card-logo"/>
            </motion.div>

            <motion.input 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}} 
                className="mt-auto mb-6 ml-2 bg-transparent text-xl text-white placeholder-white placeholder-opacity-25 border-0" 
                placeholder="JOHN DOE DA SILVA"
                value={name}
                onChange={functionToSetName}
            />
        </motion.div> 
    );
}