function preview() {
  const html = document.getElementById("html").value;
  const css = <style>${document.getElementById("css").value}</style>;
  const js = <script>${document.getElementById("js").value}<\/script>;
  const output = document.getElementById("output");

  output.srcdoc = html + css + js;
}

function resetFields() {
  document.getElementById("html").value = "";
  document.getElementById("css").value = "";
  document.getElementById("js").value = "";
  document.getElementById("output").srcdoc = "";
}

function download() {
  const zip = new JSZip();
  zip.file("index.html", document.getElementById("html").value);
  zip.file("style.css", document.getElementById("css").value);
  zip.file("script.js", document.getElementById("js").value);

  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, "AutoCodeX-App.zip");
  });
}

function share() {
  const link = window.location.href;
  navigator.clipboard.writeText(link).then(() => {
    alert("🔗 Link copied to clipboard!");
  });
}
