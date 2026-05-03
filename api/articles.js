export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  try {
    const response = await fetch(
      "https://bqbstpmltgccrhmtjufk.supabase.co/rest/v1/articles?select=*&order=created_at.desc",
      {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYnN0cG1sdGdjY3JobXRqdWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTcyMTYsImV4cCI6MjA5MzM3MzIxNn0.qpbVtz4ssj1jaFI2cCzssge7jGSOFJb9LG2L6bmW47k",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYnN0cG1sdGdjY3JobXRqdWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTcyMTYsImV4cCI6MjA5MzM3MzIxNn0.qpbVtz4ssj1jaFI2cCzssge7jGSOFJb9LG2L6bmW47k",
        },
      }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
