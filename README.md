# portfolio-web
 Vite + React + TailwindCSS


<div style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          display: !init ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <PageLoader />