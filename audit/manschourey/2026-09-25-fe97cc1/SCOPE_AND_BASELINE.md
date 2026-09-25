# محدوده، خط مبنا و روش

## ۱. خط مبنا

| مورد | مقدار |
| --- | --- |
| مخزن | `AdzeemDigital/persian-palette` (نسخهٔ محلی در `/home/user/persian-palette`) |
| commit ممیزی‌شده | `fe97cc1ba1400f5c118d7c290bc1000574ac6dd0` (Merge PR #2 `fix/ci-runtimes`، 2026-09-22) |
| شاخه | `claude/focused-ramanujan-64q1qb`، worktree تمیز. پیش از ممیزی تغییر محلی کاربر وجود نداشت. |
| زمان شروع | 2026-09-25T13:31Z |
| سیستم‌عامل | Linux 6.18 x86_64 (کانتینر ابری ایزوله؛ ویندوز یا macOS نیست) |
| ابزارها | Node v22.22.2، npm 10.9.7، Python 3.11.15، Chromium از `/opt/pw-browsers` (Playwright). اوراکل‌های رنگ: colorjs.io 0.5.2 و culori 4.0.2. Swift، Kotlin، JDK، Figma، صفحه‌خوان، Safari و دستگاه واقعی در دسترس نبودند (جزئیات در `TECHNICAL_VALIDATION.md`). |
| جداسازی | همهٔ ساخت‌ها و آزمون‌ها روی کلون ایزوله در `$SCRATCH/work` اجرا شدند. در مخزن اصلی فقط پوشهٔ `audit/` نوشته شد. |

## ۲. نقشهٔ معماری و منشأ هر دارایی

```
packages/core/src/tokens/heritage-data.ts   (۶۲۳۷ خط؛ دادهٔ خام v2.1: ۱۲ پالت × ۶ رنگ)
        │  normalizePalette() در palettes.ts: HEX نرمال، Oklab/APCA/CIELAB محاسبه، تعارض‌ها، provenance
        ▼
packages/core/src/**/*.ts ──tsc──► dist/*.js + *.d.ts (ESM، بدون bundle)
        │                   └esbuild► dist/index.cjs (CJS، شامل MCU + apca-w3 + colorparsley)
        │                               dist/index.d.cts (دستی، export =)
        ├──scripts/build.js──► packages/core/tokens/{w3c-tokens, style-dictionary (کپی یکسان), figma-variables,
        │                        tokens-studio, data-quality}.json, tailwind-theme.css, Colors.swift, ColorSchemes.kt
        └──npm pack──► release/persian-palette-core-3.0.0.tgz (۹۱ فایل: dist, src, tokens, types, licenses)

app/template.html + app/app.js + app/enhancements.js + app/polish.css
  + esbuild IIFE از packages/core/src (global: PersianCore)
  + Tailwind 3.4.19 (JIT روی محتوای HTML/JS) + فونت‌های Fontsource (base64) + Font Awesome 6.5.1 + three.js r128
        ──scripts/build-app.mjs──► code_artifact.html (fa/rtl)
                                   code_artifact_en.html = release/manshour-studio-en.html (جایگزینی رشته‌ای lang/dir و currentLang)
                                   docs/build-manifest.json (SHA-256)
scripts/package-release.py ──► release/manshour-studio-3.0.0.zip (مستلزم تطابق manifest)
scripts/serve.mjs ──► سرور محلی 127.0.0.1:4173 (فقط GET/HEAD، allowlist مسیر)
.github/workflows/ci.yml ──► Ubuntu 24.04/Windows 2025 × Node 22/24: check, pack:core, verify:package؛ artifact از Ubuntu/24
```

- **منبع حقیقت:** داده در `heritage-data.ts`، منطق در `packages/core/src`، و UI در `app/`. HTML، `dist/`، `tokens/` و `release/` خروجی‌های تولیدی‌اند که **در مخزن commit شده‌اند**.
- **دوگانگی:** ریاضیات رنگ در UI به `PersianCore` واگذار شده است. کپی‌های قدیمی بدون استفاده هنوز در `app/app.js` مانده‌اند (A01، مورد ۷). نسخهٔ انگلیسی کپی کامل نسخهٔ فارسی است که با جایگزینی رشته ساخته می‌شود.
- **یکپارچگی‌های بیرونی:** تصاویر Wikimedia (`imageUrl` در داده، hotlink)، لینک Google Maps (`app/app.js:354`)، دوربین، clipboard، WebGL و Web Audio. جزئیات در W2 و W3.
- **آرشیو:** `archive/v2.1.0/` نسخهٔ قبلی است و ادعاهای آن ادعای جاری محصول به حساب نیامد. `release/manshour-studio-3.0.0.zip` دارایی منتشرشده است و **ادعای توزیع‌شده** حساب شد.

## ۳. محدوده

**داخل محدوده:** همهٔ فایل‌های ردیابی‌شده؛ دارایی‌های `release/`؛ اجرای pipeline؛ مقایسه با اوراکل‌های مستقل؛ مرورگر Chromium (headless، دسکتاپ و شبیه‌سازی موبایل)؛ axe-core؛ ممیزی وابستگی‌ها؛ مجوزها؛ خروجی‌ها در Style Dictionary و Tailwind v3/v4 (در حد ابزارهای موجود)؛ نمونهٔ هدفمند منابع تاریخی (W1)؛ فرادادهٔ GitHub release و CI از طریق API.

**خارج از محدوده یا اجرانشده (دلیل هر مورد در `COVERAGE_MATRIX.csv`):**
- صفحه‌خوان واقعی (NVDA، JAWS، VoiceOver، TalkBack)، Safari/WebKit، Firefox، دستگاه موبایل واقعی و آزمون با کاربر.
- کامپایل Swift/Kotlin، import در Figma یا Tokens Studio.
- اندازه‌گیری فیزیکی طیف و رنگدانه، و پژوهش در آرشیو یا موزه.
- نظر حقوقی دربارهٔ مجوزها. فقط پرسش‌های مشخص برای مشاور ثبت شد.
- دادهٔ میدانی Core Web Vitals.
- فایل‌های شخصی، رسید درخواست حمایت، و اعتبارنامه‌ها. `review-2026-09-21.md` چون در مخزن ردیابی می‌شود بررسی شد، ولی مسیرها و شناسه‌های نشست داخل آن در این گزارش تکرار نشده‌اند.

## ۴. روش

1. **خط مبنا:** اجرای دستورهای مستند روی کلون ایزوله. مقایسهٔ خروجی بازسازی با فایل‌های commit‌شده و مقایسهٔ tarball و ZIP منتشرشده با HEAD.
2. **شواهد سه‌گانه:** برای هر ادعا، سه نوع شاهد جدا ثبت شد: (الف) کد و متن منبع، (ب) رفتار مشاهده‌شده (اجرای برنامه یا مرورگر)، (ج) مرجع مستقل (اوراکل یا منبع بیرونی خوانده‌شده).
3. **اجرای تیم:** رهبر ممیزی (A00) بازبینی‌های A01، A02، A06 و A13 و فهرست برند را **پشت‌سرهم در یک زمینه** انجام داد. سه کارگر جداگانه به‌موازات اجرا شدند: W1 (A03، A04، A05)، W2 (A07، A08، A09) و W3 (A10، A11، A12، A14). سپس بازبین شکاک (A15) یافته‌های Critical و High و نمونه‌ای از موارد پاس‌شده را دوباره بررسی کرد. این نقش‌ها تحلیلی‌اند و **هیچ‌کدام صلاحیت حرفه‌ای انسانی (حقوقی، موزه‌ای، دسترس‌پذیری) را ادعا نمی‌کند.**
4. **شدت و اطمینان** طبق بخش ۶ دستور ممیزی ثبت شده‌اند و مستقل از هم‌اند. «تأییدنشده» به معنی «نادرست» نیست.
5. **هیچ تغییری در رفتار محصول** داده نشد. آزمون‌های تشخیصی در `evidence/A13-qa/` ایزوله‌اند.

## ۵. محدودیت‌های محیط

- کانتینر لینوکس است. CI پروژه روی ویندوز هم اجرا می‌شود و tarball منتشرشده روی ویندوز ساخته شده است. اختلاف CRLF و اختلاف ممیز شناور در آخرین رقم‌ها در همین محیط مشاهده شد. رفتار ویندوز مستقیماً آزموده نشد.
- Chromium به‌صورت headless اجرا شد. WebGL و عملکرد در headless با مرورگر واقعی کاربر فرق دارد.
- دسترسی وب از طریق proxy محیط بود. نتیجهٔ دسترسی به منابع بیرونی در گزارش W1 ثبت شده است.
