function login() {
  alert("🔐 Login/signup system is under development using Supabase backend.");
}

function generateCode() {
  alert("💡 Use AI tools like ChatGPT or Gemini to generate your code and paste it below.");
}

function preview() {
  const areas = document.querySelectorAll("textarea");
  let html = areas[0]?.value || "";
  let css = areas[1]?.value || "";
  let js = areas[2]?.value || "";

  const output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;

  const blob = new Blob([output], { type: "text/html" });
  const frame = document.getElementById("preview-frame");
  frame.src = URL.createObjectURL(blob);
}
