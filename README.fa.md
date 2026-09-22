# گنجینهٔ رنگ‌های پارسی — Manshour Design System Studio

[![نسخه ۳.۰.۰](https://img.shields.io/badge/version-3.0.0-blue.svg?style=flat-square)](package.json)
[![مجوز MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![استاندارد W3C DTCG](https://img.shields.io/badge/W3C_DTCG-2025.10-purple.svg?style=flat-square)](https://tr.designtokens.org/format/)
[![کنتراست APCA](https://img.shields.io/badge/APCA--W3-0.1.9-emerald.svg?style=flat-square)](https://github.com/Myndex/apca-w3)
[![موتور HCT گوگل](https://img.shields.io/badge/Google_HCT-CAM16-amber.svg?style=flat-square)](https://github.com/material-foundation/material-color-utilities)

> [English Documentation](README.md) | مستندات فارسی

گنجینه رنگ‌های پارسی (منشور)، اولین سیستم دیزاین سازمانی و مرجع علمی برای بازتولید، استانداردسازی دیجیتال و صادرات توکن‌های رنگی اصیل ایرانی است. این پلتفرم با تلفیق فیزیک نور ادراکی (Oklab، HCT و APCA) با میراث معماری، فرش، نگارگری و تمدن باستانی ایران، پلی میان اصالت چند هزار ساله و مهندسی نرم‌افزار مدرن ایجاد کرده است.

---

## ویژگی‌های کلیدی

- 🏛️ **۱۲ پالت فاخر و ۷۲ رنگ تاریخی:** استخراج‌شده از کاشی‌کاری صفوی اصفهان، تخت جمشید، مسجد نصیرالملک، مینیاتور استاد بهزاد، فرش تبریز، جزیره هرمز و غیره.
- 🔬 **محاسبات علمی و فیزیک ادراکی نور:**
  - محاسبه دقیق تباین رنگی با الگوریتم **APCA-W3** و جدول مقیاس فونت بارلو.
  - تولید ۱۳ پله تنال ادراکی مطابق مدل **Google Material 3 (HCT/CAM16)**.
  - ترکیب و درون‌یابی دیجیتال رنگدانه‌ها در فضای ادراکی **Oklab**.
- ⚡ **توکن‌های چندپلتفرمی سازگار با W3C:**
  - فرمت رسمی W3C DTCG 2025.10 سازگار با Style Dictionary 5.
  - پشتیبانی کامل از Tailwind CSS v3 و Tailwind CSS v4 (`@theme`).
  - صدور توکن‌های بومی برای iOS/macOS (SwiftUI) و Android (Jetpack Compose).
  - پشتیبانی از متغیرهای Figma و Tokens Studio.
- 🎨 **سیستم دوگانه تم فاخر (Dual Themes):**
  - تم تیره آبسیدین کیهانی (`#070B14`) با نورپردازی نئون فیروزه‌ای و لاجوردی.
  - تم روشن عاجی صفوی (`#F8F6F0`) بر پایه کاغذ دست‌ساز مرقعات سنتی با کادرهای طلایی اسلیمی.
- 🚀 **استودیوی وب ۱۰۰٪ مستقل و آفلاین:**
  - بدون نیاز به اینترنت و بدون وابستگی خارجی در فایل تک‌سورس `code_artifact.html`.
  - مجهز به نمایشگر کریستال سه‌بعدی Three.js، شبیه‌ساز فتوگرامتری بافت و موتور سنتز صدا.
  - موتور دوزبانه پویا (فارسی / انگلیسی) با چیدمان استاندارد و بدون لود مجدد.

---

## نحوه اجرا و راه‌اندازی محلی

### اجرای استودیو

با داشتن Node.js 22 یا بالاتر، دستور زیر را در پوشه پروژه اجرا کنید:

```bash
npm start
```

سپس در مرورگر خود نشانی `http://127.0.0.1:4173/` را باز کنید. همچنین می‌توانید فایل‌های کامپایل‌شده زیر را مستقیماً در مرورگر باز نمایید:
- نسخه دوزبانه (فارسی / انگلیسی): [`code_artifact.html`](code_artifact.html)
- نسخه انگلیسی مستقل: [`code_artifact_en.html`](code_artifact_en.html)

### نصب پکیج هسته (`@persian-palette/core`)

```bash
npm install ./release/persian-palette-core-3.0.0.tgz
```

نمونه استفاده در TypeScript:

```typescript
import { PersianEngine, calculateAPCA, generateM3DynamicScheme } from '@persian-palette/core';

// دریافت رنگ فیروزه‌ای اصیل اصفهان
const turquoise = PersianEngine.getColor('isfahan-tiles', 'فیروزه‌ای اصیل');
console.log(turquoise.hex); // #30D5C8

// محاسبه کنتراست ادراکی APCA
const lc = calculateAPCA('#120A8F', '#F4F1DE');
console.log(`امتیاز کنتراست: ${lc}`);

// ساخت نقش‌های تم متریال ۳
const scheme = generateM3DynamicScheme(turquoise.hex);
console.log(scheme.light.primary, scheme.dark.primary);
```

---

## ساختار دایرکتوری پروژه

```
Manshour/
├── app/                  # سورس‌کدهای استودیوی وب (HTML، CSS، تعاملات JS)
├── packages/
│   └── core/             # پکیج هسته محاسبات رنگ، توکن‌ها و نوع‌های TypeScript
├── release/              # فایل‌های فشرده و پکیج npm آماده تحویل
├── docs/                 # مستندات فنی، راهنماها و تصاویر اعتبارسنجی
├── scripts/              # اسکریپت‌های بیلد، سرور محلی و انتشار
├── tests/                # تست‌های یکپارچگی و اعتبارسنجی
├── code_artifact.html    # استودیوی مستقل فارسی / دوزبانه
└── code_artifact_en.html # استودیوی مستقل نسخه انگلیسی
```

---

## پیوند مستندات تکمیلی

- [شروع سریع و ادغام با ابزارها (Quick Start)](docs/QUICKSTART.md)
- [مرجع جامع توابع API](docs/API_REFERENCE.md)
- [مشخصات سیستم دیزاین و فیزیک نور](docs/DESIGN_SYSTEM.md)
- [گزارش آزمون‌ها و اعتبارسنجی](docs/verification.md)
- [راهنمای مشارکت در پروژه](CONTRIBUTING.md)
- [منشور اخلاقی توسعه‌دهندگان](CODE_OF_CONDUCT.md)
- [خط‌مشی امنیت](SECURITY.md)
- [متن مجوز (MIT)](LICENSE)
