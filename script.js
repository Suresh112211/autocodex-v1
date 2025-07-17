// 18 bundle names
const bundles = [
  "HTML", "JavaScript", "CSS", "XML", "JWT", "REGEX", "React", "Node.js",
  "API", "Auth", "SQL", "SCSS", "JSON", "TypeScript", "Python",
  "Flutter", "UI/UX", "Security"
];

// To track selected bundles
const selected = new Set();

// Load bundles into container
const container = document.getElementById("bundleContainer");

bundles.forEach((name, i) => {
  const btn = document.createElement("button");
  btn.textContent = ${i + 1}. ${name};
  btn.onclick = () => {
    btn.classList.toggle("active");
    if (selected.has(name)) {
      selected.delete(name);
    } else {
      selected.add(name);
    }
  };
  container.appendChild(btn);
});

// Submit Idea Function
function submitIdea() {
  const idea = document.getElementById("idea").value.trim();
  if (!idea) {
    alert("⚠️ Please enter your idea first.");
    return;
  }
  alert("✅ Idea submitted successfully!\n\n🧠 " + idea);
}

// Preview Function
function previewCode() {
  const idea = document.getElementById("idea").value.trim();
  const preview = document.getElementById("previewArea");

  preview.innerHTML = `<strong>Preview:</strong><br>
    <b>Selected Bundles:</b> ${[...selected].join(", ") || "None"}<br>
    <b>Idea:</b> ${idea || "Not submitted"}`;
}

// Download Function
function downloadZip(type = "full") {
  alert(⬇️ Downloading ${type.toUpperCase()} ZIP... (Demo purpose only));
}

// Share Link Function
function share() {
  const dummyLink = "https://autocodex.app/demo";
  navigator.clipboard.writeText(dummyLink)
    .then(() => alert("🔗 Share link copied to clipboard!\n" + dummyLink))
    .catch(() => alert("❌ Unable to copy share link."));
}

// Reset Form Function
function resetForm() {
  document.getElementById("idea").value = "";
  selected.clear();
  document.querySelectorAll(".code-bundles button").forEach(btn => btn.classList.remove("active"));
  document.getElementById("previewArea").innerHTML = <strong>Preview:</strong><br>Your selection will be shown here.;
}
