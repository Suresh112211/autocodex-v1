function createProject() {
  const name = document.getElementById('projectName').value;
  alert(`Project "${name}" created!`);
}

function preview() {
  const html = document.querySelectorAll('textarea')[0].value;
  const css = document.querySelectorAll('textarea')[1].value;
  const js = document.querySelectorAll('textarea')[2].value;

  const output = \`
    <html>
    <head><style>\${css}</style></head>
    <body>\${html}<script>\${js}<\/script></body>
    </html>
  \`;
  const iframe = document.getElementById('livePreview');
  iframe.srcdoc = output;
}
