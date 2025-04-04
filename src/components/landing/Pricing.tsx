import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section className="bg-[rgba(213,245,244,1)] flex w-full flex-col items-stretch mt-[68px] pt-20 pb-[259px] px-[3px] max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:pb-[100px]">
      <div className="self-center max-w-full w-[1430px] text-slate-900 text-center">
        <h2 className="w-full text-[56px] font-extrabold leading-[1.1] max-md:max-w-full max-md:text-[40px]">
          <span className="text-black">Use</span>
          <span className="text-[#F38759]"> Rx</span>
          <span className="text-[#34B6B3]">Pod</span> Free — Add Credits When
          You Need More.
        </h2>
        <p className="text-lg font-normal leading-[29px] mt-6 max-md:max-w-full">
          RX Pod is free to use for logging your health — no fees, no
          subscriptions. But when you're ready for more advanced features, you
          just add Care Credits —{" "}
          <span className="font-semibold">
            our flexible, pay-as-you-go system
          </span>
          .
        </p>
      </div>

      <div className="flex w-full items-center gap-[40px_61px] flex-wrap pl-[30px] pr-[9px] py-[33px] max-md:max-w-full max-md:pl-5">
        <div className="self-stretch flex min-w-60 h-[433px] items-center gap-2.5 justify-center grow shrink w-[358px] my-auto max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b1b28c316d0ac5d00e78c3e2469aeb83c35a18?placeholderIfAbsent=true"
            alt="Care Credits Illustration"
            className="aspect-[0.91] object-contain w-[601px] self-stretch min-w-60 my-auto"
          />
        </div>
        <div className="self-stretch flex min-w-60 flex-col items-center text-black grow shrink w-[700px] my-auto max-md:max-w-full">
          <div className="w-[727px] max-w-full">
            <h3 className="text-4xl font-bold leading-[1.6] max-md:max-w-full">
              How You Get Care Credits
            </h3>
            <p className="text-[32px] font-normal leading-[51px] mt-[22px] max-md:max-w-full">
              Purchase credits directly in the app .<br />
              No subscriptions or auto-renewals — buy only what you need
            </p>
          </div>
          <div className="w-[727px] max-w-full font-bold mt-[25px]">
            <h3 className="text-4xl leading-[1.6] max-md:max-w-full">
              What Credits Unlock
            </h3>
            <ul className="text-[32px] leading-[51px] mt-[22px] max-md:max-w-full">
              <li>
                AI Reports
                <span className="font-normal">
                  {" "}
                  (e.g. drug interaction or health optimization reviews)
                </span>
              </li>
              <li>
                Secure Data Sharing
                <span className="font-normal"> with doctors or caregivers</span>
              </li>
              <li>
                Advanced Insights{" "}
                <span className="font-normal">
                  based on your health profile
                </span>
              </li>
            </ul>
          </div>
          <div className="w-[727px] max-w-full mt-[25px]">
            <h3 className="text-4xl font-bold leading-[1.6] max-md:max-w-full">
              How It Works
            </h3>
            <p className="text-[32px] font-normal leading-[51px] mt-[22px] max-md:max-w-full">
              Start for free — log all your health data at no cost
              <br />
              When you need to run a report or share data, you'll see the number
              of credits required
              <br />
              Tap "Add Credits" to purchase instantly — then use them anytime
              <br />
              No credits = no problem. You can still access your personal
              records for free.
            </p>
          </div>
        </div>
      </div>

      <Button className="justify-center items-stretch bg-[#009BC4] self-center z-10 mt-[-259px] w-[225px] max-w-full text-2xl text-white font-bold tracking-[0.5px] leading-none ml-[29px] px-6 py-[23px] rounded-lg border-2 border-solid max-md:mt-[-200px] max-md:px-5">
        Get Started
      </Button>
    </section>
  );
};
