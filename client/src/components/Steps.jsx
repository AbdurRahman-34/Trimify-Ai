import { assets } from "../assets/assets";

const Steps = () => {
    return (
        <div className="mx-4 lg:mx-44 py-20 xl:py-40">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">Step to remove background <br /> image in seconds</h2>


            <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
                
                <div className="flex flex-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded cursor-pointer hover:scale-105 transition-all duration-500">
                    <img className="mx-w-9" src={assets.upload_icon} alt="" />
                    <div>
                        <h4 className="text-xl font-medium">Upload image</h4>
                        <p className="text-sm text-neutral-500 mt-1">This is demo text, will replace it late. <br /> This is demo.</p>
                    </div>
                </div>

                <div className="flex flex-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded cursor-pointer hover:scale-105 transition-all duration-500">
                    <img className="mx-w-9" src={assets.remove_bg_icon} alt="" />
                    <div>
                        <h4 className="text-xl font-medium">Remove background </h4>
                        <p className="text-sm text-neutral-500 mt-1">This is demo text, will replace it late. <br /> This is demo.</p>
                    </div>
                </div>

                <div className="flex flex-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded cursor-pointer hover:scale-105 transition-all duration-500">
                    <img className="mx-w-9" src={assets.download_icon} alt="" />
                    <div>
                        <h4 className="text-xl font-medium">Download icon</h4>
                        <p className="text-sm text-neutral-500 mt-1">This is demo text, will replace it late. <br /> This is demo.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;