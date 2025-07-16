import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.signUp = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) alert("❌ Signup failed: " + error.message);
  else alert("✅ Signup success! Please login.");
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return alert("❌ Login failed: " + error.message);

  // ✅ यह UI activate करता है
  document.getElementById("auth").style.display = "none";
  document.getElementById("ai-prompt").style.display = "block";
  document.getElementById("project-section").style.display = "block";
};

window.save = async function () {
  const session = await supabase.auth.getSession();
  const userId = session.data.session.user.id;
  const title = document.getElementById("title").value;
  const code = document.getElementById("bundle").value;

  const { error } = await supabase.from("projects").insert([
    { user_id: userId, title: title, code_bundle_json: code }
  ]);
  if (error) return alert("❌ Save failed: " + error.message);
  alert("✅ Project saved!");
};

window.load = async function () {
  const session = await supabase.auth.getSession();
  const userId = session.data.session.user.id;
  const { data, error } = await supabase.from("projects").select("*").eq("user_id", userId);
  if (error) return alert("❌ Load failed: " + error.message);
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
};

window.generateCode = function () {
  const prompt = document.getElementById("prompt").value;
  alert("🤖 This will contact ChatGPT API to generate code from prompt:\n" + prompt);
};
