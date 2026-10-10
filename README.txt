Khaksar Currency Converter
=========================
1. Extract this folder in XAMPP htdocs or publish it on static hosting.
2. Open it through localhost or HTTPS. A database is not required.
3. The converter and chart use the public Frankfurter API.
4. The hero shows USD/AFN buy and sell rates from Da Afghanistan Bank and Sarai Shahzada, plus popular Sarai Shahzada rates for EUR, GBP, AED, SAR, PKR and INR.
5. The INR and PKR figures are shown per 1,000 units as marked in the source.
6. Rates are retrieved from linked public pages through the Jina Reader text endpoint, refreshed when the page opens and every 10 minutes. Use the refresh button for an immediate check.
7. Source timestamps are displayed when available. If a source does not respond, its rates are shown as unavailable rather than reusing an old value.
8. The UI uses Noto Sans Arabic with system fallbacks for Pashto and Dari, and Inter for English. Google Fonts needs an internet connection; system fonts are used when unavailable.
9. Chart.js is loaded from jsDelivr CDN. A database is not required.

Sources
-------
Da Afghanistan Bank: https://www.dab.gov.af/exchange-rates
Sarai Shahzada market rates (Sarafi.af): https://sarafi.af/fa/exchange-rates/sarai-shahzada

Files
-----
index.html, assets/style.css, assets/app.js, manifest.json, sw.js
