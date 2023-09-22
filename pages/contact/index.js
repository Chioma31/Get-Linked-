import NavBar from "@/components/navbar";
import {RiTwitterXLine , RiInstagramLine, } from "react-icons/ri"
import {BiLogoFacebook, BiLogoLinkedin} from "react-icons/bi"
import { IoIosArrowBack } from "react-icons/io"
import { PiStarFourFill } from "react-icons/pi"



const contactPage = ()=> {
    
    return(
        <>

            <div className= " w-full h-[100vh] bg-[url('/Contact.svg')] bg-cover">
                <div className="hidden lg:flex"><NavBar/></div>
                
                <div className="hidden lg:flex h-[94px]"/>

                        <div className="absolute hidden lg:flex inset-y-0 top-[15%] left-[8%] opacity-50 w-fit h-fit"><PiStarFourFill className=" text-3xl text-accent"/></div>
                        <div className="absolute hidden lg:flex inset-y-0 top-[15%] left-[84%] opacity-50 w-fit h-fit"><PiStarFourFill className=" text-2xl text-gray-400"/></div>
                        <div className="absolute hidden lg:flex inset-x-0 top-[60%] left-[54.2%] opacity-75 w-fit h-fit"><PiStarFourFill className=" text-4xl text-accent"/></div>
                        <div className="absolute hidden lg:flex inset-x-0 top-[75%] left-[90%] opacity-50 w-fit h-fit"><PiStarFourFill className=" text-3xl text-white"/></div>

                <div className="hidden lg:flex w-full lg:px-40 mt-20 ">
                    
                    <div className="flex flex-col flex-1 h-fit justify-center">
                        <div className="flex flex-col justify-evenly gap-8">
                            <h4 className="font-clash-display font-semibold text-3.5xl text-accent">Get in touch</h4>
                            <div className="flex flex-col justify-between gap-6">
                                <h4 className="inline-flex font-montserrat font-normal text-base text-white tracking-wider">Contact <br/> Information</h4>
                                <h4 className="inline-flex font-montserrat font-normal text-base text-white tracking-wider">27, Alara Street <br/> Yaba 100012 <br/> Lagos State</h4>
                                <h4 className="inline-flex font-montserrat font-normal text-base text-white tracking-wider">Call Us: 07067981819</h4>
                                <h4 className="inline-flex font-montserrat font-normal text-base text-white tracking-wider">we are open from Monday-Friday <br/> 08:00am - 05:00pm </h4>
                            </div>

                            <div className="flex flex-col justify-between gap-4">
                                <h4 className="font-montserrat font-normal text-base text-accent tracking-wider">Share on</h4>
                                <span className="inline-flex gap-6 w-fit">
                                    <RiInstagramLine className="text-2xl text-white"/>
                                    <RiTwitterXLine className="text-2xl text-white"/>
                                    <BiLogoFacebook className="text-2xl text-white"/>
                                    <BiLogoLinkedin className="text-2xl text-white"/>
                                </span>
                            </div> 
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex flex-col w-full lg:max-w-xl bg-white bg-opacity-5 drop-shadow-lg rounded-xl">
                            <div className="flex flex-col px-16 py-12 gap-6">
                                <div className="flex flex-col justify-between">
                                    <h4 className="font-clash-display font-semibold text-accent text-xl">Questions or need assistance?</h4>
                                    <h4 className="font-clash-display font-semibold text-accent text-xl">Let us Know about it!</h4>
                                </div>
                                <form className="flex flex-col justify-between gap-8">
                                    <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm ow border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base"
                                        type="text"
                                        placeholder="Mail"
                                    />

                                    <textarea className=" flex flex-col pt-4 px-7 rounded-md w-full h-[119px] bg-white bg-opacity-5 drop-shadow-sm border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base"
                                        placeholder="Message"
                                    />


                                    <button className="flex self-center justify-center w-[172px] py-6 rounded-s bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] text-base font-montserrat font-normal text-white">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                {/*Mobile*/}
                <div className="flex relative lg:hidden flex-col justify-center items-center">

                        <div className="absolute flex inset-y-0 top-[15%]  w-fit h-fit"><PiStarFourFill className=" text-base text-accent"/></div>
                        <div className="absolute flex inset-y-0 top-[20%] left-[84%] w-fit h-fit"><PiStarFourFill className=" text-base text-gray-400"/></div>
                        <div className="absolute flex inset-x-0 top-[82%] left-[9%] w-fit h-fit"><PiStarFourFill className=" text-base text-accent"/></div>
                        <div className="absolute flex inset-x-0 top-[75%] left-[90%] w-fit h-fit"><PiStarFourFill className=" text-base text-white"/></div>

                        <div className="flex flex-col w-full px-14 py-12">

                            <div className="flex my-12 lg:hidden w-[25px] h-[25px] items-center justify-center border border-t-[#903AFF] border-l-[#5d3f6c] border-r-[#FE34B9] border-b-[#FF26B9] rounded-full">
                                <IoIosArrowBack className="self-center text-white font-semibold"/>
                            </div>
                            
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col justify-between w-[60%] md:w-full">
                                    <h4 className=" font-clash-display font-semibold text-accent text-xl stroke-black text-left">Questions or need assistance?</h4>
                                    <h4 className="font-clash-display font-semibold text-accent text-xl stroke-black">Let us Know about it!</h4>
                                </div>
                                <h4 className="flex w-[65%] md:w-full font-montserrat text-base text-white font-normal text-left">Email us below to any question related to our event</h4>
                                <form className="flex flex-col justify-between gap-8">
                                    <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm ow border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base"
                                        type="text"
                                        placeholder="Team's Name"
                                    />
                                    <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base"
                                        type="text"
                                        placeholder="Topic"
                                    />

                                    <input className=" px-7 rounded-md w-full h-[47px] bg-white bg-opacity-5 drop-shadow-sm border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base"
                                        type="text"
                                        placeholder="Mail"
                                    />

                                    <textarea className=" flex flex-col pt-4 px-7 rounded-md w-full h-[119px] bg-white bg-opacity-5 drop-shadow-sm border border-white placeholder:text-white placeholder:font-montserrat placeholder:font-normal placeholder:text-base"
                                        placeholder="Message"
                                    />

                                        <button className="flex self-center justify-center w-[172px] py-6 rounded-s bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] text-base font-montserrat font-normal text-white">
                                            Submit
                                        </button>
                                </form>

                                <div className="flex w-fit flex-col justify-between items-center self-center gap-4">
                                    <h4 className="font-montserrat font-normal text-base text-accent tracking-wider">Share on</h4>
                                    <span className="inline-flex gap-4 w-fit">
                                        <RiInstagramLine className="text-2xl text-white"/>
                                        <RiTwitterXLine className="text-2xl text-white"/>
                                        <BiLogoFacebook className="text-2xl text-white"/>
                                        <BiLogoLinkedin className="text-2xl text-white"/>
                                    </span>
                            </div> 
                            </div>
                        </div>

                    </div>


            </div>
        </>
    )
}

export default contactPage;