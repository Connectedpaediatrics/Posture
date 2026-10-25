CONNECTED PAEDIATRICS POSTURE & ALIGNMENT — INSTALLABLE WEB APP

Upload ALL seven files in this folder to the ROOT of your GitHub repository (not the ZIP).

index.html
manifest.webmanifest
service-worker.js
icon-192.png
icon-512.png
apple-touch-icon.png
README.txt (optional)

On GitHub: Settings > Pages > Deploy from a branch > main > /(root) > Save.
Open the GitHub Pages site (not github.com/.../blob/.../index.html).

iPhone/iPad: Safari > Share > Add to Home Screen.
Android: Chrome > menu > Install app or Add to Home screen.

The installed app works offline after the first successful load for manual landmark placement and reports. Automatic landmark detection loads an external pose detection library and may require internet access. All assessment data is handled locally by the HTML app; no patient database is included.

For updates replace index.html and increase CACHE_NAME in service-worker.js if needed.

ICON UPDATE: The icons now use the original Cranial Shape Analyser/Plagiocephaly artwork. If your phone keeps an older home-screen icon, remove the old shortcut and Add to Home Screen again after publishing.

Membership button links to https://learn.connectedpaediatrics.com/ and appears below the app controls.
