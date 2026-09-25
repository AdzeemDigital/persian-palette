# نمونه‌های بازنویسی ویرایشی (پیشنهادی)

نقش: A06 و A05 (بازبینی ترتیبی رهبر ممیزی). خط مبنا: `fe97cc1`. هیچ‌کدام از این متن‌ها در محصول اعمال نشده‌اند.

قاعدهٔ این نمونه‌ها: معنای اصلی حفظ می‌شود و فقط ادعاهای بی‌پشتوانه برداشته یا مشروط می‌شوند. **هیچ واقعیت تاریخی تازه‌ای افزوده نشده است.** هر جمله‌ای که به منبع نیاز دارد با `[منبع لازم]` علامت خورده است. واقعیت‌های فنی تازه فقط از شواهد همین ممیزی آمده‌اند و ارجاعشان کنار متن است.

---

## ۱. آغاز README

### پیش (EN، `README.md:1-3`)

> # Persian Palette (Manshour)
> **12 Persian-inspired palettes, 72 sRGB colors**, a Persian/English studio, and a TypeScript library for color calculations and design-token exports.

### پس (EN)

> # ManschouRey · <span lang="fa" dir="rtl">مَنشورِی!</span>
>
> A Persian/English design-color toolkit: **12 palettes of 72 designer-chosen sRGB colors inspired by Iranian art, architecture and landscapes**, a single-file studio, and a TypeScript library for color math (HCT/CAM16, APCA, Oklab) and design-token export.
>
> Cultural notes attached to each color are **working annotations that have not been independently verified**. The HEX values are digital design choices, not measurements of historical objects. See [what is and is not verified](docs/verification.md).
>
> Formerly published as “Persian Palette”; the repository URL and the `@persian-palette/core` package name are unchanged.

### پیش (FA، `README.fa.md:1-3`)

> # رنگ‌های پارسی — منشور
> ابزاری برای طراحی رابط با **۱۲ پالت و ۷۲ رنگ دیجیتال الهام‌گرفته از فرهنگ ایرانی**، استودیوی فارسی/انگلیسی و کتابخانهٔ TypeScript.

### پس (FA)

> # مَنشورِی! · <span lang="en" dir="ltr">ManschouRey</span>
>
> جعبه‌ابزار دوزبانهٔ رنگ برای طراحی: **۱۲ پالت با ۷۲ رنگ sRGB که طراح با الهام از هنر، معماری و طبیعت ایران برگزیده است**، به‌همراه یک استودیوی تک‌فایلی و کتابخانهٔ TypeScript برای محاسبات رنگ (HCT/CAM16، APCA و Oklab) و خروجی توکن طراحی.
>
> یادداشت‌های فرهنگی هر رنگ **یادداشت‌های کاری‌اند و به‌طور مستقل تأیید نشده‌اند**. مقدارهای HEX انتخاب دیجیتال طراح‌اند، نه اندازه‌گیری اشیای تاریخی. [آنچه تأیید شده و آنچه تأیید نشده](docs/verification.md) را ببینید.
>
> نام پیشین پروژه «رنگ‌های پارسی / Persian Palette» بود. نشانی مخزن و نام بستهٔ `@persian-palette/core` تغییر نکرده‌اند.

**دلیل تغییر:** در متن فعلی واژهٔ «دیجیتال» هست، اما نمی‌گوید که مقدار HEX انتخاب طراح است. فیلد `meaningFa` رکورد `isfahan-tiles-c3` خودش می‌گوید «معروف به Persian Green در کاتالوگ‌های جهانی» (`heritage-data.ts:198`)، و W1 هم نشان می‌دهد چند HEX از فهرست‌های نام‌گذاری مدرن رنگ آمده‌اند.

---

## ۲. رکورد یک پالت/رنگ: `isfahan-tiles-c2`

### پیش (`packages/core/src/tokens/heritage-data.ts:108-114`)

