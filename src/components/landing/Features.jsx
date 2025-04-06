
const FeatureCard = ({
  number,
  title,
  description,
  icon,
  bgColor,
}) => (
  <div
    className={`${bgColor} flex min-w-60 min-h-72 items-center gap-2.5 grow shrink w-[331px] px-[25px] rounded-2xl max-md:px-5`}
  >
    <div className="self-stretch flex min-w-60 w-[346px] justify-between flex-wrap my-auto py-[3px]">
      <div className="text-white text-[64px] font-medium w-[129px] max-md:text-[40px]">
        {number}
      </div>
      <img
        src={icon}
        alt={title}
        className="aspect-[1] object-contain w-[34px] shrink-0"
      />
      <div className="min-w-60 text-[rgba(51,51,51,1)] w-[285px]">
        <h3 className="text-[32px] font-medium">{title}</h3>
        <p className="text-lg font-normal mt-2">{description}</p>
      </div>
    </div>
  </div>
);

export const Features = () => {
  const features = [
    {
      number: "01",
      title: "Medical History",
      description:
        "Keep your full medical history updated to get better care during emergencies and regular check-ups",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7afb86d53031b80a5d852ef0be6a0ddc727b51b4?placeholderIfAbsent=true",
      bgColor: "bg-[rgba(241,194,176,1)]",
    },
    {
      number: "02",
      title: "Adverse Reactions",
      description:
        "Record all known drug allergies and adverse reactions to ensure safe prescriptions and prevent harmful side effects",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/942b3ab496a7c393170a4fbc4aaea6d3445169b4?placeholderIfAbsent=true",
      bgColor: "bg-[rgba(249,235,152,1)]",
    },
    {
      number: "03",
      title: "Centralize Prescriptions",
      description:
        "Keep all your current medications securely stored and easy to access in one place.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b607bb1d403734e1a63a978972039aefb4fe53f?placeholderIfAbsent=true",
      bgColor: "bg-[rgba(105,117,232,1)]",
    },
  ];

  return (
    <section style={{margin:'30px 0 20px 0'}} className="self-stretch flex min-h-[321px] w-full gap-4 px-16 flex-wrap max-md:max-w-full max-md:mt-10">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};
