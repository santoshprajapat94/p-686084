export const Footer = () => {
  return (
    <footer className="flex flex-col relative min-h-72 w-full pt-[108px] pb-[51px] px-[70px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4e96c266397c71cdaed445375d19372611b1808?placeholderIfAbsent=true"
        alt="Footer Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative w-[972px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[17%] max-md:w-full max-md:ml-0">
            <div className="relative flex w-full flex-col items-stretch text-black max-md:mt-10">
              <div className="flex items-stretch gap-[11px] text-base font-bold leading-7">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/efe88aad3ce9ba5bb5884a46a9881ec713b88bb5?placeholderIfAbsent=true"
                  alt="RX POD Logo"
                  className="aspect-[0.88] object-contain w-[29px] shrink-0"
                />
                <div>RX POD</div>
              </div>
              <div className="text-[13px] font-normal leading-loose mt-3">
                © 2024 LandingBox
              </div>
            </div>
          </div>

          <div className="w-[38%] ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex grow items-stretch gap-5 text-black leading-7 justify-between max-md:mt-10">
              <div className="flex flex-col items-stretch">
                <h3 className="text-base font-bold">Contact</h3>
                <address className="bg-blend-normal text-sm font-normal mt-1.5 not-italic">
                  9565 S. Railroad Dr.
                  <br />
                  Spring Valley, NY 10977
                  <br />
                  United States
                  <br />
                  0800 01234 5678
                </address>
              </div>
              <nav>
                <h3 className="text-base font-bold">Navigation</h3>
                <ul className="bg-blend-normal text-sm font-normal mt-1.5 max-md:mr-[3px]">
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex items-stretch gap-[40px_99px] text-black leading-7 max-md:mt-10">
              <div className="flex flex-col items-stretch">
                <h3 className="text-base font-bold">Social media</h3>
                <ul className="bg-blend-normal text-sm font-normal mt-1.5">
                  <li>
                    <a href="#twitter">Twitter</a>
                  </li>
                  <li>
                    <a href="#facebook">Facebook</a>
                  </li>
                  <li>
                    <a href="#instagram">Instagram</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-stretch">
                <h3 className="text-base font-bold">Legal</h3>
                <ul className="bg-blend-normal text-sm font-normal mt-1.5">
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#cookie">Cookie Agreement</a>
                  </li>
                  <li>
                    <a href="#terms">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