```text
nameFa:    فیروزه‌ای اصیل (Persian Turquoise)
meaningFa: استاندارد جهانی فیروزه‌ای ایرانی و نگین نیشابور
```

### پس

```text
nameFa:    فیروزه‌ای (Persian Turquoise)
meaningFa: رنگ دیجیتالی که طراح با الهام از فیروزهٔ نیشابور و لعاب‌های فیروزه‌ای برگزیده است.
           مقدار #30D5C8 از نمونهٔ فیزیکی اندازه‌گیری نشده است.
provenance.designStatus:      designer-choice
provenance.documentaryStatus: unverified   // «فیروزهٔ نیشابور» [منبع لازم]
```

```text
nameEn:  Turquoise (Persian Turquoise)
meaning: A digital color chosen with Nishapur turquoise and turquoise glazes in mind.
         #30D5C8 is not measured from a physical specimen.
```

**دلیل تغییر:** واژهٔ «اصیل» و عبارت «استاندارد جهانی» اصالت و استانداردبودن را ادعا می‌کنند. هیچ استانداردی ذکر نشده است، و حتی اگر فهرست مدرنی این HEX را «Persian turquoise» بنامد، این نام‌گذاری استاندارد میراثی نیست. نام «Persian Turquoise» حفظ شد تا شناسه و کلید توکن (`persian-turquoise`) پایدار بماند (MSR-API-002).

---

## ۳. برچسب منشأ (provenance)

### پیش (`app/enhancements.js:8` و `:11`)

- EN: `Color metrics: computed from sRGB • Spectral & 3D Texture: Simulation • Historical & Mineral: Primary source documented.`
- FA: `محاسبات رنگ: از sRGB • طیف و بافت: شبیه‌سازی • اطلاعات تاریخی و ماده: نیازمند بررسی منبع.`

دو نسخه **معنای مخالف** دارند. متن انگلیسی برای هر ۷۲ رکورد می‌گوید «منبع اولیه ثبت شده است»، درحالی‌که دادهٔ همهٔ رکوردها `heritageStatus: 'unverified'` و `historicalReference.verification: 'not-verified'` دارد (`palettes.ts:49, 58`).

### پس (هم‌معنا در دو زبان؛ مقدارها از دادهٔ هر رکورد خوانده شوند)

- FA: `محاسبات رنگ: از مقدار sRGB محاسبه شده • منحنی طیف و بافت: نمایشی، اندازه‌گیری نشده • ادعاهای تاریخی و مادی: تأییدنشده (ارجاع موجود، بررسی‌نشده) • انتخاب HEX: طراح`
- EN: `Color metrics: computed from sRGB • Spectrum & texture: illustrative, not measured • Historical & material claims: unverified (reference listed, not checked) • HEX value: designer’s choice`

در صورت تعارض مختصات:
- FA: `مختصات جغرافیایی دو مقدار متفاوت دارد: {field} {selected} / {alternative}. مقدار نمایش‌داده‌شده انتخاب قطعی نیست.`
- EN: `Two conflicting coordinates are recorded: {field} {selected} / {alternative}. The displayed value is not a resolved choice.`

**اصلاح هم‌خانواده:** در `app/app.js:79` متن انگلیسی `heroDesc` از «documented historical sources» حرف می‌زند، اما متن فارسی همان کلید (`:40`) می‌گوید «وضعیت روشن منابع تاریخی». پیشنهاد: `… and a clear status for every historical note (currently unverified).`

---

## ۴. محدودیت علمی: مدل طیفی

### پیش (`packages/core/src/math/spectral.ts:1-4`؛ در `dist/*.d.ts` و tooltip ویرایشگر هم دیده می‌شود)

```ts
/**
 * Spectral Reflectance Distribution Model (380nm - 700nm)
 * Models physical reflectance curves of historical minerals and natural organic dyes
 */
```

### پس

