function preview() {
  const areas = document.querySelectorAll("textarea");
  let html = "", css = "", js = "";

  areas.forEach((area, i) => {
    const code = area.value;
    if (i % 3 === 0) html += code + "\\n";
    else if (i % 3 === 1) css += code + "\\n";
    else js += code + "\\n";
  });

  const output = `
    <html>
    <head><style>${css}</style></head>
    <body>${html}<script>${js}<\/script></body>
    </html>
  `;

  const iframe = document.getElementById("livePreview");
  iframe.srcdoc = output;
}
function submitApp() {
  alert("✅ Your app has been created successfully (preview-only mode). Export coming soon!");
}

function resetForm() {
  const areas = document.querySelectorAll("textarea");
  areas.forEach(area => area.value = "");
}
function shareApp() {
  const projectName = document.getElementById("projectName").value || "My AutoCodeX App";
  const previewText = encodeURIComponent(🚀 Check out the app I built using AutoCodeX: ${projectName});
  const shareURL = "https://autocodex-user.vercel.app"; // Change to actual app preview URL
  
  const whatsappURL = https://wa.me/?text=${previewText}%0A${shareURL};
  window.open(whatsappURL, "_blank");
}
