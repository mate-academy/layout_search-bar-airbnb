report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Big_search_bar_data-qa_big_1024px.png",
        "test": "..\\bitmaps_test\\20191017-233654\\Big_search_bar_data-qa_big_1024px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_1024px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.46",
          "analysisTime": 55
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Big_search_bar_data-qa_big_720px.png",
        "test": "..\\bitmaps_test\\20191017-233654\\Big_search_bar_data-qa_big_720px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_720px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.67",
          "analysisTime": 66
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Small_search_bar_data-qa_small_1024px.png",
        "test": "..\\bitmaps_test\\20191017-233654\\Small_search_bar_data-qa_small_1024px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_1024px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.35",
          "analysisTime": 57
        },
        "diffImage": "..\\bitmaps_test\\20191017-233654\\failed_diff_Small_search_bar_data-qa_small_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Small_search_bar_data-qa_small_720px.png",
        "test": "..\\bitmaps_test\\20191017-233654\\Small_search_bar_data-qa_small_720px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_720px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.93",
          "analysisTime": 67
        },
        "diffImage": "..\\bitmaps_test\\20191017-233654\\failed_diff_Small_search_bar_data-qa_small_720px.png"
      },
      "status": "fail"
    }
  ]
});