```ts
/**
 * Illustrative reflectance-like curve (380–700 nm) built from a Gaussian peak and a fixed
 * long-wave shoulder. It is NOT derived from measurements of any mineral, dye or object and
 * must not be used for colorimetry, pigment identification or conservation work.
 */
```

همین قاعده دربارهٔ UI: عنوان فعلی `منحنی توزیع بازتاب طیف نوری (۳۸۰ تا ۷۰۰ نانومتر)` (`app/template.html:975`) به این صورت درآید: `منحنی نمایشی بازتاب (۳۸۰ تا ۷۰۰ نانومتر) — اندازه‌گیری نیست`. توضیح موجود در `template.html:967` («مدل نمایشی … دادهٔ اندازه‌گیری‌شدهٔ طیف‌سنج نیست») درست است و باید بماند.

**دلیل تغییر:** این نسخه با `docs/DESIGN_SYSTEM.md` («Gaussian illustrations») و با `spectralStatus: 'illustrative'` سازگار است. طبق A02، سه رکورد برای رنگ‌هایی «طول موج غالب» دارند که از نظر فیزیکی چنین طول موجی ندارند (سیاه و دو رنگ در ناحیهٔ ارغوانی). پس برچسب «فیزیکی» این مقدارها نادرست است.

---

## ۵. نگهدارنده و «دربارهٔ پروژه»

### پیش

- `packages/core/package.json:5`: `"author": "Persian Palette Vault Working Group"`
- `LICENSE:3`: `Copyright (c) 2026 Persian Palette Vault contributors`
- `SECURITY.md:12`: `… within **Persian Palette Design System (Manshour)** …`
- `docs/ROADMAP.md:16`: `Use Codex for regression-test proposals, review support, …`

### پس (پیشنهاد؛ متن حقوقی مجوز را مالک تعیین می‌کند)

```json
"author": "Majid ZeidAbadiNejad (AdzeemDigital)",
"repository": { "type": "git", "url": "git+https://github.com/AdzeemDigital/persian-palette.git", "directory": "packages/core" },
"bugs": "https://github.com/AdzeemDigital/persian-palette/issues",
"homepage": "https://github.com/AdzeemDigital/persian-palette#readme"
```

**About (FA):**
> مَنشورِی! پروژه‌ای مستقل است که **مجید زیدآبادی‌نژاد** (AdzeemDigital) به‌تنهایی نگهداری می‌کند. در کدنویسی، بازبینی و مستندسازی از دستیاران هوش مصنوعی کمک گرفته شده است، از جمله ابزارهای OpenAI مانند Codex [مالک فهرست کامل ابزارهای به‌کاررفته را تأیید کند؛ `review-2026-09-21.md` از یک نشست Antigravity هم نام می‌برد]. همهٔ تغییرها را نگهدارنده بازبینی و منتشر می‌کند. پروژه وابسته به هیچ مؤسسه، موزه یا شرکتی نیست و تأیید رسمی هیچ نهادی را ندارد. اصلاح‌های مستند را از طریق issue بفرستید.

**About (EN):**
> ManschouRey is an independent project maintained solely by **Majid ZeidAbadiNejad** (AdzeemDigital). AI assistants, including OpenAI tools such as Codex, have been used for coding, review and documentation [owner to confirm the complete list of tools used]. The maintainer reviews and publishes every change. The project is not affiliated with, or endorsed by, any institution, museum or company. Please send sourced corrections through issues.

**دلیل تغییر:** «Working Group» گروهی را القا می‌کند که وجود ندارد. قالب پیشنهادی، «حقیقت‌محور و بدون اغراق» است: تک‌نگهدارنده بودن را پنهان نمی‌کند، کمک هوش مصنوعی را افشا می‌کند و هیچ وابستگی سازمانی ادعا نمی‌کند. تغییر نام دارندهٔ حق نشر در LICENSE تصمیم حقوقی مالک است و ممیزی آن را تعیین نمی‌کند.
