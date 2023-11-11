'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/search-bar-airbnb/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: '1024px',
      width: 1024,
      height: 40,
    },
    {
      name: '720px',
      width: 720,
      height: 40,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'Big search bar data-qa_big',
      selectors: ['[data-qa="big"]'],
    },
    {
      ...basic,
      label: 'Small search bar data-qa_small',
      selectors: ['[data-qa="small"]'],
    },
  ],
};

module.exports = config;
