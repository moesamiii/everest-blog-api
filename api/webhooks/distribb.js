export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const body = req.body;
    const articles = body?.data?.articles || [];

    for (const article of articles) {
      await fetch(
        "https://bqbstpmltgccrhmtjufk.supabase.co/rest/v1/articles",
        {
          method: "POST",
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYnN0cG1sdGdjY3JobXRqdWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTcyMTYsImV4cCI6MjA5MzM3MzIxNn0.qpbVtz4ssj1jaFI2cCzssge7jGSOFJb9LG2L6bmW47k",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYnN0cG1sdGdjY3JobXRqdWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTcyMTYsImV4cCI6MjA5MzM3MzIxNn0.qpbVtz4ssj1jaFI2cCzssge7jGSOFJb9LG2L6bmW47k",
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            title: article.title || null,
            content: article.content_html || null,
            slug: article.slug || null,
            featured_image: article.featured_image || null,
          }),
        }
      );
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
