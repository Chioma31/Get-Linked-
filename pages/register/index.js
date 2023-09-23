import NavBar from "@/components/navbar";
import { IoIosArrowDown } from "react-icons/io"
import { PiStarFourFill } from "react-icons/pi"
import Image from "next/image";
import { useState } from "react";
import ConfirmationPopUp from "@/components/confirmation";


const RegisterPage =()=> {

    const [showModal , setShowModal] = useState(false);

    const toggleModal =(e)=> {

        e.preventDefault();

        setShowModal (prevState => !prevState);
        
    }

    const overflow = showModal? "documents.body.style.overflow:hidden" : "documents.body.style.overflow:auto"


   return (    
            
            <div className= {`w-full bg-[url('/Contact.svg')] bg-cover` }>
                <div className="hidden lg:flex"><NavBar/></div>
            
                <div className="hidden lg:flex h-[94px]"/>

                    <div className="absolute animate-pulse flex inset-y-0 top-[26%] left-[90%] lg:top-[18%] lg:left-[8%] opacity-75 w-fit h-fit"><PiStarFourFill className=" lg:text-3xl text-accent"/></div>
                    <div className="absolute animate-pulse flex inset-y-0 top-[70%] left-[80%]lg:top-[25%] lg:left-[80%] opacity-50 w-fit h-fit"><PiStarFourFill className=" text-lg lg:text-2xl text-white opacity-50"/></div>
                    <div className="absolute animate-pulse flex inset-x-0  top-[90%] left-[95%] lg:top-[70%] lg:left-[40%] opacity-75 w-fit h-fit"><PiStarFourFill className=" lg:text-4xl text-accent"/></div>
                    <div className="absolute animate-pulse hidden lg:flex inset-x-0 lg:top-[94%] lg:left-[85%] opacity-100 w-fit h-fit"><PiStarFourFill className=" text-xl text-white"/></div>
                    <div className="absolute animate-pulse hidden lg:flex inset-x-0 lg:top-[73%] lg:left-[10%] opacity-75 w-fit h-fit"><PiStarFourFill className=" text-xl text-white"/></div>

                
                <div className="flex flex-col lg:flex lg:flex-row w-full px-8 py-8 lg:px-20 lg:mt-20 ">

                    <h4 className="flex lg:hidden font-clash-display font-bold text-2xl text-accent my-8">Register</h4>
                    
                    <div className="flex flex-col flex-[0.4] h-fit justify-center items-center">
                        <Image
                            className="hidden lg:block"
                            height={717}
                            width={717}
                            src="/Graphics-designer.svg"
                            alt="title"
                        />

                        <Image
                            className="block lg:hidden"
                            height={200}
                            width={200}
                            src="/Graphics-designer.svg"
                            alt="title"
                        />
                    </div>

                    <div className="flex flex-col w-full lg:flex-[0.6] justify-center items-center">
                        <div className="flex flex-col w-full lg:max-w-3xl bg-white bg-opacity-0 lg:bg-opacity-5 drop-shadow-lg rounded-xl">
                            <div className="flex flex-col lg:px-16 py-12 gap-7">
                                <div className="flex flex-col justify-between gap-5">
                                    <h4 className="hidden lg:flex font-clash-display font-semibold text-accent text-[32px]">Register</h4>
                                    <div className="inline-flex justify-start gap-2">
                                        <h4 className="flex self-end w-fit font-montserrat text-xs text-white font-normal text-left tracking-widest">Be part of the movement!</h4> 
                                        <div className="flex flex-col">
                                            <div className=" w-[100px] h-fit flex  justify-center gap-2 border-b border-accent border-dashed">
                                                <Image className=""
                                                    height={23}
                                                    width={23}
                                                    src="/woman.svg"
                                                    alt=""
                                                />
                                                <Image className=""
                                                    height={26}
                                                    width={26}
                                                    src="/Man.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-white font-montserrat text-2xl font-normal">CREATE YOUR ACCOUNT</div>
                                </div>
                                <form className="flex flex-col justify-between gap-8">
                                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                                        <div className="flex flex-col flex-1">
                                            <label className="font-montserrat font-normal text-white text-sm">Team's Name</label>
                                            <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm ow border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base placeholder:opacity-25"
                                                type="text"
                                                placeholder="Enter the name of your group"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="font-montserrat font-normal text-white text-sm">Phone</label>
                                            <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm ow border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base placeholder:opacity-25"
                                                type="text"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                                        <div className="flex flex-col flex-1">
                                            <label className="font-montserrat font-normal text-white text-sm">Email</label>
                                            <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm ow border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base placeholder:opacity-25"
                                                type="text"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="font-montserrat font-normal text-white text-sm">Project topic</label>
                                            <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm ow border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base placeholder:opacity-25"
                                                type="text"
                                                placeholder="What is your group project topic"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-4">
                                        <div className="flex flex-col flex-[0.7] lg:flex-1 ">
                                            <label className="font-montserrat font-normal text-white text-sm">Category</label>
                                            <div className=" flex justify-between items-center px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm border-2 border-white ">
                                                <div className="text-white font-montserrat font-normal text-xs lg:text-sm">Select your category</div>
                                                <IoIosArrowDown className="text-white text-base"/>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-[0.3] lg:flex-1 ">
                                            <label className="font-montserrat font-normal text-white text-sm">Group size</label>
                                            <div className=" flex justify-between items-center px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm border-2 border-white">
                                                <div className="text-white font-montserrat font-normal text-sm">Select</div>
                                                <IoIosArrowDown className="text-white text-base"/>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="flex text-xs font-montserrat font-normal text-[#FF26B9] italics">Please review your registration details before submitting</p>
                                    <div className="inline-flex">
                                        <input className="mr-2 opacity-35" type="checkbox" />
                                        <div className="text-white font-montserrat font-normal text-sm">I agree with the event terms and conditions and privacy policy</div>
                                    </div>

                                        <button onClick={toggleModal} 
                                            className="hidden lg:flex self-center justify-center w-full py-6 rounded-s bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] text-base font-montserrat font-normal text-white">
                                            Register your account
                                        </button>
                                        <button onClick={toggleModal}
                                            className="flex lg:hidden self-center justify-center w-[172px] py-6 rounded-s bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] text-base font-montserrat font-normal text-white">
                                            Submit
                                        </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <ConfirmationPopUp isVisible={showModal} onClose={toggleModal} />
            </div>
   )
}

export default RegisterPage;