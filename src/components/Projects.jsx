import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";
import MobileProjectModal from "./MobileProjectModal";
import Reveal from "./Reveal";
import {
  FaOilCan,
  FaChartLine,
  FaChartBar
} from "react-icons/fa";
function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const [selectedProject, setSelectedProject] = useState(null);
const [expandedProject, setExpandedProject] = useState(null);
const [mobileDetails, setMobileDetails] = useState(null);
useEffect(() => {
  document.body.style.overflow = mobileDetails ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileDetails]);
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
  if (!isMobile) return;

  const clearSelection = () => {
    setSelectedProject(null);
  };

  window.addEventListener("scroll", clearSelection);

  return () => {
    window.removeEventListener("scroll", clearSelection);
  };
}, [isMobile]);
useEffect(() => {
  const clearSelection = () => {
    setSelectedProject(null);
  };

  window.addEventListener("pageshow", clearSelection);
  window.addEventListener("focus", clearSelection);

  return () => {
    window.removeEventListener("pageshow", clearSelection);
    window.removeEventListener("focus", clearSelection);
  };
}, []);
useEffect(() => {
  const clearFocus = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  window.addEventListener("pageshow", clearFocus);
  window.addEventListener("focus", clearFocus);
  document.addEventListener("visibilitychange", clearFocus);

  return () => {
    window.removeEventListener("pageshow", clearFocus);
    window.removeEventListener("focus", clearFocus);
    document.removeEventListener("visibilitychange", clearFocus);
  };
}, []);

  useEffect(() => {
  const handlePageShow = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  window.addEventListener("pageshow", handlePageShow);

  return () => {
    window.removeEventListener("pageshow", handlePageShow);
  };
}, []);
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">

        <div
  className={`project-card ${
  selectedProject === 1 ? "active" : ""
} ${
  expandedProject === "oil" ? "expanded" : ""
}`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedProject((prev) =>
      prev === 1 ? null : 1
    );
  }}
>
  <div className="project-content">
          <img
             src="/images/oil price trend in India.png"
             alt="Oil Price Prediction"
             className="project-image"
          />

          <h3>Oil Price Prediction of India</h3>
          <p>
            Machine Learning model for forecasting oil prices.</p>
            <div className="project-tags">
  <span>Python</span>
  <span>Pandas</span>
  <span>Scikit-Learn</span>
  <span>Machine Learning</span>
</div>

<div className="project-highlights">
  <span>R² = 0.978</span>
  <span>MAE = 190</span>
  <span>Forecasting</span>
</div>
</div>
<div className="project-divider"></div>
        <div className="project-actions">

  <a
    href="https://github.com/Sisir-Pradhan07/oil-price-prediction-india"
    target="_blank"
    rel="noopener noreferrer"
    className="project-action github-btn"
    onClick={(e) => {
  e.stopPropagation();

  setSelectedProject(null);

  e.currentTarget.blur();

  setTimeout(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, 0);
}}
    
  >
    <FaGithub />
    <span>GitHub</span>
  </a>

  <a
    href="https://github.com/Sisir-Pradhan07/oil-price-prediction-india"
    target="_blank"
  rel="noopener noreferrer"
    className="project-action demo-btn"
    onClick={(e) => {
  e.stopPropagation();

  setSelectedProject(null);

  e.currentTarget.blur();

  setTimeout(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, 0);
}}
  >
    <FaGlobe />
    <span>{isMobile ? "Live" : "Live Demo"}</span>
  </a>

</div>

<button
  className="details-btn"
  onClick={() => {
    if (isMobile) {
      setMobileDetails("oil");
    } else {
      setExpandedProject(
        expandedProject === "oil" ? null : "oil"
      );
    }
  }}
>
  {expandedProject === "oil"
    ? "Hide Details ▲"
    : "View Details ▼"}
</button>

        </div>

        <div
  className={`project-card ${
  selectedProject === 2 ? "active" : ""
} ${
  expandedProject === "inflation" ? "expanded" : ""
}`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedProject((prev) =>
      prev === 2 ? null : 2
    );
  }}
>
  <div className="project-content">
          <img
             src="/images/Inflation over USD_INR.png"
             alt="Inflation Rate Prediction"
             className="project-image"
          />
          <h3>Inflation Prediction of India</h3>
          <p>
            Inflation trends using macroeconomic variables.
          </p>
          <div className="project-tags">
  <span>Python</span>
  <span>Pandas</span>
  <span>Scikit-Learn</span>
  <span>Machine Learning</span>
</div>

<div className="project-highlights">
  <span>Macroeconomics</span>
  <span>Forecasting</span>
  <span>Prediction</span>
</div>
</div>
<div className="project-divider"></div>
          <div className="project-actions">

  <a
    href="https://github.com/Sisir-Pradhan07/inflation-rate-prediction-india"
    target="_blank"
    rel="noopener noreferrer"
    className="project-action github-btn"
    onClick={(e) => {
  e.stopPropagation();

  setSelectedProject(null);

  e.currentTarget.blur();

  setTimeout(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, 0);
}}
  >
    <FaGithub />
    <span>GitHub</span>
  </a>

  <a
    href="https://github.com/Sisir-Pradhan07/inflation-rate-prediction-india"
    target="_blank"
  rel="noopener noreferrer"
    className="project-action demo-btn"
    onClick={(e) => {
  e.stopPropagation();

  setSelectedProject(null);

  e.currentTarget.blur();

  setTimeout(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, 0);
}}
  >
    <FaGlobe />
    <span>{isMobile ? "Live" : "Live Demo"}</span>
  </a>

</div>

<button
  className="details-btn"
  onClick={() => {
  if (isMobile) {
    setMobileDetails("inflation");
  } else {
    setExpandedProject(
      expandedProject === "inflation" ? null : "inflation"
    );
  }
}}
>
  {expandedProject === "inflation"
    ? "Hide Details ▲"
    : "View Details ▼"}
</button>
        </div>

        <div
  className={`project-card ${
  selectedProject === 3 ? "active" : ""
} ${
  expandedProject === "ipl" ? "expanded" : ""
}`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedProject((prev) =>
      prev === 3 ? null : 3
    );
  }}
>
  <div className="project-content">
          <img
             src="/images/Overall view.png"
             alt="IPL Centuries Analysis"
             className="project-image"
          />
          <h3>IPL Centuries Dashboard</h3>
          <p>
            IPL century analytics and insights in Power BI.
          </p>
          <div className="project-tags">
  <span>Power BI</span>
  <span>MySQL</span>
  <span>DAX</span>
  <span>Power Query</span>
</div>

<div className="project-highlights">
  <span>Interactive</span>
  <span>Dashboard</span>
  <span>Insights</span>
</div>
</div>
<div className="project-divider"></div>
          <div className="project-actions">

  <a
    href="https://github.com/Sisir-Pradhan07/ipl-century-dashboard"
    target="_blank"
    rel="noopener noreferrer"
    className="project-action github-btn"
    onClick={(e) => {
  e.stopPropagation();

  setSelectedProject(null);

  e.currentTarget.blur();

  setTimeout(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, 0);
}}
  >
    <FaGithub />
    <span>GitHub</span>
  </a>

  <a
    href="https://github.com/Sisir-Pradhan07/ipl-century-dashboard"
    target="_blank"
  rel="noopener noreferrer"
    className="project-action demo-btn"
    onClick={(e) => {
  e.stopPropagation();

  setSelectedProject(null);

  e.currentTarget.blur();

  setTimeout(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, 0);
}}
  >
    <FaGlobe />
    <span>{isMobile ? "Live" : "Live Demo"}</span>
  </a>

</div>

<button
  className="details-btn"
  onClick={() => {
  if (isMobile) {
    setMobileDetails("ipl");
  } else {
    setExpandedProject(
      expandedProject === "ipl" ? null : "ipl"
    );
  }
}}
>
  {expandedProject === "ipl"
    ? "Hide Details ▲"
    : "View Details ▼"}
