import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "HVAC/P2 – S9VM Integration Testing",
    category: "Trane Technologies",
    tools: "CAN Protocol | CANoe | CANalyzer | J-Link | Python | STM Tools",
    description:
      "S9VM is a high-efficiency modulating gas furnace system. Performed end-to-end Integration Testing across combustion and airflow control modules. Validated inter-controller communication using CAN protocol. Developed internal calculation tools for combustion pressure and airflow validation using Python. Conducted regression and system-level validation before release cycles. Debugged controller-level issues using CAN logs and hardware tools.",
    tags: ["Integration Testing", "CAN Protocol", "Python Automation", "Combustion Validation"],
  },
  {
    title: "HVAC/P2 – Link Relay Panel & SINRaptor",
    category: "Trane Technologies",
    tools: "CAN Log Analysis | Helix ALM | JIRA | Selenium | Regression Testing",
    description:
      "Involved in Integration and Regression Testing of HVAC system modules. Validated component-level functionality against system requirements. Conducted manual and automation testing for web and mobile interface validation. Analyzed system logs and CAN traces for defect identification. Maintained test documentation and defect tracking throughout the project lifecycle.",
    tags: ["Regression Testing", "CAN Analysis", "Defect Tracking", "Automation Testing"],
  },
  {
    title: "HVAC/P2 – Zone Panel & Rubicon",
    category: "Trane Technologies",
    tools: "Black-box Testing | Grey-box Testing | RTM | JIRA | Helix ALM",
    description:
      "Validated zone control modules responsible for airflow distribution. Executed System Testing across integrated HVAC subsystems. Performed black-box and grey-box testing methodologies. Prepared and maintained test matrices and release validation documentation. Verified bug fixes and supported release readiness activities across CR & ER builds.",
    tags: ["System Testing", "Black-box Testing", "Grey-box Testing", "Release Validation"],
  },
  {
    title: "Tool Development – Python Utilities",
    category: "Internal / Datamatics",
    tools: "Python | PyQt5 | CI/CD | Automation Scripting",
    description:
      "Developed Python-based internal tools for combustion pressure and airflow calculations. Created GUI-based applications using PyQt5 for internal validation support. Automated repetitive test execution tasks to improve regression efficiency by 30%. Integrated automation scripts into CI/CD pipelines enabling continuous build validation.",
    tags: ["Python", "PyQt5", "CI/CD Integration", "GUI Development"],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content carousel-content-full">
                    <div className="carousel-info carousel-info-full">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools &amp; Technologies</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-tags">
                          {project.tags.map((tag, i) => (
                            <span className="carousel-tag" key={i}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
