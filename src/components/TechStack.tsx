import "./styles/TechStack.css";

const skillsData = [
  {
    category: "Embedded Testing",
    skills: [
      "Integration Testing",
      "System Validation",
      "Firmware Testing",
      "Regression Testing",
      "Functional Testing",
      "Controller Validation",
    ],
  },
  {
    category: "Automation & Programming",
    skills: [
      "Python",
      "Selenium WebDriver",
      "UAF Framework",
      "PyQt5",
      "Basic Embedded C & C++",
      "Regression Automation",
    ],
  },
  {
    category: "Protocols & Debugging",
    skills: [
      "CAN (CANoe, CANalyzer, CANTerm)",
      "CAN Log Analysis",
      "SPI",
      "I2C",
      "Signal-Level Debugging",
      "Serial Communication Analysis",
    ],
  },
  {
    category: "Testing Areas",
    skills: [
      "Manual Testing",
      "Automation Testing",
      "System Testing",
      "Integration Testing",
      "Functional Testing",
      "IoT Testing",
    ],
  },
  {
    category: "Tools",
    skills: [
      "J-Link / J-Flash",
      "STM Tools",
      "Helix ALM",
      "JIRA",
      "Octopus",
      "Mobaxterm",
      "Docklight",
      "Medley",
      "Postman",
    ],
  },
  {
    category: "Version Control & Methodologies",
    skills: [
      "GitHub",
      "Perforce",
      "Agile (Scrum)",
      "V-Model",
      "STLC",
      "SDLC",
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="skills">
      <div className="techstack-container">
        <h2>
          Technical <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div className="skill-category" key={index}>
              <h3>{group.category}</h3>
              <div className="skill-list">
                {group.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
