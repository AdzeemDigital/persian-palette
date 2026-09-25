# اعتبارسنجی فنی

خط مبنا: `fe97cc1`. تاریخ: ۲۰۲۶-۰۹-۲۵. محیط: Linux x86_64، Node v22.22.2، npm 10.9.7، Python 3.11.15. همهٔ اجراها روی یک کلون ایزوله انجام شد. منابع: A00 و A01 و A02 و A13 (`agents/A00-lead-sequential-passes.md`)، W3 (`agents/W3-security-licenses-interop-release.md`) و W2 (`agents/W2-browser-a11y-ux.md`).

وضعیت‌ها: `pass`، `fail`، `not-tested`، `blocked` و `not-applicable`.

## ۱. دستورهای pipeline

| # | دستور یا روش | انتظار | مشاهده | کد خروج | وضعیت | شاهد |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | `npm ci` (ریشه) و `npm --prefix packages/core ci` | نصب تمیز | ۱۴۹ و ۵ بسته نصب شد | 0 | pass | — |
| T2 | `npm run check` | ساخت هر دو نسخه و پاس‌شدن آزمون‌ها | ۱۸ از ۱۸ آزمون هسته و ۸ از ۸ آزمون یکپارچگی پاس شد | 0 | pass | `evidence/A00-baseline/check.log.txt` |
| T3 | `git status` پس از T2 | بدون تغییر در فایل‌های تولیدی | ۳ فایل commit‌شده تغییر کرد: manifest، `w3c-tokens.json` و `style-dictionary.json` (در هر فایل ۶۹ مقدار که فقط در رقم آخر ممیز شناور فرق دارند؛ مجموعاً ۱۳۸ خط) | — | **fail** | MSR-REL-002 |
| T4 | بایت‌های HTML بازسازی‌شده در برابر نسخهٔ commit‌شده | یکسان | یکسان | — | pass | A00 |
| T5 | `dist/` بازسازی‌شده در برابر نسخهٔ commit‌شده | یکسان | یکسان | — | pass | W3 §7 |
| T6 | `npm run pack:core` | ساخت tarball | ۹۱ فایل، ۲۳۴٫۶ کیلوبایت | 0 | pass | `evidence/A00-baseline/pack-core.log.txt` |
| T7 | tarball commit‌شده در برابر خروجی تازهٔ pack | یکسان | فقط در CRLF و در رقم آخر ممیز شناور فرق دارند. `dist/index.cjs` یکسان است | — | pass (با توضیح) | A00 |
| T8 | `npm run verify:package` | نصب ایزوله در مصرف‌کنندهٔ جدا؛ ESM، CJS، `.mts` و `.cts`؛ ۴ مثال مستندات | همه پاس شد | 0 | pass | `evidence/A00-baseline/verify-package.log.txt` |
| T9 | `pack:studio` روی checkout تمیز | ساخت ZIP | «Artifact hash differs from build manifest» | 1 | **fail** | MSR-REL-002 |
| T10 | `pack:studio` پس از build | ساخت ZIP | ۱۵۲ فایل. hash در هر اجرا فرق می‌کند (mtime) | 0 | pass (بازتولیدپذیر نیست) | `pack-studio.log.txt` |
| T11 | ZIP منتشرشده در برابر HEAD | محتوای برابر | ۱۳۹ ورودی، ۸ ورودی متفاوت. README قدیمی شامل «Enterprise-Grade» و «72 authenticated pigment formulas» است | — | **fail** | MSR-REL-001 |
| T12 | CI روی HEAD (GitHub Actions run #9) | سبز | ۴ از ۴ job سبز (Node 22 و 24 روی Ubuntu و Windows) | — | pass | W3 §7 |
| T13 | commit برچسب `v3.0.0` | commit آزموده‌شده در CI | `2e06892`، که پیش از فعال‌شدن CI است | — | **fail** | MSR-REL-001 |
| T14 | `npm audit` (کامل و `--omit=dev`، ریشه و core) | بدون آسیب‌پذیری | ۰ مورد در هر ۴ اجرا | 0 | pass | `evidence/W3-security/npm-audit.log` |

## ۲. صحت محاسبات در برابر اوراکل مستقل (A02)

اوراکل‌ها colorjs.io 0.5.2 و culori 4.0.2 بودند که هیچ کدی با کتابخانه‌های پروژه مشترک ندارند. نمونه: ۵٬۰۸۲ رنگ، شامل رنگ‌های پالت، رنگ‌های مرزی و ۵٬۰۰۰ رنگ تصادفی با seed ثابت. اسکریپت: `evidence/A02-color/oracle-comparison.mjs`.

| بررسی | نتیجه | وضعیت |
| --- | --- | --- |
| Oklab رو به جلو | بیشترین اختلاف 3.7e-8 | pass |
| رفت‌وبرگشت sRGB↔Oklab | ۲۰۰٬۰۰۰ رنگ بدون خطا | pass |
| HCT | اختلاف hue حداکثر 0.055°، chroma حداکثر 0.011، tone حداکثر 0.0042 | pass |
| APCA (0.0.98G-4g) | ۳٬۰۰۰ جفت با اختلاف 0؛ قطبیت درست | pass |
| نسبت WCAG 2.x | اختلاف حداکثر 0.00083 | pass |
| CIELAB D65 | اختلاف حداکثر 0.0074 | pass |
| چرخش hue در HCT | 330°، ‎−30° و 690° نتیجهٔ یکسان دادند | pass |
| گاموت در ترکیب Oklab | ۱۰۳ مورد از ۷٬۶۶۵ بیرون از sRGB افتادند؛ بریدن کانال‌ها تا ΔEOK 0.0138 خطا می‌افزاید | Low (MSR-SCI-003) |
| طول موج غالب در داده | ۳ رکورد مقداری دارند که از نظر فیزیکی ممکن نیست | **fail** (MSR-SCI-001) |

## ۳. API و معماری

| بررسی | نتیجه | وضعیت |
| --- | --- | --- |
| خطای جست‌وجو برای ورودی تهی، ناشناخته یا مبهم | خطا پرتاب می‌کند | pass |
| جست‌وجو با «ى» (U+0649) و نویسه‌های «ۀ»، «أ» و «ة» و ارقام | ۱۲ مورد از ۲۴ حالت آزمایشی شکست خوردند | **fail** (MSR-I18N-003) |
| منجمدبودن دادهٔ canonical | `TypeError` هنگام تغییر | pass |
| کلید توکن در برابر اصلاح نام انگلیسی | کلید تغییر می‌کند | **fail** (MSR-API-001) |
| `evaluateAPCA().minFontSizePx` | کد 999 را به‌عنوان px برمی‌گرداند | fail (MSR-API-002) |
| `hctToHex` با chroma دست‌نیافتنی | chroma را بی‌صدا کم می‌کند | fail (MSR-API-003) |
| `hexToRgb` در UI با ورودی نامعتبر | بی‌صدا `#120A8F` برمی‌گرداند | fail (MSR-API-004) |
| وارد کردن نوع‌ها در مصرف‌کنندهٔ TypeScript با CJS | خطای TS2305 | fail (MSR-REL-003) |
| زمان import (ESM و CJS) | حدود ۶۵ و ۲۲ میلی‌ثانیه | اطلاعاتی |

## ۴. خروجی‌ها و سکوهای مقصد (A10 / W3)

| مقصد | نسخه | روش | نتیجه | وضعیت |
| --- | --- | --- | --- | --- |
| DTCG 2025.10: قالب رنگ و نام‌گذاری | منبع spec از GitHub (سایت designtokens.org مسدود بود) | مقایسهٔ دستی و بررسی کلیدها | منطبق. ۹۱٪ حجم فایل را `$extensions` تشکیل می‌دهد | pass |
| Style Dictionary | 5.5.5 | ساخت css، js، ios-swift، compose و json از فایل **منتشرشده** | بدون هشدار و بدون برخورد نام | pass |
| Tailwind v3 | 3.4.19 | config با `exportTailwindTheme()` | کلاس‌ها تولید شدند | pass |
| Tailwind v4 | 4.3.3 | `@import` فایل `tailwind-theme.css` | کلاس‌ها تولید شدند | pass |
| مفهوم گام‌های Tailwind | — | روشنایی L در Oklab | در ۱۲ از ۱۲ پالت یکنواخت نیست | fail (MSR-INT-002) |
| Kotlin / Compose (فایل منتشرشده) | kotlinc 2.1.21، Compose desktop 1.7.3 | کامپایل با K2JVMCompiler | rc=0 | pass (فقط desktop) |
| Android / AGP | — | — | اجرا نشد | not-tested |
| پوشش نقش‌های M3 | material3 1.7.3 | `javap` | ۲۴ نقش از ۳۶ | Low (MSR-INT-003) |
| Swift / SwiftUI | — | swiftc موجود نبود؛ download.swift.org مسدود بود | بررسی ایستای شناسه‌ها پاس شد. دستورهای کامپایل در W3 §6 | **not-tested** |
| Figma importer | @figma/plugin-typings 1.139.0 | `tsc --checkJs` | نوع‌ها درست‌اند؛ پلاگین قابل اجرا نیست؛ idempotent نیست | not-tested در Figma (MSR-INT-004) |
| Tokens Studio | — | بررسی ساختار | شکل فایل درست است | not-tested در برنامه |
| ورودی‌های مخرب به exporterها | dist در fe97cc1 | اسکریپت‌های probe | CSS با کامنت شکسته، شناسهٔ Kotlin نامعتبر، نام رزروشدهٔ DTCG | fail (MSR-INT-001) |

## ۵. مرورگر (W2)

محیط: Chromium 141.0.7390.37، headless، WebGL نرم‌افزاری (SwiftShader)، axe-core 4.13.0. همهٔ درخواست‌های بیرونی ثبت و سپس قطع شدند. خلاصه در `ACCESSIBILITY_AND_UX.md` و جزئیات در `agents/W2-browser-a11y-ux.md` §2.

| بررسی | وضعیت |
| --- | --- |
| بارگذاری سرد هر دو نسخه در هر دو تم و در موبایل | pass (بدون page error) |
| درخواست بیرونی در حالت پیش‌فرض | pass (صفر) |
| حالت آفلاین | pass. حالت عکس بی‌صدا شکست می‌خورد |
| همهٔ دیالوگ‌ها، خروجی‌ها، clipboard و دوربین (دستگاه جعلی و حالت رد مجوز) | pass (کارکردی) |
| WebGL بدون GPU یا در حالت context-lost | partial (MSR-GFX-002) |
| رندر مداوم WebGL وقتی پنهان است | fail (MSR-GFX-001) |
| Firefox، Safari و دستگاه واقعی | not-tested |

## ۶. آزمون‌های تشخیصی ایزوله (A13)

فایل `evidence/A13-qa/diagnostic.test.mjs` ۳ آزمون GUARD دارد که پاس شدند و ۸ آزمون DEFECT که همه همان‌طور که انتظار می‌رفت شکست خوردند. خروجی در `diagnostic.baseline.out.txt` است. این آزمون‌ها به مجموعه‌آزمون محصول اضافه نشده‌اند. پیشنهادها در `evidence/A13-qa/proposed-tests.md` آمده است.

## ۷. مرزهای بازتولیدپذیری

- **CRLF:** مخزن `.gitattributes` ندارد. دارایی‌های v3.0.0 روی checkout ویندوز با CRLF ساخته شده‌اند، و manifest commit‌شده hash نسخهٔ CRLF را دارد.
- **ممیز شناور:** بعضی اعداد در توکن‌ها روی لینوکس با Node 22 در رقم آخر با فایل‌های commit‌شده فرق دارند. علت احتمالی تفاوت `Math.pow`/`cbrt` بین سکوها است، ولی این علت آزموده نشده است.
- **ZIP:** mtime فایل‌ها داخل ZIP ذخیره می‌شود، بنابراین hash پایدار نیست. `npm pack` mtime را نرمال می‌کند.
- **CI:** CI tarball را پیش از بررسی دوباره می‌سازد، پس tarball commit‌شده را هرگز نمی‌آزماید.
- **این ممیزی:** Windows و macOS را مستقیماً نیازمود.
