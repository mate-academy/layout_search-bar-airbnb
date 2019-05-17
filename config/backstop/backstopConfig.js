'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios
const basicScenario = {
  label: 'search-bar-Airbnb', // name of the test
  url: 'http://localhost:8080/index.html',
  // eslint-disable-next-line max-len
  referenceUrl: 'https://mate-academy.github.io/layout_solutions/search-bar-airbnb/',
  readyEvent: '',
  readySelector: '',
  delay: 1000,
  hideSelectors: ['[data-qa-hidden]'],
  removeSelectors: ['[data-qa-remove]'],
  hoverSelector: '',
  clickSelector: '',
  postInteractionWait: 0,
  selectors: '',
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 1, // 1% of 100%
  requireSameDimensions: true,
};

module.exports = {
  id: 'test',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'desktop_s',
      width: 1024,
      height: 40,
    },
    {
      name: 'desktop_xs',
      width: 720,
      height: 40,
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'big-search-bar',
      selectors: ['[data-qa="big"]'],
    },
    {
      ...basicScenario,
      label: 'small-search-bar',
      selectors: ['[data-qa="small"]'],
    },
    {
      ...basicScenario,
      label: 'key-press',
      selectors: ['[data-qa="big"]'],
      keyPressSelectors: [
        {
          selector: '[data-qa="keypress"]',
          keyPress: 'Los An',
        },
      ],
    },
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