</button>
        </div>

      </div>
      <AnimatePresence mode="wait">
  {expandedProject && (
    <motion.div
  layout
  key={expandedProject}
  className="project-details"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{
    layout: { duration: 0.35, ease: "easeInOut" },
    opacity: { duration: 0.25 },
    y: { duration: 0.35 }
  }}
>

    <h2 className="project-details-title">

  {expandedProject === "oil" && (
    <>
      <FaOilCan className="details-title-icon" />
      Oil Price Prediction of India
    </>
  )}

  {expandedProject === "inflation" && (
    <>
      <FaChartLine className="details-title-icon" />
      Inflation Prediction of India
    </>
  )}

  {expandedProject === "ipl" && (
    <>
      <FaChartBar className="details-title-icon" />
      IPL Centuries Dashboard
    </>
  )}

</h2>

<div className="details-two-column">

  <div className="details-box">

    <h3>Project Overview</h3>

    <p>
      {expandedProject === "oil" &&
        "Developed a Machine Learning regression model to predict Indian oil prices using global economic indicators such as Brent crude prices, USD-INR exchange rates, global demand, and geopolitical conflict data."}

      {expandedProject === "inflation" &&
        "Built a Machine Learning model to predict India's inflation rate using macroeconomic indicators including Brent oil prices, USD-INR exchange rates, repo rate, petrol prices, and rainfall data."}

      {expandedProject === "ipl" &&
        "Designed an interactive Power BI dashboard to analyze IPL century statistics, player performance, strike rates, venue-wise records, and team-wise insights through dynamic visualizations."}
    </p>

  </div>

  <div className="details-box">

    <h3>Problem Statement</h3>

    <p>
      {expandedProject === "oil" &&
        "Oil prices significantly influence transportation, inflation, and industrial costs in India. This project forecasts future oil prices using Machine Learning and economic indicators."}

      {expandedProject === "inflation" &&
        "This project predicts India's inflation rate by analyzing macroeconomic indicators and comparing multiple Machine Learning regression models."}

      {expandedProject === "ipl" &&
        "This dashboard transforms IPL batting data into interactive visualizations, making player and team performance easy to analyze."}
    </p>

  </div>

</div>

  <h3>Dataset</h3>

<div className="dataset-grid">

  {expandedProject === "oil" && (
    <>
      <div className="dataset-card">
        <h4>📄 Source</h4>
        <p>Custom Dataset</p>
      </div>

      <div className="dataset-card">
        <h4>📅 Period</h4>
        <p>2003 – 2025</p>
      </div>

      <div className="dataset-card">
        <h4>📊 Records</h4>
        <p>Annual Data</p>
      </div>

      <div className="dataset-card">
        <h4>🎯 Target</h4>
        <p>Oil Price (INR/barrel)</p>
      </div>
    </>
  )}

  {expandedProject === "inflation" && (
    <>
      <div className="dataset-card">
        <h4>📄 Source</h4>
        <p>Custom Dataset</p>
      </div>

      <div className="dataset-card">
        <h4>📅 Period</h4>
        <p>2003 – 2025</p>
      </div>

      <div className="dataset-card">
        <h4>📊 Records</h4>
        <p>Annual Data</p>
      </div>

      <div className="dataset-card">
        <h4>🎯 Target</h4>
        <p>Inflation Rate (%)</p>
      </div>
    </>
  )}

  {expandedProject === "ipl" && (
    <>
      <div className="dataset-card">
        <h4>📄 Source</h4>
        <p>IPL Dataset</p>
      </div>

      <div className="dataset-card">
        <h4>📅 Seasons</h4>
        <p>Multiple Seasons</p>
      </div>

      <div className="dataset-card">
        <h4>📊 Records</h4>
        <p>Players & Matches</p>
      </div>

      <div className="dataset-card">
        <h4>🎯 Output</h4>
        <p>Interactive Dashboard</p>
      </div>
    </>
  )}

</div>

   <div className="details-two-column">

  <div className="details-box">

    <h3>Key Features</h3>

    <div className="details-tags">

      {expandedProject === "oil" && (
  <>
    <span>Brent Oil</span>
    <span>WTI Oil</span>
    <span>USD-INR</span>
    <span>OPEC</span>
    <span>Demand</span>
    <span>Conflict</span>
  </>
)}

{expandedProject === "inflation" && (
  <>
    <span>Brent Oil</span>
    <span>USD-INR</span>
    <span>Repo Rate</span>
    <span>Petrol Price</span>
    <span>Rainfall</span>
    <span>Inflation</span>
  </>
)}

{expandedProject === "ipl" && (
  <>
    <span>Top Players</span>
    <span>Venues</span>
    <span>Strike Rate</span>
    <span>Teams</span>
    <span>Century Trends</span>
    <span>Interactive Dashboard</span>
  </>
)}

    </div>

  </div>

  <div className="details-box">

    <h3>
      {expandedProject === "ipl"
        ? "Tools Used"
        : "Models Used"}
    </h3>

    <div className="details-tags">

      {expandedProject === "oil" && (
  <>
    <span>Linear Regression</span>
    <span>Ridge Regression</span>
    <span>KNN</span>
  </>
)}

{expandedProject === "inflation" && (
  <>
    <span>Linear Regression</span>
    <span>Ridge Regression</span>
    <span>KNN</span>
    <span>Random Forest</span>
  </>
)}

{expandedProject === "ipl" && (
  <>
    <span>Power BI</span>
    <span>DAX</span>
    <span>Power Query</span>
    <span>CSV Dataset</span>
  </>
)}

    </div>

  </div>

</div>

  <h3>
  {expandedProject === "ipl"
    ? "Dashboard Highlights"
    : "Performance"}
</h3>

{/* ================= OIL ================= */}

{expandedProject === "oil" && (

<div className="performance-grid">

  <div className="performance-card">

    <div className="performance-title">
      <h4>Linear Regression</h4>
      <span className="best-model">Best</span>
    </div>

    <p><strong>R²</strong><span>0.978</span></p>
    <p><strong>RMSE</strong><span>238</span></p>
    <p><strong>MAE</strong><span>190</span></p>

  </div>

  <div className="performance-card">

    <h4>Ridge Regression</h4>

    <p><strong>R²</strong><span>0.977</span></p>
    <p><strong>RMSE</strong><span>244</span></p>
    <p><strong>MAE</strong><span>190</span></p>

  </div>

  <div className="performance-card">

    <h4>KNN</h4>

    <p><strong>R²</strong><span>0.947</span></p>
    <p><strong>RMSE</strong><span>370</span></p>
    <p><strong>MAE</strong><span>237</span></p>

  </div>

</div>

)}

{/* ================= INFLATION ================= */}

{expandedProject === "inflation" && (

<div className="performance-grid">

  <div className="performance-card">

    <h4>Linear Regression</h4>

    <p><strong>R²</strong><span>0.174</span></p>
    <p><strong>RMSE</strong><span>1.562</span></p>
    <p><strong>MAE</strong><span>1.290</span></p>

  </div>

  <div className="performance-card">

    <h4>Ridge Regression</h4>

    <p><strong>R²</strong><span>0.138</span></p>
    <p><strong>RMSE</strong><span>1.595</span></p>
    <p><strong>MAE</strong><span>1.332</span></p>

  </div>

  <div className="performance-card">

    <h4>KNN</h4>

    <p><strong>R²</strong><span>0.568</span></p>
    <p><strong>RMSE</strong><span>1.129</span></p>
    <p><strong>MAE</strong><span>0.835</span></p>

  </div>

  <div className="performance-card">

    <div className="performance-title">
      <h4>Random Forest</h4>
      <span className="best-model">Best</span>
    </div>

    <p><strong>R²</strong><span>0.690</span></p>
    <p><strong>RMSE</strong><span>0.948</span></p>
    <p><strong>MAE</strong><span>0.736</span></p>

  </div>

</div>

)}

{/* ================= IPL ================= */}

{expandedProject === "ipl" && (

<div className="performance-grid">

  <div className="performance-card">
    <h4>Total Centuries</h4>
    <p><strong>Count</strong><span>175</span></p>
  </div>

  <div className="performance-card">
    <h4>Players</h4>
    <p><strong>Total</strong><span>108</span></p>
  </div>

  <div className="performance-card">
    <h4>Highest Strike Rate</h4>
    <p><strong>SR</strong><span>193.7</span></p>
  </div>

  <div className="performance-card">

    <div className="performance-title">
      <h4>Dashboard</h4>
      <span className="best-model">Interactive</span>
    </div>

    <p><strong>Platform</strong><span>Power BI</span></p>

  </div>

</div>

)}

    <div className="details-two-column">

  <div className="details-box">

    <h3>Key Insights</h3>

    <ul>

      {expandedProject === "oil" && (
  <>
    <li>Linear Regression achieved the highest prediction accuracy.</li>
    <li>Ridge Regression improved model stability with comparable performance.</li>
    <li>Brent crude prices and USD-INR exchange rates showed the strongest influence on oil prices.</li>
  </>
)}

{expandedProject === "inflation" && (
  <>
    <li>Random Forest delivered the best prediction accuracy.</li>
    <li>KNN outperformed Linear and Ridge Regression.</li>
    <li>Macroeconomic indicators significantly influenced inflation trends.</li>
  </>
)}

{expandedProject === "ipl" && (
  <>
    <li>Virat Kohli leads in IPL century runs.</li>
    <li>Century frequency has increased in recent IPL seasons.</li>
    <li>Interactive visuals simplify player and team performance analysis.</li>
  </>
)}
    </ul>

  </div>

  <div className="details-box">

    <h3>
      {expandedProject === "ipl"
        ? "Tools & Technologies"
        : "Technologies"}
    </h3>

    <div className="details-tags">

     {expandedProject === "oil" && (
  <>
    <span>Python</span>
    <span>Pandas</span>
    <span>NumPy</span>
    <span>Scikit-Learn</span>
    <span>Matplotlib</span>
    <span>Seaborn</span>
  </>
)}

{expandedProject === "inflation" && (
  <>
    <span>Python</span>
    <span>Pandas</span>
    <span>NumPy</span>
    <span>Scikit-Learn</span>
    <span>Matplotlib</span>
    <span>Seaborn</span>
  </>
)}

{expandedProject === "ipl" && (
  <>
    <span>Power BI</span>
    <span>DAX</span>
    <span>Power Query</span>
    <span>CSV</span>
  </>
)}
    </div>

  </div>

</div>
    {/* We'll add screenshots later */}

   <h3>Future Scope</h3>

<div className="future-grid">

{expandedProject === "oil" && (
<>
<div className="future-card">📈 Advanced Time-Series Forecasting</div>
<div className="future-card">🌐 Deploy with Flask / Streamlit</div>
<div className="future-card">📊 Add More Economic Indicators</div>
</>
)}

{expandedProject === "inflation" && (
<>
<div className="future-card">📈 Improve Model Accuracy</div>
<div className="future-card">⚙ Hyperparameter Optimization</div>
<div className="future-card">🌐 Deploy as Web Application</div>
</>
)}

{expandedProject === "ipl" && (
<>
<div className="future-card">📅 Season-wise Analysis</div>
<div className="future-card">📡 Live IPL Data Integration</div>
<div className="future-card">☁ Publish on Power BI Service</div>
</>
)}

</div>
  </motion.div>
)}
</AnimatePresence>
<MobileProjectModal
  open={!!mobileDetails}
  onClose={() => setMobileDetails(null)}
  title={
    mobileDetails === "oil"
      ? "🛢 Oil Price Prediction"
      : mobileDetails === "inflation"
      ? "📈 Inflation Prediction"
      : "🏏 IPL Centuries Dashboard"
  }
