interface BadgeProps {
  icon: string;
  text: string;
}

const Badge = ({ icon, text }: BadgeProps) => (
  <div className="self-stretch flex min-h-[184px] flex-col items-stretch text-xl text-black font-normal text-center justify-center w-[148px] my-auto">
    <img
      src={icon}
      alt={text}
      className="aspect-[1] object-contain w-[120px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] self-center max-w-full"
    />
    <div className="mt-2.5">{text}</div>
  </div>
);

export const WhatIs = () => {
  return (
    <section className="bg-[rgba(213,245,244,1)] w-full pt-[95px] px-[62px] max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[63%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <div className="text-black pl-[41px] max-md:max-w-full max-md:pl-5">
              <h2 className="text-[28px] font-bold w-[649px]">
                What is RxPod?
              </h2>
              <p className="text-lg font-normal leading-7 mt-[74px] max-md:max-w-full max-md:mt-10">
                RxPod is your all-in-one health management platform. It helps
                you track medical history, prescriptions, supplements, meals,
                and wellness routines—all under tight privacy controls. Designed
                to simplify your health journey with AI-powered insights and
                full ownership of your data.
              </p>
            </div>
            <div className="z-10 flex mt-[-43px] min-h-[343px] items-center gap-3 flex-wrap">
              <Badge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/994317c151e19408cc1d5a70764530a8205ad020?placeholderIfAbsent=true" text="Free Storage" />
              <Badge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aad1b1a265019ffb734178b726b9d3c9e451a21a?placeholderIfAbsent=true" text="End-to-End Encrypted" />
              <Badge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a78136eafa02b58d58bef3138d904afd9af1c1b0?placeholderIfAbsent=true" text="Paid AI Insights" />
            </div>
          </div>
        </div>
        <div className="w-[37%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/997b93db258d9681bd7d610254a31c5a6b1b91b6?placeholderIfAbsent=true"
            alt="RxPod Features Overview"
            className="aspect-[1.19] object-contain w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
