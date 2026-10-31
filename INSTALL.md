# STILL HERE — Fieldwork update (manual installation)

Target: https://github.com/Simple-Minds-Studios/still-here

This package is a **non-destructive add-on** for the existing public edition 3.0.

1. Open the repository and choose **Add file → Upload files**. Upload `fieldwork-2026.js`, `RESEARCH_FIELDWORK_2026.md`, and the entire `assets/` folder, preserving the folder paths. (If the GitHub web interface flattens folders, create `assets` and upload the images there.)
2. Open `index.html` in GitHub and edit it. Just before `</body>`, insert:
   `<script defer src="fieldwork-2026.js"></script>`
3. Commit. GitHub Pages should deploy automatically if configured.
4. Verify the new chapter **Names in stone. A cabin moved. Memory still here.** appears before the case files, images load, and the name **Luis Guzman Vargas** appears instead of the incorrect **Joseph Vargas**.
5. Optionally add `RESEARCH_FIELDWORK_2026.md` to README's Structure list.

The script makes the grandfather name correction in the displayed page at runtime. For long-term archival integrity, also replace `Joseph Vargas` with `Luis Guzman Vargas` in `index.html` and `README.md` manually, and revise any misleading language about whether Anna is the same person in the Crystal Township account: family testimony identifies her, but independent documentary confirmation is pending.

This package does not alter the main SMS website or domain configuration.
