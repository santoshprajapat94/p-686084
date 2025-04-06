import "./FeatureSection.css";
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <div
          className="text-[rgba(51,51,51,1)] w-full items-center px-16"
          style={{
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="text-5xl font-bold leading-[74px] text-center max-md:max-w-full max-md:text-[40px] max-md:leading-[55px]">
            Your Health Info Stays With You — No One Else Can Look. Not Even Us
          </h3>

          <p className="normal-text">
            Think of RX Pod like a locked vault — everything you add is sealed
            inside. Only you hold the key, and not even we have a copy.
          </p>
        </div>

        <div className="feature-layout">
          <div className="feature-content-section px-16">
            <div className="feature-header">
              <span className="rxpod-label">RxPod</span>
              <h2 className="header-sec">Powerful features</h2>
              <p className="normal-text">
                Everything you need to take full control of your health —
                securely, intelligently, and effortlessly
              </p>
            </div>
            <div className="feature-grid">
              <div className="feature-column">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Icon.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">Health Records</h3>
                    <ul className="normal-text">
                      <li>Log conditions, allergies, and adverse reactions</li>
                      <li>Store prescriptions, supplements, and vitamins</li>
                      <li>Upload vaccination records and ID documents</li>
                      <li>
                        Access your entire history in one unified timeline
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Bot.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">AI Agent</h3>
                    <ul className="normal-text">
                      <li>Detect conflicts and unsafe combinations</li>
                      <li>Automatically request refills and follow-ups</li>
                      <li>Assist with prescriber and pharmacy coordination</li>
                      <li>
                        Handle insurance pre-approvals and status tracking
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Icon2.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">Routines & Wellness</h3>
                    <ul className="normal-text">
                      <li>Track workouts: strength, cardio, flexibility</li>
                      <li>
                        Log routines like prayer, meditation, or journaling
                      </li>
                      <li>Set daily or weekly habit goals</li>
                      <li>Earn points as you complete and repeat routines</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Moment Sharing.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">Smart Sharing</h3>
                    <ul className="normal-text">
                      <li>Share health data with doctors or caregivers</li>
                      <li>Set permissions: view, add, or edit access</li>
                      <li>Keep some data private — even when sharing</li>
                      <li>Grant access instantly if needed</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="feature-column">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Icon3.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">Unified Vault</h3>
                    <ul className="normal-text">
                      <li>
                        See your complete medical history in a single, organized
                        timeline
                      </li>
                      <li>
                        Combine data from doctors, dentists, pharmacies, and
                        insurers
                      </li>
                      <li>
                        Stop switching between apps, portals, and paper — it's
                        all here
                      </li>
                      <li>One app. One profile. Total control.</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Vegan Food.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">Meals & Nutrition</h3>
                    <ul className="normal-text">
                      <li>Create meals and snacks with custom ingredients</li>
                      <li>Let AI calculate calories and nutrition instantly</li>
                      <li>Log your food daily and see progress</li>
                      <li>Monitor macros and dietary goals visually</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Icon3.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">Insights & Smart Reminders</h3>
                    <ul className="normal-text">
                      <li>Visualize trends in meals, exercise, and meds</li>
                      <li>
                        Track compliance and progress toward personal goals
                      </li>
                      <li>
                        Set reminders for meds, meals, workouts, and
                        appointments
                      </li>
                      <li>Customize alerts to fit your daily routine</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/hero/Icon4.png" alt="feature-img-1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="header-sec">Privacy & Security</h3>
                    <ul className="normal-text">
                      <li>Encrypted on your device with your private key</li>
                      <li>Even RxPod staff can't see your data</li>
                      <li>Share only what you choose, with who you trust</li>
                      <li>Revoke access or change permissions anytime</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="app-preview-section">
            <div style={{ padding: "10px" }}>
              <img src="/hero/Group 48.png" alt="Mobile img" />
            </div>

            <div
              style={{
                position: "absolute",
                right: "0",
                bottom: "0px",
                width: "400px",
                height: "300px",
              }}
            >
              <img src="/hero/Rectangle.png" alt="Mobile img" />
            </div>
            <div width={"100px"} height={"100px"}>
              <img src="/hero/Ellipse out.png" alt="Mobile img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
