import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className="flex w-full flex-col  max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch relative">
          <div className="w-6/12 max-md:w-full max-md:ml-0 px-16">
            <div className="flex items-stretch gap-px text-5xl text-[rgba(231,135,23,1)] font-semibold whitespace-nowrap max-md:text-[40px] max-md:ml-2">
              <div className="grow max-md:text-[40px]">
                <img src="/hero/Group 1.png" alt="logo image" />
                <img
                  style={{
                    margin: "-11px 0px 0px 40px",
                    width: "40px",
                    height: "40px",
                  }}
                  src="/hero/Group 2.png"
                  alt="logo image2"
                />
              </div>{" "}
            </div>
            <div className="flex w-full items-start flex-col self-stretch  text-[rgba(51,51,51,1)] mt-8 max-md:max-w-full max-md:mt-10">
              <h1 className="text-6xl font-bold leading-[74px] max-md:max-w-full max-md:text-[40px] max-md:leading-[55px]">
                Secure Your Health, Your Data, Your Future With
                <br />
                <span className="text-[#DE7B34]">Rx</span>
                <span className="text-[#0097B2]">Pod</span>
              </h1>
              <p className="normal-text mt-8 max-md:max-w-full">
                Keep your medical history safe, manage prescriptions with ease,
                and track your wellness effortlessly—all in one secure app.
              </p>
              <Button
                style={{
                  margin: "16px 0",
                  padding: "16px 8px",
                  minWidth: "150px",
                  maxWidth: "200px",
                  transition: "all 0.3s ease",
                }}
                className="bg-[rgba(0,151,178,1)] text-[22px] font-medium rounded-[40px] hover:bg-[rgba(0,151,178,0.8)]"
                size="lg"
              >
                Get started
              </Button>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              right: "-325px",
              top: "0",
              overflow: "hidden",
              zIndex: "0",
              left: "427px",
              height: "100%",
            }}
            src="/hero/Rectangle68.png"
            alt="RxPod App Preview"
            className="aspect-[1.16] object-contain w-full mr-[-114px] rounded-[499px]"
          />
          <div className="w-6/12 max-md:w-full">
            <div
              style={{ marginTop: "90px" }}
              className="grow max-md:max-w-full max-md:mt-16"
            >
              <div className="gap-2 flex max-md:flex-col max-md:items-stretch">
                <div
                  className="w-[40%] max-md:w-full max-md:ml-0"
                  style={{ marginLeft: "150px", marginTop: "100px" }}
                >
                  <img
                    src="/hero/hero-1.png"
                    alt="RxPod App Preview"
                    className="aspect-[1.16] object-contain w-full mr-[-114px] rounded-[499px] jump-animation"
                  />
                </div>
                <div className="w-[40%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="/hero/hero-2.png"
                    alt="RxPod Features"
                    className="aspect-[0.71] object-contain w-full grow mt-[132px] max-md:mt-10 jump-animation delay"
                  />
                </div>
              </div>

              <style jsx>{`
                @keyframes jump {
                  0% {
                    transform: translateY(0);
                  }
                  100% {
                    transform: translateY(10px);
                  }
                  25% {
                   transform: translateX(-40px);
                  }
                  50% {
                    transform: translateY(-30px);
                  }
                  75% {
                    transform: translateX(40px);
                  }
                }

                .jump-animation {
                  animation: jump 5s infinite ease-in-out;
                }

                .delay {
                  animation-delay: 1s;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
