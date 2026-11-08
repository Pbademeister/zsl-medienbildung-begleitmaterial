# Faktentreue trifft Kreativität – Workshop-Begleitseite

Statische Begleitseite (Handout) zum Workshop auf der Jahrestagung Digitale Medienbildung 2026 in Löwenstein, 16.11.2026.
Kein Build-Schritt, keine Abhängigkeiten, keine externen Ressourcen.

## Struktur (flach, alle Dateien im selben Ordner)

```
index.html          Übersicht: Worum es geht, Ablauf (Orientierung), Themen, Werkzeuge
dokumente.html      Mit eigenen Dokumenten arbeiten (Grundlagen, Gemini Notebook, Aufgaben)
medien.html         Medien erstellen und verwenden
gemini.html         Ausblick: Gemini (Canvas, Bilder, kleine Webseiten)
anbieter.html       Anbieter im Vergleich (Stand 08.11.2026, mit Quellen)
recht.html          Datenschutz und rechtlicher Rahmen (inkl. Baden-Württemberg)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung der Website
style.css           Design (Farben aus dem Workshop)
site.js             Menü, "Alle aufklappen", Drucken (kein Tracking)
carlito-*.woff2     Schrift Carlito, lokal (Lizenztext: OFL-Carlito.txt)
```

Alle Dateien liegen bewusst im selben Ordner, damit der Upload über die GitHub-Weboberfläche ("Add files via upload") ohne Unterordner funktioniert.

## Veröffentlichen mit GitHub Pages

1. Neues **öffentliches** Repository anlegen (z. B. `zsl-medienbildung-begleitmaterial`). GitHub Pages aus privaten Repositories ist nur in bezahlten Tarifen verfügbar.
2. Den **Inhalt dieses Ordners** in das Repository legen (alle Dateien im Wurzelverzeichnis). Per Weboberfläche: *Add file → Upload files*, alle Dateien markieren und hochladen. Oder per Git:
   ```
   git init
   git add .
   git commit -m "Begleitseite"
   git branch -M main
   git remote add origin https://github.com/<NAME>/<REPO>.git
   git push -u origin main
   ```
3. Im Repository: *Settings → Pages → Deploy from a branch → `main` / `/ (root)`*.
4. Nach der Veröffentlichung **"Enforce HTTPS"** aktivieren.
5. Link: `https://<NAME>.github.io/<REPO>/`

Alle Links innerhalb der Seite sind relativ, der Repository-Name spielt keine Rolle.

## Rechtliches und Sicherheit: was umgesetzt ist

- **Keine externen Anfragen:** Schrift lokal, kein CDN, keine Skripte oder Frames Dritter. Eine Content-Security-Policy im `<meta>`-Tag erlaubt nur eigene Ressourcen (GitHub Pages erlaubt keine eigenen HTTP-Header).
- **Kein Tracking, keine Cookies**, kein Browser-Speicher.
- **Externe Links** öffnen mit `rel="noopener noreferrer"` und ohne Weitergabe der Herkunftsseite.
- **Impressum** (§ 5 DDG) und **Datenschutzerklärung** (Hosting bei GitHub, Rechte, Aufsichtsbehörde) sind von jeder Seite aus verlinkt.
- **noindex, nofollow:** Die Seite erscheint nicht in Suchmaschinen, ist aber für alle mit Link erreichbar. Das ist kein Zugriffsschutz.
- Keine personenbezogenen Daten Dritter im Repository (Namen von Teilnehmenden, Anmeldelisten, Fotos).

## Vor der Veröffentlichung prüfen

- Datenschutzerklärung und Impressum gegenlesen (Vorlage nach bestem Wissen, keine Rechtsberatung). Besonders: Angaben zu GitHub (Standardvertragsklauseln, Data Privacy Framework) gegen die aktuelle GitHub-Datenschutzerklärung abgleichen.
- Der Beispiel-Link zur Metallbindungs-Simulation (`gemini.html`) muss öffentlich erreichbar sein, sonst entfernen.
- Link zu Gemini Notebook: `notebooklm.google.com`. Falls Google die Adresse ändert, in `index.html` und `dokumente.html` anpassen.
- Auf `anbieter.html` stehen Funktionen, Limits und Datenschutzangaben mit Stand 08.11.2026. Kurz vor dem Workshop stichprobenartig prüfen.
- Falls im Workshop weitere Themen dazukommen: Seite kopieren, in `index.html` unter "Themen" und im Menü (`<nav class="nav">` auf allen Seiten) ergänzen.
- Nach dem Workshop: Seite weiter öffentlich lassen oder Pages deaktivieren (*Settings → Pages → Unpublish*).