>

{mobileDetails === "oil" && (
  <>
    <div className="mobile-section">
      <h4>📌 Overview</h4>
      <p>
        Machine Learning regression model developed to forecast
        Indian oil prices using Brent crude prices, USD-INR
        exchange rate, global demand and geopolitical indicators.
      </p>
    </div>

    <div className="mobile-section">
      <h4>🎯 Objective</h4>
      <p>
        Compare multiple regression models and identify the most
        accurate approach for predicting future oil prices.
      </p>
    </div>

    <div className="mobile-section">
      <h4>🛠 Tech Stack</h4>
      <div className="mobile-tags">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-Learn</span>
      </div>
    </div>

    <div className="mobile-section">
      <h4>🧠 Models</h4>
      <div className="mobile-tags">
        <span>Linear</span>
        <span>Ridge</span>
        <span>KNN</span>
      </div>
    </div>

    <div className="mobile-section">
      <h4>🏆 Best Performance</h4>

      <div className="mobile-result">
        <span>R²</span>
        <strong>0.978</strong>
      </div>

      <div className="mobile-result">
        <span>RMSE</span>
        <strong>238</strong>
      </div>

      <div className="mobile-result">
        <span>MAE</span>
        <strong>190</strong>
      </div>
    </div>

    <div className="mobile-section">
      <h4>✨ Key Features</h4>

      <div className="mobile-tags">
        <span>Brent Oil</span>
        <span>USD-INR</span>
        <span>Demand</span>
        <span>Conflict</span>
        <span>Forecasting</span>
        <span>Model Comparison</span>
      </div>
    </div>
  </>
)}

