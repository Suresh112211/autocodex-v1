function login() {
  alert("Login system coming soon in backend (Supabase).");
}

function generateCode() {
  alert("Generate with ChatGPT/Gemini and paste below.");
}

function preview() {
  const areas = document.querySelectorAll("textarea");
  let html = areas[0]?.value || "";
  let css = areas[1]?.value || "";
  let js = areas[2]?.value || "";

  const output = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;

  const frame = document.getElementById("preview-frame");
  const blob = new Blob([output], { type: "text/html" });
  frame.src = URL.createObjectURL(blob);
}
