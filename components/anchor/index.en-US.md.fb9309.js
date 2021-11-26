(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/anchor/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/anchor/index.en-US.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/anchor/index.en-US.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"Hyperlinks to scroll on one page.\"\n    ],\n    [\n      \"h2\",\n      \"When To Use\"\n    ],\n    [\n      \"p\",\n      \"For displaying anchor hyperlinks on page and jumping between them.\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"Other\",\n    \"cols\": 2,\n    \"title\": \"Anchor\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg\",\n    \"filename\": \"components/anchor/index.en-US.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#When-To-Use\",\n          \"title\": \"When To Use\"\n        },\n        \"When To Use\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"h3\",\n      \"Anchor Props\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"affix\"\n          ],\n          [\n            \"td\",\n            \"Fixed mode of Anchor\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bounds\"\n          ],\n          [\n            \"td\",\n            \"Bounding distance of anchor area\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"5\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"getContainer\"\n          ],\n          [\n            \"td\",\n            \"Scrolling container\"\n          ],\n          [\n            \"td\",\n            \"() => HTMLElement\"\n          ],\n          [\n            \"td\",\n            \"() => window\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"getCurrentAnchor\"\n          ],\n          [\n            \"td\",\n            \"Customize the anchor highlight\"\n          ],\n          [\n            \"td\",\n            \"() => string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"offsetTop\"\n          ],\n          [\n            \"td\",\n            \"Pixels to offset from top when calculating position of scroll\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showInkInFixed\"\n          ],\n          [\n            \"td\",\n            \"Whether show ink-balls when \",\n            [\n              \"code\",\n              \"affix={false}\"\n            ]\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"targetOffset\"\n          ],\n          [\n            \"td\",\n            \"Anchor scroll offset, default as \",\n            [\n              \"code\",\n              \"offsetTop\"\n            ],\n            \", \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"#components-anchor-demo-targetOffset\"\n              },\n              \"example\"\n            ]\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"Listening for anchor link change\"\n          ],\n          [\n            \"td\",\n            \"(currentActiveLink: string) => void\"\n          ],\n          [\n            \"td\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onClick\"\n          ],\n          [\n            \"td\",\n            \"Set the handler to handle \",\n            [\n              \"code\",\n              \"click\"\n            ],\n            \" event\"\n          ],\n          [\n            \"td\",\n            \"function(e: Event, link: Object)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Link Props\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"href\"\n          ],\n          [\n            \"td\",\n            \"The target of hyperlink\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"target\"\n          ],\n          [\n            \"td\",\n            \"Specifies where to display the linked URL\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"The content of hyperlink\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/anchor/index.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);