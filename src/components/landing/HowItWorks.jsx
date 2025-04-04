
export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Available on iOS and Android platforms. Free to download and use for basic features.",
      iconColor: "text-[#F38759]"
    },
    {
      number: "02",
      title: "Create Your Profile",
      description: "Set up your secure account with end-to-end encryption. Only you control access to your data.",
      iconColor: "text-[#34B6B3]"
    },
    {
      number: "03",
      title: "Add Your Medical Data",
      description: "Import or manually add your health records, prescriptions, and medical history.",
      iconColor: "text-[#F38759]"
    },
    {
      number: "04",
      title: "Access Anytime, Anywhere",
      description: "Your complete medical information available instantly, even without internet connection.",
      iconColor: "text-[#34B6B3]"
    }
  ];

  return (
    <section className="flex flex-col w-full items-center px-16 py-20 max-md:px-5">
      <h2 className="text-5xl font-bold text-center mb-16 max-md:text-4xl max-md:mb-10">
        <span className="text-black">How </span>
        <span className="text-[#F38759]">Rx</span>
        <span className="text-[#34B6B3]">Pod </span>
        <span className="text-black">Works</span>
      </h2>
      
      <div className="flex flex-wrap gap-10 justify-center max-w-6xl">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-[280px] text-center p-6">
            <div className={`${step.iconColor} text-6xl font-bold mb-4`}>{step.number}</div>
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 max-w-4xl text-center">
        <p className="text-xl text-gray-700">
          RxPod seamlessly integrates with your existing healthcare routine, giving you control 
          over your information without disrupting your relationship with healthcare providers.
        </p>
      </div>
    </section>
  );
};
