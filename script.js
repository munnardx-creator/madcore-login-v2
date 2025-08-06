// script.js
const supabase = supabase.createClient(
  'https://ldlqjlbthpryyycyqovh.supabase.co'
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkbHFqbGJ0aHByeXl5Y3lxb3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NTg5ODEsImV4cCI6MjA3MDAzNDk4MX0.diFUJXbU8TpL8-7feac8sDNIIhXnodcF6Axt0C2LH_I'
);

async function login() {
  const email = document.getElementById('email').value;
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'https://madcore-login.vercel.app/success.html'
    }
  });

  document.getElementById('msg').innerText = error
    ? '❌ Login failed. Try again.'
    : '✅ OTP sent to your email!';
}
