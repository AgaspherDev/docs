// Create the AI Assistant button
  const aiButton = document.createElement("button");
  aiButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" 
         width="20" height="20" viewBox="0 0 24 24" 
         fill="none" stroke="currentColor" stroke-width="2" 
         stroke-linecap="round" stroke-linejoin="round" 
         class="lucide lucide-sparkles" aria-hidden="true" 
         style="margin-right:8px;">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
      <path d="M20 3v4"></path>
      <path d="M22 5h-4"></path>
      <path d="M4 17v2"></path>
      <path d="M5 18H3"></path>
    </svg>
    <span>Ask</span>
  `;

  Object.assign(aiButton.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    background: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    padding: "12px 18px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: "10000",
    transition: "transform 0.2s ease",
  });
  aiButton.id = "ai-button";

  // Hover animation
  aiButton.addEventListener("mouseenter", () => {
    aiButton.style.transform = "scale(1.05)";
  });
  aiButton.addEventListener("mouseleave", () => {
    aiButton.style.transform = "scale(1)";
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

  // Assemble modal
  modalContent.appendChild(closeButton);
  modalContent.appendChild(iframe);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Button click event
  aiButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal events
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });