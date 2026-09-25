# W1 source notes (fetched material)

Access date for everything below is 2026-09-25. Excerpts are short (two sentences or fewer) and copied from the fetched file. I list only files I actually downloaded or opened. Search-result snippets appear in the last section as leads, not as verification.

## Network conditions (blocker)

- Direct HTTPS through the session egress proxy returned `CONNECT tunnel failed, response 403` or no response (HTTP code 000) for: `pubchem.ncbi.nlm.nih.gov`, `commonchemistry.cas.org`, `whc.unesco.org`, `ich.unesco.org`, `data.unesco.org`, `en.wikipedia.org`, `en.m.wikipedia.org`, `www.w3.org`, `www.mindat.org`, `rruff.info`, `rruff-2.geo.arizona.edu`, `webmineral.com`, `www.handbookofmineralogy.org`, `cameo.mfa.org`, `www.iranicaonline.org`, `www.metmuseum.org`, `www.britannica.com`, `www.jstor.org`, `doi.org`, `archive.org`, `query.wikidata.org`, `nominatim.openstreetmap.org`, `gist.githubusercontent.com`, `cdn.jsdelivr.net`, `unpkg.com`, `huggingface.co`, `www.chemicalbook.com`, `www.spectrumchemical.com`, `www.sigmaaldrich.com`, `webbook.nist.gov`.
- The WebFetch tool reported `EGRESS_BLOCKED` for `pubchem.ncbi.nlm.nih.gov`, `commonchemistry.cas.org`, `whc.unesco.org`, `www.w3.org`, `en.wikipedia.org`, `en.m.wikipedia.org` and `www.iranicaonline.org`.
- Reachable: `raw.githubusercontent.com`, `github.com` (through WebFetch only), `pypi.org` and `files.pythonhosted.org` (pip), `registry.npmjs.org`. `api.github.com` refused repository metadata ("GitHub access to this repository is not enabled for this session"), so I could not get commit SHAs for the upstream files. I recorded SHA-256 hashes of the downloaded files instead.
- As a result, **no primary institutional page (UNESCO, PubChem, CAS, W3C TR, Wikipedia, mindat) was opened.** The substitutes are the standards body's own spec source, third-party mirrors or derivatives, and an open chemistry library. The limits of each are noted below and in `SOURCES.md`.

## S001: W3C CSS Color Module Level 4, Editor's Draft source

- File: `https://raw.githubusercontent.com/w3c/csswg-drafts/main/css-color-4/Overview.bs` (branch `main`, fetched 2026-09-25), sha256 `00201c213bf7265ca2321b69c05b8217151418b56614e9167a93424f2cf531ed`, 452,695 bytes.
- Locator: section `<h3 id="named-colors">` (file lines 1584–1930), a 148-row named-colour table parsed into `ref/named-color-matches.json`.
- Excerpt (l. 1596–1599): "16 of CSS's named colors come from the VGA palette originally, and were then adopted into HTML … Most of the rest come from one version of the X11 color system".
- Rows used: `turquoise #40e0d0` (l. 1923), `goldenrod #daa520` (l. 1745), `forestgreen #228b22` (l. 1735), `chocolate #d2691e` (l. 1671), `black #000000`.
- Supports: exact matches for khorasan-gems-c1, toranj-illumination-c3, gardens-of-shiraz-c3, bazaar-spices-c2 and toranj-illumination-c6. None of the "Persian …" names is a CSS named colour.
- Limit: this is the Editor's Draft source, not the dated TR snapshot. The named-colour table has been stable for years, but I did not compare it with the TR copy.

## S002: codebrainz/color-names `output/colors.csv` (derivative of Wikipedia "List of colors")

- File: `https://raw.githubusercontent.com/codebrainz/color-names/master/output/colors.csv`, sha256 `0f965aa0a9a3c43445c3e49d2ab972360ce226d9dc6d5754c82870f34ad7fdb6`, 865 rows.
- Excerpt from the repository README: "These files are generated using a script which parses the list of colors on Wikipedia, here: http://en.wikipedia.org/wiki/List_of_colors".
- Rows used: `persian_blue,"Persian Blue",#1c39bb`, `persian_green,"Persian Green",#00a693`, `persian_red,"Persian Red",#c33`, `persian_plum,"Persian Plum",#701c1c`, `persian_rose,"Persian Rose",#fe28a2`, `persian_orange,"Persian Orange",#d99058`, `medium_persian_blue,"Medium Persian Blue",#0067a5`, plus Ultramarine #120a8f, Turquoise #30d5c8, Old Gold #cfb53b, Cinnabar #e34234, Malachite #0bda51, Saffron #f4c430, Pistachio #93c572, Emerald #50c878, Amber #ffbf00, Ruby Red #9b111e, Gold (Metallic) #d4af37, Rufous #a81c07 and Cinnamon #d2691e.
- Supports: 23 of 72 HEX values equal an entry in a modern, Wikipedia-derived colour-name list. That is evidence of modern digital naming, not of historical use.
- Limit: a tertiary snapshot of Wikipedia of unknown date. I could not open the individual Wikipedia colour articles (for example "Persian blue") or their cited sources (for example Maerz & Paul).

