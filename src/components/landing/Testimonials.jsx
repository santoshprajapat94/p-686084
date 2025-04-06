
const Testimonial = ({ title, content, author }) => (
  <div className="testimonial-card">
    <div className="testimonial-content">
      <h3 className="testimonial-title">{title}</h3>
      <p className="testimonial-text">{content}</p>
    </div>
    <div className="testimonial-footer">
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={
              i === 0
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/60eb86789478271d34763103da331606ab645c12?placeholderIfAbsent=false"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/4ebc0edb726af441c983adef1f99f615601d1c13?placeholderIfAbsent=true"
            }
            alt="Star"
            className="star-icon"
          />
        ))}
      </div>
      <div className="testimonial-author">{author}</div>
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Smith",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
