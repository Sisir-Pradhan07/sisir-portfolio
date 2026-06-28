function LoadingScreen({ fadeOut }) {
  return (
    <div
  className={`loading-screen ${
    fadeOut ? "loading-fade" : ""
  }`}
>
      <div className="loading-content">

        <h1 className="loading-name">
          Sisir Pradhan
        </h1>

        <p className="loading-role">
          Data Analytics • Machine Learning
        </p>

        <div className="loading-bar">
          <div className="loading-fill"></div>
        </div>

        <p className="loading-text">
          Building Insights...
        </p>

      </div>
    </div>
  );
}

export default LoadingScreen;