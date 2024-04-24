import React from "react";

const PortfolioImageUpload = () => {
  return (
    <div className="flex justify-center items-center px-16 py-14 mt-3 text-gray-800 rounded-lg border border-dashed border-zinc-400 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[344px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21640e7463cf40bc59f5ed0cbe9df54bd9c5ea0904f2758fe63535ec0f8fe7ad?apiKey=ff034d5512384628b4f5c1152f7ba035&"
          alt="Upload portfolio image"
          className="self-center max-w-full aspect-square w-[114px]"
        />
        <div className="mt-4 text-sm">
          Drag & Drop untuk Upload Gambar Aplikasi Mobile
        </div>
        <div className="self-center mt-4">
          Atau cari untuk mengupload file dari direktorimu.
        </div>
        <div className="flex gap-5 justify-between mt-10">
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e2d3650917bdfdaa5117196fecc6a293c83552512dc2e07e736ba966fd1d15?apiKey=ff034d5512384628b4f5c1152f7ba035&"
              alt=""
              className="shrink-0 w-8 aspect-square"
            />
            <div>
              High-Res Image <br /> PNG, JPG or GIF
            </div>
          </div>
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b37577a76794df10711f30d7db7791f0c9da3946546ad2d81f0ee4ef6c03be8f?apiKey=ff034d5512384628b4f5c1152f7ba035&"
              alt=""
              className="shrink-0 w-8 aspect-square"
            />
            <div className="my-auto">
              Size <br /> 1080x1920 or 600x800
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImageUpload;
