interface TestimonialProps {
  title: string;
  content: string;
  author: string;
}

const Testimonial = ({ title, content, author }: TestimonialProps) => (
  <div className="self-stretch min-w-60 grow shrink w-60 my-auto">
    <div className="bg-[rgba(253,192,149,1)] min-h-[226px] w-full text-[rgba(68,68,68,1)] leading-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-base font-medium mt-5">{content}</p>
    </div>
    <div className="bg-[rgba(253,192,149,1)] flex min-h-[71px] w-full flex-col items-stretch">
      <div className="flex gap-[13px]">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={i === 0 ? "https://cdn.builder.io/api/v1/image/assets/TEMP/60eb86789478271d34763103da331606ab645c12?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/4ebc0edb726af441c983adef1f99f615601d1c13?placeholderIfAbsent=true"}
            alt="Star Rating"
            className={`aspect-[${i === 0 ? "1" : "1.04"}] object-contain w-[${i === 0 ? "25" : "26"}px] shrink-0`}
          />
        ))}
      </div>
      <div className="text-[rgba(32,32,32,1)] text-xl font-bold mt-2.5">
        {author}
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const testimonials = [
    {
      title: "I'm in Control of My Health Info Now",
      content:
        "I love the fact that all my healthcare data is with me at all times. I don't need an internet connection to see it.",
      author: "John Smith",
    },
    {
      title: "Everything I Need, Right in My Pocket.",
      content:
        "I put all my children's healthcare data on the app, and shared their data with me. I feel confident I have everything I need with me in case they have an emergency medical event",
      author: "Jasmine",
    },
    {
      title: "Finally, a Health App That Respects My Privacy.",
      content:
        "What really sold me on RX Pod was the privacy. Knowing that even their own team can't see my health data gives me total peace of mind. It feels good to finally have everything stored securely — and only accessible by me",
      author: "Shivani Rathore",
    },
    {
      title: "The customer service was outstanding. Very quick.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiscris nisi ut aliquip ex ea commodo consequat.",
      author: "John Smith",
    },
  ];

  return (
    <section className="w-full overflow-hidden mt-[191px] pl-[53px] pr-[57px] py-[52px] max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5">
      <h2 className="text-gray-900 text-5xl font-bold leading-loose text-center max-md:max-w-full max-md:text-[40px]">
        What Our Customers Say
      </h2>
      <div className="flex w-full items-center gap-10 flex-wrap mt-[21px] max-md:max-w-full">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
