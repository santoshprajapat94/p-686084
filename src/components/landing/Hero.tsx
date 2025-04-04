import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className="flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
      <div className="flex items-stretch gap-px text-5xl text-[rgba(231,135,23,1)] font-semibold whitespace-nowrap max-md:text-[40px] max-md:ml-2">
        <div className="grow max-md:text-[40px]">R</div>
        <div className="mt-3.5 max-md:text-[40px]">x</div>
      </div>
      <div className="w-full max-w-[1217px] mt-[51px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch items-stretch text-[rgba(51,51,51,1)] my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-6xl font-bold leading-[74px] max-md:max-w-full max-md:text-[40px] max-md:leading-[55px]">
                Secure Your Health, Your Data, Your Future With
                <br />
                <span className="text-[#DE7B34]">Rx</span>
                <span className="text-[#0097B2]">Pod</span>
              </h1>
              <p className="text-2xl font-normal mt-8 max-md:max-w-full">
                Keep your medical history safe, manage prescriptions with ease,
                and track your wellness effortlessly—all in one secure app.
              </p>
              <Button
                className="bg-[rgba(0,151,178,1)] text-[22px] font-medium mt-8 px-14 py-6 rounded-[40px] max-md:px-5"
                size="lg"
              >
                Get started
              </Button>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[56%] max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec87f761c12cbf566b7d27118de7bb9472b8aac?placeholderIfAbsent=true"
                    alt="RxPod App Preview"
                    className="aspect-[1.16] object-contain w-full mr-[-114px] rounded-[499px]"
                  />
                </div>
                <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/de917a8d75dc58a8dc879aa543005312a0f9a8e7?placeholderIfAbsent=true"
                    alt="RxPod Features"
                    className="aspect-[0.71] object-contain w-full grow mt-[132px] max-md:mt-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
