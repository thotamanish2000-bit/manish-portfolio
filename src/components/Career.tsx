import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Consultant</h4>
                <h5>Datamatics Global Services Limited, Bangalore<br />(Client: Trane Technologies)</h5>
              </div>
              <h3>Sep 2022 – Present<br />Chennai, India</h3>
            </div>
            <p>
              • Executed 300+ integration and system test cases across HVAC controllers.<br />
              • Reduced regression effort by 30% using Python automation.<br />
              • Identified and resolved 150+ defects across CR &amp; ER builds.<br />
              • Validated CAN-based communication across embedded controller modules.<br />
              • Executed System Validation for combustion control, pressure sensors, and airflow modulation logic.<br />
              • Developed Python-based automation scripts to support regression and CI/CD builds.<br />
              • Analysed CAN logs to identify communication and controller-level defects.<br />
              • Performed firmware flashing and debugging using J-Link and STM tools.<br />
              • Performed root cause analysis in collaboration with firmware and hardware teams to resolve controller-level defects.<br />
              • Designed test plans, RTMs, test cases, and test scenarios aligned with product requirements.<br />
              • Logged and tracked defects using JIRA and Helix ALM.<br />
              • Supported release validation for Candidate Release (CR) and Emergency Release (ER) builds.<br />
              • Participated in sprint planning, daily stand-ups, grooming, and retrospectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
