const fs = require('fs');
const path = require('path');

// قراءة المتغيرات من البيئة
const secrets = {
    SECRETPASS: process.env.SECRETPASS || '',
    SECRETPASSR: process.env.SECRETPASSR || '',
    PHOTO_URLSPHOTO1: process.env.PHOTO_URLSPHOTO1 || '',
    PHOTO_URLSPHOTO2: process.env.PHOTO_URLSPHOTO2 || '',
    PHOTO_URLSPHOTO3: process.env.PHOTO_URLSPHOTO3 || '',
    PHOTO_URLSPHOTO4: process.env.PHOTO_URLSPHOTO4 || '',
    PHOTO_URLSPHOTO5: process.env.PHOTO_URLSPHOTO5 || '',
    PHOTO_URLSPHOTO6: process.env.PHOTO_URLSPHOTO6 || ''
};

// قراءة ملف HTML الأصلي
let htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// استبدال جميع المتغيرات
for (const [key, value] of Object.entries(secrets)) {
    const placeholder = `{{ ${key} }}`;
    htmlContent = htmlContent.split(placeholder).join(value);
    console.log(`✅ استبدال: ${key}`);
}

// حفظ الملف النهائي
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), htmlContent);
console.log('🎉 تم بناء الموقع بنجاح!');