(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/empty/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/empty/index.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/empty/index.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"空状态时的展示占位图。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"当目前没有数据时，用于显式的用户提示。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"初始化场景时的引导创建流程。\"\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"空状态\",\n    \"type\": \"数据展示\",\n    \"title\": \"Empty\",\n    \"cols\": 1,\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg\",\n    \"filename\": \"components/empty/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#内置图片\",\n          \"title\": \"内置图片\"\n        },\n        \"内置图片\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Empty</span><span class=\\\"token punctuation\\\">></span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Button</span><span class=\\\"token punctuation\\\">></span></span>创建<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Button</span><span class=\\\"token punctuation\\\">></span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Empty</span><span class=\\\"token punctuation\\\">></span></span>\"\n      },\n      [\n        \"code\",\n        \"<Empty>\\n  <Button>创建</Button>\\n</Empty>\"\n      ]\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"description\"\n          ],\n          [\n            \"td\",\n            \"自定义描述内容\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"image\"\n          ],\n          [\n            \"td\",\n            \"设置显示图片，为 string 时表示自定义图片地址。\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"Empty.PRESENTED_IMAGE_DEFAULT\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"imageStyle\"\n          ],\n          [\n            \"td\",\n            \"图片样式\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"内置图片\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"Empty.PRESENTED_IMAGE_SIMPLE\"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"site-empty-buildIn-img site-empty-buildIn-simple\"\n          },\n          [\n            \"div\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"Empty.PRESENTED_IMAGE_DEFAULT\"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"site-empty-buildIn-img site-empty-buildIn-default\"\n          }\n        ]\n      ]\n    ],\n    [\n      \"style\",\n      \"\\n  .site-empty-buildIn-img {\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n  }\\n  .site-empty-buildIn-simple {\\n    width: 55px;\\n    height: 35px;\\n    background-image: url(\\\"https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png\\\");\\n  }\\n  .site-empty-buildIn-default {\\n    width: 121px;\\n    height: 116px;\\n    background-image: url(\\\"https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png\\\");\\n  }\\n  [data-theme=\\\"dark\\\"] .site-empty-buildIn-simple {\\n    background-image: url(\\\"https://gw.alipayobjects.com/zos/antfincdn/ldFsHUh3Xh/ea62c5fe-07bb-4fcd-9d35-19220cef372e.png\\\");\\n  }\\n  [data-theme=\\\"dark\\\"] .site-empty-buildIn-default {\\n    background-image: url(\\\"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*gfq-SoT3wF0AAAAAAAAAAABkARQnAQ\\\");\\n  }\\n\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/empty/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);