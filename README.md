# Will You Be My Girlfriend? 💗

A lightweight, Vercel-ready single-page proposal website inspired by the supplied reference Reel.

## Run locally

No build step is required.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Personalise the recipient

Use the URL query parameter:

`/?name=Sawari`

For example:

`https://your-domain.vercel.app/?name=Sawari`

If no `name` parameter is supplied, the page defaults to `Nirali`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset: **Other** (or leave it auto-detected).
5. Build command: leave blank.
6. Output directory: leave blank.
7. Deploy.

The project is intentionally static, so it requires no server, database, API key, or environment variable.
