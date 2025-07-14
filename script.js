function preview() {
  const areas = document.querySelectorAll("textarea");
  let html = "", css = "", js = "";

  areas.forEach((area, i) => {
    const code = area.value;
    if (i % 3 === 0) {
      html += code + "\\n";
    } else if (i % 3 === 1) {
      css += code + "\\n";
    } else {
      js += code + "\\n";
    }
  });

  const output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;

  const iframe = document.getElementById("livePreview");
  iframe.srcdoc = output;
}

function submitApp() {
  alert("✅ Your app has been created (Preview Only). Download & deploy feature coming soon!");
}

function resetForm() {
  document.querySelectorAll("textarea").forEach(area => area.value = "");
  document.getElementById("projectName").value = "";
  document.getElementById("livePreview").srcdoc = "";
}

function shareApp() {
  const projectName = document.getElementById("projectName").value || "My AutoCodeX App";
  const shareURL = "https://autocodex-user.vercel.app"; // Replace with your domain
  const fullText = encodeURIComponent(`🚀 Check out my app built with AutoCodeX: ${projectName}\n${shareURL}`);
  const whatsappURL = `https://wa.me/?text=${fullText}`;
  window.open(whatsappURL, "_blank");
}
