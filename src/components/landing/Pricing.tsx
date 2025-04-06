import { Button } from "@/components/ui/button";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center max-w-[1430px] mx-auto text-slate-900 px-4">
    <h2 className="text-[34px] font-semibold leading-[48px] max-md:text-[28px] max-md:leading-[38px]">
      {title}
    </h2>
    <p className="mt-4 text-[18px] font-normal text-slate-800 max-md:text-[16px]">
      {subtitle}
    </p>
  </div>
);

const FeatureBlock = ({ title, content }) => (
  <div className="w-full max-w-[727px] mt-8">
    <h3 className="text-lg font-semibold mb-2 text-slate-900">{title}</h3>
    <div className="text-[18px] normal-text leading-relaxed text-slate-800">
      {content}
    </div>
  </div>
);

export const Pricing = () => {
  return (
    <section className="bg-[rgba(213,245,244,1)] py-20 px-6 md:px-10 mt-[68px] max-md:mt-10">
      <SectionTitle
        title={
          <>
            <span className="text-black">Use</span>{" "}
            <span className="text-[#F38759]">Rx</span>{" "}
            <span className="text-[#34B6B3]">Pod</span> Free — Add Credits When
            You Need More.
          </>
        }
        subtitle={
          <>
            RX Pod is free to use for logging your health — no fees, no
            subscriptions. But when you're ready for more advanced features, you
            just add Care Credits —{" "}
            <span className="font-semibold">our flexible, pay-as-you-go system</span>.
          </>
        }
      />

      <div className="flex flex-wrap-reverse md:flex-nowrap justify-center gap-10 mt-14">
        {/* Text Content */}
        <div className="flex flex-col justify-start items-start w-full max-w-[727px]">
          <FeatureBlock
            title="How You Get Care Credits"
            content={
              <>
                <p>Purchase credits directly in the app.</p>
                <p>No subscriptions or auto-renewals — buy only what you need.</p>
              </>
            }
          />

          <FeatureBlock
            title="What Credits Unlock"
            content={
              <ul className="list-disc list-inside space-y-2 text-[18px]">
                <li>
                  AI Reports{" "}
                  <span className="font-normal text-base text-slate-700">
                    (e.g. drug interaction or health optimization reviews)
                  </span>
                </li>
                <li>
                  Secure Data Sharing{" "}
                  <span className="font-normal text-base text-slate-700">
                    with doctors or caregivers
                  </span>
                </li>
                <li>
                  Advanced Insights{" "}
                  <span className="font-normal text-base text-slate-700">
                    based on your health profile
                  </span>
                </li>
              </ul>
            }
          />

          <FeatureBlock
            title="How It Works"
            content={
              <>
                <p>Start for free — log all your health data at no cost.</p>
                <p>
                  When you need to run a report or share data, you'll see the
                  number of credits required.
                </p>
                <p>
                  Tap "Add Credits" to purchase instantly — then use them
                  anytime.
                </p>
                <p>
                  No credits = no problem. You can still access your personal
                  records for free.
                </p>
              </>
            }
          />

          {/* Button aligned after all content */}
          <Button className="mt-8 text-white bg-[#34B6B3] hover:bg-[#2aa3a0]">
            Add Credits
          </Button>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center w-full max-w-[601px]">
          <img
            src="/hero/left-mobile.png"
            alt="Care Credits Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
