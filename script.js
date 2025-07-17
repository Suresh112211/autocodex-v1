function preview() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const js = document.getElementById("jsCode").value;

  const output = `
    <html>
    <head><style>${css}</style></head>
    <body>${html}
    <script>${js}<\/script>
    </body>
    </html>
  `;

  const frame = document.getElementById("outputFrame");
  frame.srcdoc = output;
}

function download() {
  alert("Download feature will be available soon.");
}

function share() {
  alert("Share feature is under development.");
}