{mobileDetails === "inflation" && (
  <>
    <div className="mobile-section">
      <h4>📌 Overview</h4>
      <p>
        Machine Learning model developed to predict India's
        inflation using macroeconomic indicators and historical
        inflation trends.
      </p>
    </div>

    <div className="mobile-section">
      <h4>🎯 Objective</h4>
      <p>
        Analyze inflation behaviour and compare regression
        algorithms to improve prediction accuracy.
      </p>
    </div>

    <div className="mobile-section">
      <h4>🛠 Tech Stack</h4>

      <div className="mobile-tags">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-Learn</span>
      </div>
    </div>

    <div className="mobile-section">
      <h4>🧠 Models</h4>

      <div className="mobile-tags">
        <span>Linear</span>
        <span>Ridge</span>
        <span>KNN</span>
        <span>Random Forest</span>
      </div>
    </div>

    <div className="mobile-section">
      <h4>🏆 Best Model</h4>

      <div className="mobile-result">
        <span>Random Forest</span>
        <strong>R² 0.690</strong>
      </div>
    </div>

    <div className="mobile-section">
      <h4>✨ Features</h4>

      <div className="mobile-tags">
        <span>CPI</span>
        <span>Forecasting</span>
        <span>Rainfall</span>
        <span>Repo Rate</span>
        <span>Analytics</span>
      </div>
    </div>
  </>
)}