## S003: rich-iannone/UWHS R dataset (mirror of the UNESCO World Heritage List, 2014)

- Files: `https://raw.githubusercontent.com/rich-iannone/UWHS/master/README.md` and `…/master/data/uwhs.rda`, sha256 `71cf06d89001efa5c4a860d291ed75cee5dd131055bcc27f6d857b81f9a38a16`. Parsed with `rdata 1.1.0`. The extract is in `ref/uwhs-subset.json`.
- Excerpt (README): "This is an R Dataset that contains information on the UNESCO World Heritage Sites (current as of the 2014 audit). There are 1006 sites included".
- Rows used: `114 Persepolis 1979 29.93444,52.89028`; `115 Meidan Emam, Esfahan 1979 32.65745,51.677778`; `1106 Pasargadae 2004 30.19383,53.16729`; `1346 Tabriz Historic Bazaar Complex 2010 38.081389,46.293056`; `1372 The Persian Garden 2011 30.166667,53.166667`; `1397 Masjed-e Jame of Isfahan 2012 32.669722,51.685278`; `603 Samarkand - Crossroad of Cultures 2001 39.66861,67.0`. Afghan entries are only 208 Bamiyan and 211 Jam, so there is no Herat property. The latest inscription year in the file is 2014.
- Supports: the WHC ID-to-name mapping for 114, 115, 1106, 1346, 1372 and 1397, and the reference points used for the km distances.
- Limit: this is a third-party mirror, not whc.unesco.org. It cannot confirm inscriptions after 2014 (Yazd, Hyrcanian Forests), and each reference point is a single centroid, not a boundary.

## S004: RRUFF IMA mineral-list export (third-party copy)

- Located with WebFetch on `https://github.com/tetherless-world/dtdi-mineral-observation-map/tree/master/ingest/resources`. The directory listing showed `RRUFF_Export.csv`. File: `https://raw.githubusercontent.com/tetherless-world/dtdi-mineral-observation-map/master/ingest/resources/RRUFF_Export.csv`, sha256 `95ffb993eb036d10b3052e5bd6752dc1e3fbbc8c5d24bb8566925ca9539f7441`, 5,091 lines.
- Header excerpt: `"Mineral Name","Mineral Name (plain)","RRUFF Chemistry (concise)","IMA Chemistry (concise)",…`.
- Rows used (IMA formula): Lazurite `Na_3_Ca(Si_3_Al_3_)O_12_S`; Turquoise `CuAl_6_(PO_4_)_4_(OH)_8_·4H_2_O`; Malachite `Cu_2_CO_3_(OH)_2_`; Cinnabar `HgS`; Hematite `Fe_2_O_3_`; Gypsum `CaSO_4_·2H_2_O`; Gold `Au`; Calcite `CaCO_3_`. The extract is in `ref/rruff-subset.json`.
- Limit: export date not stated. It is a copy, not rruff.info itself, and it has no crystal-system column.

## S005: `chemicals` 1.5.2 (Caleb Bell, Chemical Engineering Design Library) identifier database

- Installed from PyPI into `$SCRATCH/W1/venv`. Queried with `evidence/W1-cultural/cas_probe.py`; output in `ref/cas-lookup.tsv`.
- Output excerpt: `7732-18-5 checksum_ok=True name=water formula=H2O MW=18.015 pubchemCID=962 iupac=oxidane`.
- Other rows used: 142-71-2 cupric acetate C4H6CuO4 (CID 8895); 1307-96-6 cobalt(II) oxide CoO (CID 14786); 1308-06-1 Co3O4; 1344-48-5 HgS; 12069-69-1 basic copper carbonate; 482-89-3 indigo C16H10N2O2; 1260-17-9 carminic acid C22H20O13; 7440-57-5 gold; 10101-41-4 calcium sulfate dihydrate. `1260-15-5` fails the library's CAS check-digit test. 1302-85-8, 1319-32-0, 9000-01-5 and 9004-34-6 are valid check-digit strings that are not in the library.
- Limit: a secondary database derived from PubChem, not CAS itself. When a number is absent from it, that is not evidence against the number.

## S006: auditor computations

- `analyze-data.mjs` computes haversine distances with R = 6371.0088 km. `molar-mass-check.py` recomputes molar masses using the `chemicals` atomic weights. The CAS check digit is computed by the standard weighted-sum rule (for 1260-15-x the check digit is 7).

## S007: the repository's own records (internal consistency)

- `packages/core/src/tokens/heritage-data.ts`, `packages/core/src/tokens/palettes.ts`, `packages/core/tokens/data-quality.json`, and `README.fa.md:21` ("HEX انتخاب طراحی است؛ طیف و بافت مدل نمایشی‌اند"). I use these only to establish self-contradiction or placeholders, never as external confirmation.

## Leads from web search (not verification, not cited as support)

- A search for "CAS 7732-18-5" returned vendor listings (Sigma-Aldrich, Fisher, LGC) titled "Water". This agrees with S005, but I did not open those pages.
- A search for UNESCO datasets pointed to the UWHS repository, which led to S003.
- A search for IMA mineral data pointed to the tetherless-world repository, which led to S004. Its snippets for lazurite and turquoise formulas came from mindat and Wikipedia, which I did not open.
