  // Create the AI Assistant button
  const aiButton = document.createElement("button");
  aiButton.textContent = "AI Assistant";
  Object.assign(aiButton.style, {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 18px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: "10000",
  });
  document.body.appendChild(aiButton);

  // Create the modal overlay
  const modal = document.createElement("div");
  Object.assign(modal.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10001",
  });

  // Modal content container
  const modalContent = document.createElement("div");
  Object.assign(modalContent.style, {
    position: "relative",
    width: "80%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  });

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://agent.bult.ai";
  Object.assign(iframe.style, {
    width: "100%",
    height: "100%",
    border: "none",
  });

  // Create Close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  Object.assign(closeButton.style, {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "rgba(0,0,0,0.7)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: "10002",
  });

  // Add elements together
  modalContent.appendChild(closeButton);
  modalContent.appendChild(iframe);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Button click event
  aiButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal event
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
