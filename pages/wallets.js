import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Pluse from '../assets/img/pluse.svg'
import Lock from '../assets/img/lock.svg'
import View from '../assets/img/viewlogo.svg'
import Edit from '../assets/img/editlogo.svg'
import Delete from '../assets/img/delete.svg'

const Wallets = () => {
  return (

    <div className='md:pt-8 md:px-[102px] px-4 pt-5'>
        <div className='flex items-center justify-between'>
          <div className="">
            <h2 className='xl:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue'>Wallets</h2>
          </div>
          <div className="add-btn flex">
            <button className='wallet-btn justify-center md:mr-[14px] md:!px-[23px] !px-0 flex items-center md:w-auto w-[82px]'>
              <Image src={Pluse} alt="" /> 
              <span className='md:ml-3 ml-[7px] md:text-base text-[10px]'>
              Add wallet
              </span>
            </button>
            <button className='wallet-btn items-center md:block hidden'>
              <Image src={Pluse} alt="" /> 
              <span className='ml-3'>
              Create Multisig Wallet
              </span>
            </button>
          </div>
        </div>
        <div className='border-gray300 md:mt-[30px] mt-5 border rounded-[10px] my-4 overflow-x-auto '>
          <div className='data-table md:p-4 p-5 pt-3 w-full text-left'>
            <div className='inline-flex w-full border-b border-white100 justify-between'> 
              <div className='sm:w-[370px] w-[120px]'>
                <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Address</h3>
              </div>
              <div className='w-[88px] md:block hidden'>
                <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Type</h3>
              </div>
              <div className='w-[100px] md:block hidden'>
                <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Chain</h3>
              </div>
              <div className='md:w-[283px] w-[97px]'>
                <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Manage</h3>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x65A12C313fE8d5bC33255178fe5f874DA43F6P06</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
                <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x7915a6eb0403e0715e9d2a5c097aa709b35bd896</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light flex items-center'>Multisig <span className='ml-3'><Image src={Lock} alt="" /></span></p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Arbidivum</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x86c4A74e1283AA79504183A8DAF1B4F4D424b9F7</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Polygon</p></div>
              <div>
              <div className="flex">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px]'><span  className='md:hidden block'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]'><span  className='md:hidden block'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn  flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]'><span  className='md:hidden block'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0xCC5596Fb286aac19729cFecc855F37Fb09080ef2</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x6d2e03b7EfFEae98BD302A9F836D0d6Ab0002766</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light flex items-center'>Multisig <span className='ml-3'><Image src={Lock} alt="" /></span></p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Polygon</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0xaaBAd1670BB8540b5869D3223EB83Ae7608c182D</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x36363dd904136808E88ea604c33f7EA4e073d80e</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light flex items-center'>Multisig <span className='ml-3'><Image src={Lock} alt="" /></span></p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Arbidivum</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x36363dd904136808E88ea604c33f7EA4e073d80e</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Arbidivum</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between pt-[25px]'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={View} alt="" /></span><span className='md:block hidden'>View</span></button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Edit} alt="" /></span><span className='md:block hidden'>Edit</span></button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px]'><span  className='md:hidden block -mb-1'><Image src={Delete} alt="" /></span><span className='md:block hidden'>Delete</span></button>
                </div>
              </div>
            </div>
          </div> 
        </div>
    </div>  

  )
}

export default Wallets