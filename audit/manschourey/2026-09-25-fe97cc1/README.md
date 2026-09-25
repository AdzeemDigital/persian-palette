# ممیزی مستقل مَنشورِی! / ManschouRey: نمایه

- **commit ممیزی‌شده:** `fe97cc1ba1400f5c118d7c290bc1000574ac6dd0`
- **تاریخ:** ۲۰۲۶-۰۹-۲۵ (UTC)
- **زبان گزارش:** فارسی، به‌همراه خلاصهٔ انگلیسی

## مسیر پیشنهادی خواندن

1. [`AUDIT_REPORT.fa.md`](AUDIT_REPORT.fa.md): حکم‌ها، یافته‌های اصلی، نقاط قوت، محدودیت‌ها و تصمیم‌های مالک.
2. [`EXECUTIVE_SUMMARY.en.md`](EXECUTIVE_SUMMARY.en.md): خلاصهٔ انگلیسی برای بازبین بیرونی.
3. [`REMEDIATION_BACKLOG.md`](REMEDIATION_BACKLOG.md) و [`RELEASE_GATES.md`](RELEASE_GATES.md)

## نگاشت خروجی‌های الزامی

| # | خروجی الزامی | فایل |
| --- | --- | --- |
| 1 | گزارش اصلی | [`AUDIT_REPORT.fa.md`](AUDIT_REPORT.fa.md) |
| 2 | خلاصهٔ اجرایی انگلیسی | [`EXECUTIVE_SUMMARY.en.md`](EXECUTIVE_SUMMARY.en.md) |
| 3 | محدوده و خط مبنا | [`SCOPE_AND_BASELINE.md`](SCOPE_AND_BASELINE.md) |
| 4 | ماتریس پوشش | [`COVERAGE_MATRIX.csv`](COVERAGE_MATRIX.csv) (۵۸ ردیف، UTF-8) |
| 5 | یافته‌های ساخت‌یافته | [`FINDINGS.json`](FINDINGS.json) (۵۲ یافته). مولد: [`evidence/A00-baseline/build-findings.py`](evidence/A00-baseline/build-findings.py) |
| 6 | دفتر ادعاهای فرهنگی و فهرست منابع | [`CULTURAL_CLAIMS.csv`](CULTURAL_CLAIMS.csv) (۱٬۲۷۱ ردیف) و [`SOURCES.md`](SOURCES.md) |
| 7 | کیفیت داده | [`DATA_QUALITY.md`](DATA_QUALITY.md). جزئیات: [`agents/W1-data-quality-draft.md`](agents/W1-data-quality-draft.md) |
| 8 | اعتبارسنجی فنی | [`TECHNICAL_VALIDATION.md`](TECHNICAL_VALIDATION.md) |
| 9 | دسترس‌پذیری و تجربهٔ کاربری | [`ACCESSIBILITY_AND_UX.md`](ACCESSIBILITY_AND_UX.md) |
| 10 | امنیت و مجوزها | [`SECURITY_AND_LICENSES.md`](SECURITY_AND_LICENSES.md). جزئیات حساس (کم‌اثر): [`agents/W3-SENSITIVE.md`](agents/W3-SENSITIVE.md) |
| 11 | مهاجرت برند | [`BRAND_MIGRATION.md`](BRAND_MIGRATION.md) |
| 12 | نمونه‌های بازنویسی ویرایشی | [`EDITORIAL_REWRITE_SAMPLES.md`](EDITORIAL_REWRITE_SAMPLES.md) |
| 13 | فهرست کارهای اصلاحی | [`REMEDIATION_BACKLOG.md`](REMEDIATION_BACKLOG.md) |
| 14 | معیارهای انتشار | [`RELEASE_GATES.md`](RELEASE_GATES.md) |
| 15 | گزارش‌های متخصصان و بازبین شکاک | [`agents/`](agents/) (جدول زیر) |
| 16 | شواهد | [`evidence/`](evidence/) (جدول زیر) |

## گزارش‌های عامل‌ها (`agents/`)

| فایل | نقش‌ها | نحوهٔ اجرا |
| --- | --- | --- |
| `_BRIEF.md` | — | دستورالعملی که به کارگرها داده شد |
| `A00-lead-sequential-passes.md` | A00، A01، A02، A06، A13 و برند | **بازبینی‌های پشت‌سرهم رهبر در یک زمینه**. این بازبین‌ها مستقل از هم نیستند. |
| `W1-cultural-review.md`، `W1-data-quality-draft.md`، `W1-persian-language.md` | A03، A04، A05 | کارگر جداگانه |
| `W2-browser-a11y-ux.md` | A07، A08، A09 | کارگر جداگانه |
| `W3-security-licenses-interop-release.md`، `W3-SENSITIVE.md` | A10، A11، A12، A14 | کارگر جداگانه |
| `A15-challenge-and-reconciliation.md` | A15 | بازبین شکاک جداگانه. همهٔ یافته‌های Critical و High را دوباره اجرا کرد و ۴۲ ردیف دفتر ادعاها و ۱۲ مورد «پاس» را بررسی کرد. |

## شواهد (`evidence/`)

| پوشه | محتوا |
| --- | --- |
| `A00-baseline/` | لاگ‌های pipeline (با پسوند `.log.txt`) و مولد `FINDINGS.json` |
| `A02-color/` | مقایسه با اوراکل‌های colorjs.io و culori: اسکریپت و خروجی |
| `A13-qa/` | آزمون‌های تشخیصی ایزوله (۳ GUARD و ۸ DEFECT) و پیشنهاد آزمون |
| `W1-cultural/` | مولد دفتر ادعاها، probeهای نرمال‌سازی، CAS و نگارش، و زیرمجموعه‌های مرجع |
| `W2-browser/` | اسکریپت‌های Playwright، نتایج axe و اندازه‌گیری‌ها، ۱۶ اسکرین‌شات و فایل‌های خروجی |
| `W3-security/` | probeهای تزریق، سرور، مجوز و interop، به‌همراه لاگ‌ها |

## بازتولید

```sh
git checkout fe97cc1
npm ci && npm --prefix packages/core ci
npm run check && npm run pack:core && npm run verify:package
CORE_DIST=packages/core/dist/index.js REPO=. node --test audit/manschourey/2026-09-25-fe97cc1/evidence/A13-qa/diagnostic.test.mjs
# اوراکل رنگ: npm install colorjs.io@0.5.2 culori@4 در یک پوشهٔ جدا، سپس:
node audit/manschourey/2026-09-25-fe97cc1/evidence/A02-color/oracle-comparison.mjs packages/core/dist/index.js <oracle-dir>
```

## حریم خصوصی

این پوشه دادهٔ شخصی، اعتبارنامه یا رسید درخواست حمایت ندارد. مسیرهای موقت نشست با `$SCRATCH` جایگزین شده‌اند. پیش از هر commit، این پوشه برای یافتن مسیر موقت نشست جست‌وجو شد. چنین مسیری فقط در یک commit میانی (`0e2bca9`) آمده بود که در تاریخچه مانده است. این یک مسیر sandbox است و سرّی نیست، و در نسخهٔ نهایی هیچ فایلی آن را ندارد.
