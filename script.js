// 🌐 Bundle Preview System
function showBundle(bundleName) {
  const preview = document.getElementById('preview');
  let code = '';

  switch (bundleName) {
    case 'HTML':
      code = '<!DOCTYPE html><html><head><title>Demo</title></head><body><h1>Hello World!</h1></body></html>';
      break;
    case 'CSS':
      code = '<style>body { background-color: #222; color: #fff; }</style>';
      break;
    case 'JS':
      code = '<script>alert("JS Active!")</script>';
      break;
    case 'XML':
      code = '<note><to>You</to><from>AutoCodeX</from></note>';
      break;
    default:
      code = '<p>No preview available for this bundle.</p>';
  }

  preview.srcdoc = code;
}

// 📥 Download Web App
function downloadWebApp() {
  const html = <!DOCTYPE html><html><head><title>AutoCodeX App</title></head><body><h1>Your Web App</h1></body></html>;
  const blob = new Blob([html], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'AutoCodeXApp.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 🤖 AI Chat Response (Mock)
function getAIResponse() {
  const input = document.getElementById('aiInput').value.trim();
  const output = document.getElementById('aiResponse');

  if (!input) {
    output.innerText = 'Please type a question.';
    return;
  }

  // Simulated AI logic
  let response = "🤖 AI says: ";

  if (input.toLowerCase().includes("html")) response += "HTML is for structuring content.";
  else if (input.toLowerCase().includes("css")) response += "CSS is used to style HTML pages.";
  else if (input.toLowerCase().includes("js")) response += "JS adds interactivity to your website.";
  else response += "I'm still learning. Try asking something else!";

  output.innerText = response;
}

// 🧵 Chatroom Auto-Scroll
function appendChatMessage(message) {
  const chat = document.getElementById('chatbox');
  const msg = document.createElement('div');
  msg.textContent = message;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// 📡 Simulate New Messages
setInterval(() => {
  const fakeMsgs = ["Welcome to AutoCodeX chat!", "Need help? Ask below.", "🔥 New feature update available!"];
  const msg = fakeMsgs[Math.floor(Math.random() * fakeMsgs.length)];
  appendChatMessage(msg);
}, 7000);
