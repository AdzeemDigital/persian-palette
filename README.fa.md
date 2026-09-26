# رنگ‌های پارسی — منشور

ابزاری برای طراحی رابط با **۱۲ پالت و ۷۲ رنگ دیجیتال الهام‌گرفته از فرهنگ ایرانی**، استودیوی فارسی/انگلیسی و کتابخانهٔ TypeScript.

[![CI](https://github.com/AdzeemDigital/persian-palette/actions/workflows/ci.yml/badge.svg)](https://github.com/AdzeemDigital/persian-palette/actions/workflows/ci.yml)

[English](README.md) · [شروع سریع](docs/QUICKSTART.md) · [مرجع API](docs/API_REFERENCE.md) · [مشارکت](CONTRIBUTING.md)

## قابلیت‌ها

- بازیابی نام فارسی و انگلیسی، شناسهٔ رنگ و نویسه‌های معادل فارسی/عربی؛ نام ناموجود یا مبهم خطا می‌دهد.
- محاسبات HCT/CAM16 و تم Material با کتابخانهٔ مرجع گوگل، APCA-W3 و درون‌یابی دیجیتال Oklab.
- خروجی DTCG 2025.10 با آزمون مصرف در Style Dictionary 5؛ خروجی Tailwind، SwiftUI و Kotlin.
- فرمت‌های جداگانهٔ Tokens Studio و انتقال متغیرهای Figma.
- استودیوی تم روشن/تیره با پیش‌نمایش و خروجی؛ کد، فونت و استایل داخل فایل هستند.

این پروژهٔ عمومی نوپا است؛ ادعای پذیرش گسترده یا اندازه‌گیری آزمایشگاهی ندارد.

## منشأ داده

[گزارش کیفیت](packages/core/tokens/data-quality.json) برای هر ۷۲ رنگ انتساب تاریخی تأییدنشده ثبت می‌کند؛ تعداد طیف‌های اندازه‌گیری‌شده صفر است و مختصات ۱۱ رنگ تعارض دارند. نام‌ها، مواد و مختصات به بررسی مستقل نیاز دارند. HEX انتخاب طراحی است؛ طیف و بافت مدل نمایشی‌اند و ترکیب Oklab درون‌یابی دیجیتال است.

APCA به‌تنهایی خوانایی فونت فارسی یا انطباق کامل WCAG را تأیید نمی‌کند. واردکردن در Figma و کامپایل Swift/Kotlin در محیط بومی آزمایش نشده‌اند. [محدودهٔ آزمون‌ها](docs/verification.md) و [روش و منبع](docs/DESIGN_SYSTEM.md) را ببینید.

## اجرا و نصب

با Node.js 22 یا جدیدتر در پوشهٔ پروژه:

```sh
npm start
```

[استودیو محلی](http://127.0.0.1:4173) را باز کنید. HTML آماده به نصب وابستگی‌ها نیاز ندارد. نسخه‌های [پیش‌فرض](code_artifact.html) و [انگلیسی](code_artifact_en.html) دارایی‌های اجرایی را در خود دارند؛ تصاویر اختیاری و نقشه به اینترنت نیاز دارند. دوربین و کلیپ‌بورد به مرورگر و مجوز کاربر وابسته‌اند.

برای نصب کتابخانه از فایل محلی انتشار:

```sh
npm install ./release/persian-palette-core-3.0.0.tgz
```

بسته ESM، CommonJS و نوع‌های TypeScript دارد؛ انتشار در رجیستری عمومی npm ادعا نشده است.

## ساخت و آزمون

```sh
npm ci
npm --prefix packages/core ci
npm run check
npm run pack:core
npm run verify:package
```

CI برای Ubuntu/Windows و Node.js 22/24 تنظیم شده است و ساخت، تست‌ها، نمونه‌های مستندات و نصب بسته را بررسی می‌کند. نتیجهٔ هر اجرا و commit را در [Actions](https://github.com/AdzeemDigital/persian-palette/actions/workflows/ci.yml) ببینید؛ وجود workflow به معنی موفقیت آزمون‌ها نیست.

پس از ساخت و بسته‌بندی، `npm run pack:studio` با Python 3 فایل ZIP را می‌سازد. فایل‌های انتشار اصلی ۳.۰.۰ حفظ شده‌اند؛ خروجی CI به commit همان اجرا مربوط است.

## درباره و نگهداشت

نگهدارندهٔ اصلی: مجید زیدآبادی‌نژاد در ادزیم دیجیتال (Adzeem Digital).
این پروژه از ابزارهای هوش مصنوعی (Google Antigravity، Claude و OpenAI Codex) در کدنویسی، مدل‌های ریاضی، عیب‌یابی ممیزی و خودکارسازی آزمون‌ها تحت نظارت مهندسی انسانی استفاده می‌کند.

[نقشهٔ راه](docs/ROADMAP.md)، [مشارکت](CONTRIBUTING.md)، [مهاجرت نسخهٔ ۳](docs/migration-3.0.0.md) و [امنیت](SECURITY.md) در دسترس‌اند. اصلاح انتساب فرهنگی به منبع قابل بررسی نیاز دارد.

کد اصلی پروژه [MIT](LICENSE) است؛ وابستگی‌ها مجوزهای خود را دارند. شرایط APCA-W3 و مجوز AGPL v3 وابستگی colorparsley در [اعلان مجوزها](THIRD_PARTY_NOTICES.md) ثبت شده‌اند.

