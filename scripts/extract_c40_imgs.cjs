const https = require('https');

https.get('https://www.keenon.com/en/product/C40/index.html', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const imgRegex = /https:\/\/static\.keenon\.com\/uploads\/[a-zA-Z0-9.\/_-]+(?:jpg|png|webp)/g;
        const matches = data.match(imgRegex) || [];
        const unique = [...new Set(matches)];
        unique.forEach((u, i) => console.log(`${i}: ${u}`));
    });
});
