// ------------------ LOGIN ----------------------
document.querySelector(".login").addEventListener("click", () => {
  const mobile = document.querySelector("input[type='text']").value;
  const pass = document.querySelector("input[type='password']").value;
  if (mobile && pass) {
    alert(🔐 Logged in as: ${mobile});
  } else {
    alert("⚠️ Please enter mobile/email and password.");
  }
});

// ------------------ SUBMIT IDEA ----------------------
document.querySelector(".submit").addEventListener("click", () => {
  const idea = document.querySelector("textarea").value.trim();
  if (idea) {
    alert(🧠 Idea Submitted: ${idea});
    document.querySelector(".submit").innerText = "✅ Submitted";
  } else {
    alert("💡 Please write your app idea first!");
  }
});

// ------------------ PREVIEW OUTPUT ----------------------
document.querySelector(".preview").addEventListener("click", () => {
  const previewBox = document.getElementById("preview-box");
  previewBox.innerHTML = `
    <h3>🧪 AutoCodeX Preview</h3>
    <p>This is where your generated app output will appear.</p>
    <p>Based on your prompt, the platform will auto-fill 18 code bundles with logic and layout.</p>
  `;
});

// ------------------ EXTRAS ----------------------
const extras = document.querySelectorAll(".extras .btn");

extras[0].addEventListener("click", () => {
  alert("⬇️ Download started (Demo)");
});

extras[1].addEventListener("click", () => {
  alert("📤 Share link copied (Demo)");
});

extras[2].addEventListener("click", () => {
  alert("💬 Opening Chat Room... (Demo)");
});

extras[3].addEventListener("click", () => {
  alert("🗨️ Chat Box will appear soon! (Demo)");
});

// ------------------ Bundle Highlighting ----------------------
const bundles = document.querySelectorAll(".bundle");
bundles.forEach((box, index) => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = "#2ecc71";
    box.innerHTML += "<br />✅ Loaded";
  });
});
