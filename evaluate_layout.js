const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    const elements = await page.evaluate(() => {
        const results = {};
        const q = (name, selector) => {
            const el = document.querySelector(selector);
            if (el) {
                const r = el.getBoundingClientRect();
                results[name] = { x: r.x, y: r.y, width: r.width, right: r.right };
            } else {
                results[name] = 'missing';
            }
        };
        q('servicesContainer', '#services > div');
        q('faqContainer', '#faq > div');
        q('navContainer', 'header > div');
        q('heroLeft', '#hero > div:first-child');
        q('htmlWidth', 'html');
        return results;
    });

    console.log(JSON.stringify(elements, null, 2));
    await browser.close();
})();
