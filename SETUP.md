# Deployment: GitHub Pages + Squarespace DNS

## 1. Create a GitHub repository

1. Go to github.com and create a new repository.
   - Name it anything (e.g. `ai-resources` or `higherground-site`)
   - Set it to **Public** (required for free GitHub Pages)
   - Do NOT initialize with a README

2. In your terminal, from this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

## 2. Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select `Deploy from a branch`
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**
5. Under **Custom domain**, enter `higherground.institute` and click **Save**
   - GitHub will commit a `CNAME` file (already included in this repo)

## 3. Configure DNS in Squarespace

In your Squarespace Domains panel, go to **DNS Settings** for `higherground.institute`
and add the following records:

### A records (point apex domain → GitHub Pages)
| Type | Host | Value              | TTL  |
|------|------|--------------------|------|
| A    | @    | 185.199.108.153    | 3600 |
| A    | @    | 185.199.109.153    | 3600 |
| A    | @    | 185.199.110.153    | 3600 |
| A    | @    | 185.199.111.153    | 3600 |

### CNAME record (www subdomain)
| Type  | Host | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | www  | YOUR-USERNAME.github.io        | 3600 |

> Replace `YOUR-USERNAME` with your actual GitHub username.

DNS changes can take up to 24 hours to propagate, but usually resolve in under an hour.

## 4. Enable HTTPS

Once DNS is verified in GitHub Pages settings:
- Check **Enforce HTTPS** in Settings → Pages

---

## Adding or editing resources

All resources live in the `resources` array at the top of `script.js`.

Each entry follows this format:
```js
{
  title: "Resource Name",
  category: "training",   // training | tool | article | org
  description: "One to three sentences describing it.",
  tags: ["tag1", "tag2", "tag3"],
  url: "https://example.com",
},
```

Save the file and push to GitHub — the site updates automatically.

## Updating the GitHub repo URL in the footer

In `index.html`, update this line with your actual GitHub repo URL:
```html
<a href="https://github.com/higherground-institute/ai-resources/issues/new" ...>
```
