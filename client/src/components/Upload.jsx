import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      {/* titel */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-5 md:py-15">
        See the magic. Try Now
      </h2>

      <div className="text-center mb-24">
        <input type="file" name="" id="upload2" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-br from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
