import { useState, useEffect, useRef } from "react";
function Journey() {
  const [isMobile, setIsMobile] = useState(
  window.innerWidth <= 768
);
const [revealedCards, setRevealedCards] =
useState([]);
const [animateMobile, setAnimateMobile] = useState(false);
const [activeMilestone, setActiveMilestone] = useState(null);
const journeyRef = useRef(null);
const cardRefs = useRef([]);
const lastScrollY = useRef(0);
const [animateRoad, setAnimateRoad] = useState(false);
const [roadProgress, setRoadProgress] = useState(0);
const [pinnedMilestone, setPinnedMilestone] = useState(null);
const displayedMilestone =
  activeMilestone || pinnedMilestone;
const [positions, setPositions] = useState([]);
  const milestones = [
    {
      id: 1,
      year: "Mar 2019",
      title: "Matriculation (10th)",
      description: "Completed Matriculation from D.S. High School, Ganjam.",
      checkpoint: true,
    },
    {
      id: 2,
      year: "Sep 2023",
      title: "Diploma in CSE",
      description: "Completed Diploma in Computer Science & Engineering from Nilachal Polytechnic.",
      checkpoint: true,
    },
    {
      id: 3,
      year: "Aug 2024",
      title: "B.Tech CSE(AI)",
      description: "Started B.Tech in Computer Science & Engineering (AI) at GIFT Autonomous, Bhubaneswar.",
      checkpoint: true,
    },
    {
      id: 4,
      year: "Jan 2025",
      title: "IoT Internship",
      description: "Gained hands-on IoT experience at GIFT and developed an Automated Handwash System. ",
      checkpoint: true,
    },
    {
      id: 5,
      year: "May 2025",
      title: "NPTEL Java Programming",
      description: "Earned my first NPTEL certification in Programming in Java.",
      checkpoint: true,
    },
    {
      id: 6,
      year: "Jul 2025",
      title: "Data Analytics Intern",
      description: "Completed a Data Analytics internship at CTTC, gaining hands-on experience in Power BI, Excel, Python, MySQL, Tableau, and Machine Learning.",
      checkpoint: true,
    },
    {
      id: 7,
      year: "Jul 2025",
      title: "IPL Analysis Project",
      description: "Developed an interactive Power BI dashboard to analyze IPL centuries from 2008–2025.",
      checkpoint: true,
    },
    {
      id: 8,
      year: "Jul 2025",
      title: "AI Workshop",
      description: "Completed an AI workshop by AI for Techies and explored practical AI applications.",
      checkpoint: true,
    },
    {
      id: 9,
      year: "Nov 2025",
      title: "NPTEL Joy of Computing",
      description: "Earned an NPTEL ELITE certification in The Joy of Computing Using Python.",
      checkpoint: true,
    },
    {
      id: 10,
      year: "Feb 2026",
      title: "Microsoft AI/ML",
      description: "Joined Microsoft's industry-oriented AI program and currently advancing my skills in Artificial Intelligence and Machine Learning.",
      checkpoint: true,
    },
    {
      id: 11,
      year: "Mar 2026",
      title: "Oil Price Prediction",
      description: "Developed an AI/ML-based Oil Price Prediction model and evaluated multiple algorithms, with Linear Regression delivering the best performance.",
      checkpoint: true,
    },
    {
      id: 12,
      year: "Apr 2026",
      title: "Inflation Prediction",
      description: "Developed an Inflation Rate Prediction model using macroeconomic data from public and government sources, with Random Forest achieving the best performance.",
      checkpoint: true,
    },
    {
      id: 13,
      year: "May 2026",
      title: "NPTEL Data Analytics",
      description: "Earned my third NPTEL certification in Data Analytics with Python and strengthened my understanding of AI/ML concepts and predictive models.",
      checkpoint: true,
    },
  ];
const manualPositions = [
  { left: "18%", top: "82%" }, // 2019
  { left: "30%", top: "81%" }, // 2023
  { left: "42%", top: "80%" }, // 2024
  { left: "56%", top: "74%" }, // Jan 2025

  { left: "68%", top: "66%" }, // May 2025
  { left: "78%", top: "60%" }, // CTTC
  { left: "88%", top: "54%" }, // IPL

  { left: "84%", top: "44%" }, // AI Workshop
  { left: "74%", top: "38%" }, // Joy
  { left: "64%", top: "32%" }, // Microsoft

  { left: "54%", top: "26%" }, // Oil
  { left: "42%", top: "20%" }, // Inflation
  { left: "30%", top: "14%" }, // NPTEL DA
];
useEffect(() => {
  if (!isMobile) return;

  const handleScroll = () => {
    const revealLine =
      window.innerHeight * 0.82;

    const visibleCards = [];

    cardRefs.current.forEach(
      (card, index) => {
        if (!card) return;

        const rect =
          card.getBoundingClientRect();

        if (rect.top < revealLine) {
          visibleCards.push(index);
        }
      }
    );

    setRevealedCards(visibleCards);
  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  handleScroll();

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, [isMobile]);

useEffect(() => {
  const path = document.getElementById("journeyPath");

  if (!path) return;

  const totalLength = path.getTotalLength();

  const points = milestones.map((_, index) => {
    const distance =
      (totalLength / (milestones.length - 1)) * index;

    const point = path.getPointAtLength(distance);

    return {
      left: `${point.x}px`,
      top: `${point.y}px`,
    };
  });

  setPositions(points);
}, []);
useEffect(() => {
  const handleScroll = () => {
  setPinnedMilestone(null);
  setActiveMilestone(null);
};

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

useEffect(() => {
  const section = document.getElementById("journey");

  const observer = new IntersectionObserver(
    ([entry]) => {
     if (entry.isIntersecting) {
  setAnimateRoad(true);

  const duration = 4000;
  const start = Date.now();

  const interval = setInterval(() => {
    const elapsed = Date.now() - start;

    const progress = Math.min(
      elapsed / duration,
      1
    );

    setRoadProgress(progress);

    if (progress >= 1) {
      clearInterval(interval);
    }
  }, 16);
}
    },
    {
      threshold: 0.3,
    }
  );
  if (section) {
    observer.observe(section);
  }
  return () => observer.disconnect();
}, []);

useEffect(() => {
  const handleClick = (event) => {
    if (
      journeyRef.current &&
      !journeyRef.current.contains(event.target)
    ) {
      setPinnedMilestone(null);
      setActiveMilestone(null);
    }
  };

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const scrollingDown =
        window.scrollY > lastScrollY.current;

      if (
        entry.isIntersecting &&
        scrollingDown &&
        isMobile
      ) {
        setAnimateMobile(true);
      }

      if (
  entry.boundingClientRect.top > window.innerHeight
) {
  setAnimateMobile(false);
}

      lastScrollY.current = window.scrollY;
    },
    {
      threshold: 0.2,
    }
  );

  if (journeyRef.current) {
    observer.observe(journeyRef.current);
  }

  return () => observer.disconnect();
}, [isMobile]);

const path = document.getElementById("journeyPath");

let midPoint = null;

if (path) {
  const totalLength = path.getTotalLength();
  midPoint = path.getPointAtLength(totalLength / 2);
}

let checkpointPoints = [];

if (path) {
  const totalLength = path.getTotalLength();

  checkpointPoints = milestones.map((_, index) => {
    return path.getPointAtLength(
      (totalLength / (milestones.length - 1)) * index
    );
  });
}


  return (
  <section
  id="journey"
  className="journey"
  ref={journeyRef}
  onClick={() => {
    setPinnedMilestone(null);
    setActiveMilestone(null);
  }}
>
    <h2>My Journey</h2>

{!isMobile && (
  <div className="journey-scroll">
    <div
  className="snake-container"
  onClick={() => {
    setPinnedMilestone(null);
    setActiveMilestone(null);
  }}
   >
   <svg
  className="snake-path"
  viewBox="-150 -120 1700 1100"
  preserveAspectRatio="none"
>
  <path
  id="journeyPath"
  className={
    animateRoad
      ? "journey-line draw-road"
      : "journey-line"
  }
  d="
  M 150 750
  L 1200 750
  Q 1300 750 1300 650
  L 1300 500
  Q 1300 400 1200 400
  L 150 400
  Q 50 400 50 300
  L 50 150
  Q 50 50 150 50
  L 1200 50
  "
/>
{checkpointPoints.map((point, index) => {

  const milestoneProgress =
    index / (milestones.length - 1);

  const isVisible =
    roadProgress >= milestoneProgress ;

  const isActive =
    activeMilestone?.id === milestones[index].id ||
    pinnedMilestone?.id === milestones[index].id;

  const isCurrent =
    index === milestones.length - 1;

  const shouldGlow =
    isActive ||
    (
      isCurrent &&
      !activeMilestone &&
      !pinnedMilestone
    );

  return (
 <g
  key={index}
  style={{
    cursor: "pointer",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.7)",
    transformOrigin: `${point.x}px ${point.y}px`,
    transition:
  "opacity 0.4s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
  }}
  onMouseEnter={() => {
  setPinnedMilestone(null);
  setActiveMilestone(milestones[index]);
}}
  onMouseLeave={() => setActiveMilestone(null)}
 onClick={(e) => {
  e.stopPropagation();
  setPinnedMilestone(milestones[index]);
}}

>
  <circle
  cx={point.x}
  cy={point.y}
  r="30"
  fill="transparent"
/>

<circle
  className={
    shouldGlow
      ? "checkpoint-dot active-dot"
      : "checkpoint-dot"
  }
  cx={point.x}
  cy={point.y}
  r={shouldGlow ? 22 : 16}
  
  fill="#38bdf8"
  opacity={
    activeMilestone?.id === milestones[index].id ||
    pinnedMilestone?.id === milestones[index].id
      ? 1
      : 0.8
  }
/>
{(
  activeMilestone?.id === milestones[index].id ||
  pinnedMilestone?.id === milestones[index].id
) && (
  <circle
    cx={point.x}
    cy={point.y}
    r="26"
    fill="none"
    stroke="#38bdf8"
    strokeWidth="3"
    opacity="0.5"
  />
)}
    {index === 0 && (
  <text
    x={point.x}
    y={point.y - 100}
    textAnchor="middle"
    fill="#facc15"
    fontSize="18"
    fontWeight="700"
  >
    🚀 START
  </text>
)}
{index === milestones.length - 1 && (
  <text
    x={point.x}
    y={point.y - 100}
    textAnchor="middle"
    fill="#22c55e"
    fontSize="18"
    fontWeight="700"
  >
    📍 CURRENT
  </text>
)}

    <text
  x={
    index === 4
      ? point.x - 50
      : index === 8
      ? point.x + 50
      : point.x
  }
  y={
    index === 4 || index === 8
      ? point.y - 8
      : index % 2 === 0
      ? point.y - 35
      : point.y + 45
  }
  textAnchor={
    index === 4
      ? "end"
      : index === 8
      ? "start"
      : "middle"
  }
  fill="white"
  fontSize="21"
  fontWeight="700"
>
  {milestones[index].year}
</text>
<text
  x={
    index === 4
      ? point.x - 50
      : index === 8
      ? point.x + 50
      : point.x
  }
  y={
    index === 4 || index === 8
      ? point.y + 20
      : index % 2 === 0
      ? point.y - 70
      : point.y + 80
  }
  textAnchor={
    index === 4
      ? "end"
      : index === 8
      ? "start"
      : "middle"
  }
  fill="white"
  fontSize="16"
  fontWeight="300"
>
  {milestones[index].title}
</text>
  </g>
);
})}

</svg>

         
 {displayedMilestone && (
  <div className="hover-card">
          <h3>{displayedMilestone.title}</h3>

          <h4>{displayedMilestone.year}</h4>

          <p>{displayedMilestone.description}</p>
        </div>
      )}
    </div>
    </div>
)}
{isMobile && (
 <div
  className="mobile-timeline"
>
    {[...milestones].reverse().map((milestone, index) => (
   <div
  key={milestone.id}
  ref={(el) =>
    (cardRefs.current[index] = el)
  }
  className={`mobile-milestone ${
    revealedCards.includes(index)
      ? "revealed"
      : "hidden-card"
  }`}
  onClick={(e) => {
    e.stopPropagation();

    setPinnedMilestone((prev) =>
      prev?.id === milestone.id ? null : milestone
    );
  }}
>
 <div
  className={
    index === 0
      ? "mobile-dot current-dot"
      : index === milestones.length - 1
      ? "mobile-dot start-dot"
      : "mobile-dot"
  }
>
  {index === 0
    ? "📍"
    : index === milestones.length - 1
    ? "🚀"
    : ""}
</div>
 <div
  className={`mobile-card ${
    pinnedMilestone?.id === milestone.id ? "active" : ""
  }`}
>
  <div className="mobile-row">
    <span>{milestone.year}</span>
    <span>{milestone.title}</span>
  </div>
</div>
      </div>
    ))}
  </div>
)}
  </section>
);
}

export default Journey;