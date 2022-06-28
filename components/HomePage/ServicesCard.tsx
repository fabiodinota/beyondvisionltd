import React from 'react'
import Image from 'next/image'
import PhoneIcon from '../../public/images/ServicesCardAssets/PhoneIcon.png'
import CareerIcon from '../../public/images/ServicesCardAssets/CareerIcon.png'
import ContractIcon from '../../public/images/ServicesCardAssets/ContractIcon.png'
import AppearancesIcon from '../../public/images/ServicesCardAssets/AppearancesIcon.png'
import SalesIcon from '../../public/images/ServicesCardAssets/SalesIcon.png'
import RelationsIcon from '../../public/images/ServicesCardAssets/RelationsIcon.png'


const ServicesCard = () => {
  return (
    <>
    <div className=' rounded-3xl grid-container max-w-[1220px] w-[90%] bg-backgroundaccent h-[1700px] md:h-[1000px] 1xl:h-[720px] grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 1xl:grid-cols-3 1xl:grid-rows-2 gap-10 p-10 place-items-center'>
            <div className='rounded-3xl w-full h-full flex justify-center items-center  flex-col bg-background'>
                    <div className=' w-[64px] py-10 h-auto'>
                        <Image layout='responsive' src={PhoneIcon} alt="image"/>
                    </div>
                <h3 className='text[20px] text-text'>Social Media Management</h3>
                <p className='text-textaccent pb-10 text-center w-[320px] 1xl:w-full px-5 text-[13px]'>TikTok | Instagram | Twitch  
Snapchat | Twitter</p>
            </div>
            <div className='rounded-3xl w-full  h-full flex justify-center items-center flex-col bg-background'>
            <div className=' w-[64px] py-10 h-auto'>
                        <Image layout='responsive' src={CareerIcon} alt="image"/>
                    </div>
                <h3 className='text[20px] text-text'>Career Management</h3>
                <p className='text-textaccent pb-10 text-center w-[320px] 1xl:w-full px-5 text-[13px]'>We plan long-term goals and create new ambitions for you to meet short-term while guiding you throughout the process.

</p>
            </div>
            <div className='rounded-3xl  w-full  h-full flex justify-center items-center flex-col bg-background'>
            <div className=' w-[64px] py-10 h-auto'>
                        <Image layout='responsive' src={ContractIcon} alt="image"/>
                    </div>
                <h3 className='text[20px] text-text'>Contract Management</h3>
                <p className='text-textaccent pb-10 text-center w-[320px] 1xl:w-full px-5 text-[13px]'>We will handle any negotiation talks on your behalf with your goals in mind to bring you the best possible deals.</p>
            </div>
            <div className='rounded-3xl  w-full  h-full flex justify-center items-center flex-col bg-background'>
            <div className=' w-[64px] py-10 h-auto'>
                        <Image layout='responsive' src={AppearancesIcon} alt="image"/>
                    </div>
                <h3 className='text[20px] text-text'>Public Appearances</h3>
                <p className='text-textaccent pb-10 text-center w-[320px] 1xl:w-full px-5 text-[13px]'>We will bring you unique and exquisite in-person opportunities to further your career in the public eye.</p>
            </div>
            <div className='rounded-3xl  w-full  h-full flex justify-center items-center flex-col bg-background'>
            <div className=' w-[64px] py-10 h-auto'>
                        <Image layout='responsive' src={SalesIcon} alt="image"/>
                    </div>
                <h3 className='text[20px] text-text'>Sales and Marketing</h3>
                <p className='text-textaccent pb-14 md:pb-10 text-center w-[320px] 1xl:w-full px-5 text-[13px]'>We will handle all the marketing needs associated with your career and asses them to generate an established and stabilized income.</p>
            </div>
            <div className='rounded-3xl w-full   h-full flex justify-center items-center flex-col bg-background'>
            <div className=' w-[64px] py-10 h-auto'>
                        <Image layout='responsive' src={RelationsIcon} alt="image"/>
                    </div>
                <h3 className='text[20px] text-text'>Public Relations</h3>
                <p className='text-textaccent pb-10 text-center w-[320px] 1xl:w-full px-5 text-[13px]'>We will maintain a strong and exemplary image of you in the public eye.
</p>
            </div>
        </div>
      
    </>
  )
}

export default ServicesCard