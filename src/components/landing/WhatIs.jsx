const Badge = ({ icon, text }) => (
  <div className="badge">
    <img src={icon} alt={text} />
    <div className="badge-text">{text}</div>
  </div>
);

export const WhatIs = () => {
  return (
    <section className="what-is-section">
      <div className="what-is-container">
        <div className="left-content">
          <h2>What is RxPod?</h2>
          <p>
            RxPod is your all-in-one health management platform. It helps
            you track medical history, prescriptions, supplements, meals,
            and wellness routines—all under tight privacy controls.
            Designed to simplify your health journey with AI-powered insights
            and full ownership of your data.
          </p>
          <div className="badge-row">
            <Badge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/994317c151e19408cc1d5a70764530a8205ad020?placeholderIfAbsent=true" text="Free Storage" />
            <Badge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aad1b1a265019ffb734178b726b9d3c9e451a21a?placeholderIfAbsent=true" text="End-to-End Encrypted" />
            <Badge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a78136eafa02b58d58bef3138d904afd9af1c1b0?placeholderIfAbsent=true" text="Paid AI Insights" />
          </div>
        </div>
        <div className="right-image">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/997b93db258d9681bd7d610254a31c5a6b1b91b6?placeholderIfAbsent=true"
            alt="RxPod Features Overview"
          />
        </div>
      </div>
    </section>
  );
};
