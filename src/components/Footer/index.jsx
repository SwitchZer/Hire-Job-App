const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-16 pt-16 pb-11 w-full text-lg text-white bg-[#5E50A1] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1140px] max-md:max-w-full">
        <img
          src="/images/logo/logo2.svg"
          alt="Footer logo"
          className="max-w-full aspect-[3.57] w-[178px]"
        />
        <p className="mt-9 leading-7 max-md:max-w-full text-wrap">
          Peworld is revolutionizing the way we connect job seekers with their
          dream careers. By leveraging cutting-edge technology, we empower
          individuals to showcase their unique skills and experiences, while
          enabling employers to find the perfect fit for their open roles. With
          Peworld, the path to professional fulfillment has never been clearer.
        </p>
        <div className="shrink-0 mt-20 h-px bg-white border border-white border-solid max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 px-0.5 mt-9 w-full leading-[156%] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto">2024 Peworld. All right reserved</div>
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <div>Telepon</div> <div>Email</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
