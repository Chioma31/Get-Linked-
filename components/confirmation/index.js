

import Image from "next/image";


const ConfirmationPopUp = ( {isVisible , onClose,} ) => {

    
    
    const handleClose = (e) => {
        if (e.target.id === "close" ) 
            onClose();
    }

    const backClose =()=> {
        onClose()
    }

    if (!isVisible) return null;
    

    
    return(
        <>

            <div id="close" onClick={handleClose}
                className={`fixed w-full h-[v100h] flex inset-0 bg-secondary bg-opacity-90  justify-center items-center z-50`}>
                
                    <div className="absolute opacity-100 px-10 lg:px-0 z-50">
                        <div className="flex flex-col bg-white bg-opacity-10 border border-accent rounded-[5px] h-fit w-fit z-50 justify-center items-center px-14 py-14">
                            <div className="flex flex-col justify-between items-center gap-8">
                                <div className="flex">
                                    <Image className="hidden lg:block"
                                        src="/congratulations.svg"
                                        height={321}
                                        width={427}
                                        alt=""
                                    />
                                    
                                    <Image className="block lg:hidden"
                                        src="/congratulations.svg"
                                        height={259}
                                        width={195}
                                        alt=""
                                    />
                                </div>

                                <div className="flex flex-col justify-between gap-4">
                                    <h4 className="text-center text-white font-montserrat font-semibold text-3.5xl max-w-xl">Congratulations you have successfully Registered!</h4>
                                    <div className="inline-flex self-center max-w-[240px] font-montserrat font-semibold text-center text-white text-sm">
                                        Yes, it was easy and you did it! check your mail box for next step
                                        <Image className="mx-0.5"
                                            src="/winkemoji.svg"
                                            alt=""
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                </div>
                                <button onClick={backClose}
                                    className="flex self-center justify-center w-full py-6 rounded-s bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] text-base font-montserrat font-normal text-white">
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
};

export default ConfirmationPopUp;