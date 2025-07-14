function preview() {
  const areas = document.querySelectorAll("textarea");
  let html = "", css = "", js = "";

  areas.forEach((area, i) => {
    const code = area.value;
    if (i % 3 === 0) html += code + "\n";       // HTML
    else if (i % 3 === 1) css += code + "\n";   // CSS
    else js += code + "\n";                     // JS
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
