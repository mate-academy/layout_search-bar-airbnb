'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/search-bar-airbnb/',
};

const config = {
  ...backstop,
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
      ...basic,
      label: 'big-search-bar',
      selectors: ['[data-qa="big"]'],
    },
    {
      ...basic,
      label: 'small-search-bar',
      selectors: ['[data-qa="small"]'],
    },
    {
      ...basic,
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
};

module.exports = config;