{mobileDetails === "ipl" && (
  <>
    <div className="mobile-section">
      <h4>📌 Overview</h4>
      <p>
        Interactive Power BI dashboard built for analysing IPL
        century records, players, teams and season-wise
        performance.
      </p>
    </div>

    <div className="mobile-section">
      <h4>🎯 Objective</h4>
      <p>
        Transform raw IPL data into interactive dashboards for
        quick insights and performance analysis.
      </p>
    </div>

    <div className="mobile-section">
      <h4>🛠 Tools</h4>

      <div className="mobile-tags">
        <span>Power BI</span>
        <span>DAX</span>
        <span>Power Query</span>
        <span>CSV</span>
      </div>
    </div>

    <div className="mobile-section">
      <h4>📊 Dashboard</h4>

      <div className="mobile-tags">
        <span>KPI Cards</span>
        <span>Player Analysis</span>
        <span>Team Analysis</span>
        <span>Filters</span>
      </div>
    </div>

    <div className="mobile-section">
      <h4>✨ Highlights</h4>

      <div className="mobile-tags">
        <span>Interactive</span>
        <span>Responsive</span>
        <span>Insights</span>
        <span>Visual Analytics</span>
      </div>
    </div>
  </>
)}

</MobileProjectModal>
    </section>
  );
}

export default Projects;