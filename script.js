const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome')
.usingServer('http://10.0.0.93:4444/wd/hub')
.build();
  try {
    await driver.get('https://www.ya.ru');
    await driver.findElement(By.name('text')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver — Яндекс: нашлось 33 тыс. результатов'), 1000);
  } finally {
    await driver.quit();
  }
})();
