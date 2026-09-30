import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaBrain, FaRobot, FaMicroscope, FaNetworkWired, FaLeaf, FaLaptopCode, FaHospital } from "react-icons/fa6";
import "./styles/Work.css";

export interface ProjectData {
  title: string;
  category: string;
  tools: string;
  description: string;
  github: string;
  live?: string;
  link?: string;
  image?: string;
  video?: string;
  codeSnippet?: string;
  fileName?: string;
  featuredStat?: string;
  accentColor?: string;
  iconType?: "brain" | "robot" | "vision" | "network" | "leaf" | "code" | "hospital";
}

interface Props {
  project: ProjectData;
  alt?: string;
}

const getIcon = (type?: string) => {
  switch (type) {
    case "brain":
      return <FaBrain />;
    case "robot":
      return <FaRobot />;
    case "vision":
      return <FaMicroscope />;
    case "network":
      return <FaNetworkWired />;
    case "leaf":
      return <FaLeaf />;
    case "hospital":
      return <FaHospital />;
    default:
      return <FaLaptopCode />;
  }
};

const WorkImage = ({ project }: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (project.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${project.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const targetLink = project.live || project.github;
  const accent = project.accentColor || "#14b8a6";

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={targetLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
        style={{ "--project-accent": accent } as React.CSSProperties}
      >
        <div className="work-link" title="Open Project">
          <MdArrowOutward />
        </div>

        {project.image ? (
          <>
            <img src={project.image} alt={project.title} />
            {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
          </>
        ) : (
          <div className="project-mockup-card">
            {/* Terminal Window Header */}
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="mockup-filename">
                {project.fileName || `${project.title.toLowerCase().replace(/[^a-z0-9]/g, "_")}.py`}
              </div>
              <div className="mockup-badge" style={{ color: accent, borderColor: `${accent}40` }}>
                {project.featuredStat || "Featured"}
              </div>
            </div>

            {/* Mockup Body with Code and Visual Preview */}
            <div className="mockup-body">
              <div className="mockup-watermark" style={{ color: accent }}>
                {getIcon(project.iconType)}
              </div>

              <div className="mockup-code-block">
                <pre>
                  <code>
                    {(project.codeSnippet || `# Project: ${project.title}\nimport torch\nimport numpy as np\n\n# Initialize model architecture\npipeline = ModelPipeline()\nresults = pipeline.evaluate()`).split("\n").map((line, i) => (
                      <div key={i} className="code-line">
                        <span className="line-num">{i + 1}</span>
                        <span className="line-content">{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Bottom Card Footer */}
              <div className="mockup-footer">
                <div className="repo-badge">
                  <FaGithub />
                  <span>sillyfellow21 / {project.title}</span>
                </div>
                {project.live && (
                  <div className="live-status">
                    <span className="live-dot"></span> Live Deployment
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
