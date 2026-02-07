'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const PAGE_URL =
  'https://johannpdaniel.github.io/layout_search-bar-airbnb/src/';

module.exports = {
  ...backstop,

  viewports: [
    {
      name: '1024px',
      width: 1024,
      height: 200,
    },
    {
      name: '720px',
      width: 720,
      height: 200,
    },
  ],

  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      url: PAGE_URL,
      referenceUrl: PAGE_URL,
      testUrl: PAGE_URL,
      selectors: ['document'],
    },
    {
      ...basicScenario,
      label: 'Big search bar data-qa_big',
      url: PAGE_URL,
      referenceUrl: PAGE_URL,
      testUrl: PAGE_URL,
      selectors: ['[data-qa="big"]'],
    },
    {
      ...basicScenario,
      label: 'Small search bar data-qa_small',
      url: PAGE_URL,
      referenceUrl: PAGE_URL,
      testUrl: PAGE_URL,
      selectors: ['[data-qa="small"]'],
    },
  ],
};
