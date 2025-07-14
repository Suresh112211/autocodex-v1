function preview() {
  const areas = document.querySelectorAll("textarea");
  let html = "", css = "", js = "";

  areas.forEach((area, i) => {
    const code = area.value;
    if (i % 3 === 0) html += code + "\n";
    else if (i % 3 === 1) css += code + "\n";
    else js += code + "\n";
  });

  const output = `
    <!DOCTYPE html>
    <html>
    <head><style>${css}</style></head>
    <body>${html}<script>${js}<\/script></body>
    </html>
  `;
  document.getElementById("livePreview").srcdoc = output;
}

function resetForm() {
  document.querySelectorAll("textarea").forEach(area => area.value = "");
  document.getElementById("projectName").value = "";
  document.getElementById("livePreview").srcdoc = "";
}

function submitApp() {
  alert("✅ App created (preview only).");
}

function shareApp() {
  const name = document.getElementById("projectName").value || "My AutoCodeX App";
  const link = "https://autocodex-user.vercel.app";
  const full = encodeURIComponent(`🚀 Check out my app: ${name}\n${link}`);
  window.open(`https://wa.me/?text=${full}`, "_blank");
}
