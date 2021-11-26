(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/colors.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/colors.en-US.md":
/*!***************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/colors.en-US.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  \"content\": [\n    \"article\",\n    {\n\n    },\n    [\n      \"h2\",\n      \"Color Model\"\n    ],\n    [\n      \"p\",\n      \"Ant Design's design team preferred to design with the HSB color model, which makes it easier for designers to have a clear psychological expectation of color when adjusting colors, as well as facilitate communication in teams.\"\n    ],\n    [\n      \"h2\",\n      \"System-level Color System\"\n    ],\n    [\n      \"p\",\n      \"Ant Design system-level color system also comes from the \\\"natural\\\" design language. Designers abstract the natural scenes through the capture, combined with the technical gene of Ant Financial, forming a unique 12 colors. Further through a large number of observations, to capture the different colors of natural light under the law of change, with the art of drawing ideas, the 12 colors were derived. The definition of neutral color palette is balanced with readability, aesthetics and usability.\"\n    ],\n    [\n      \"h3\",\n      \"Base Color Palettes\"\n    ],\n    [\n      \"p\",\n      \"Ant Design's base color palette totals 120 colors, including 12 primary colors and their derivative colors. These colors can basically include the need for color in background applications design.\"\n    ],\n    function bishengPluginReactPreviewer() {\n  var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n  var ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n  var _ColorPalettes = _interopRequireDefault(__webpack_require__(/*! ../../site/theme/template/Color/ColorPalettes */ \"./site/theme/template/Color/ColorPalettes.jsx\"));\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  return /*#__PURE__*/React.createElement(_ColorPalettes[\"default\"], null);\n},\n    [\n      \"p\",\n      \"Ant Design's color palette also has the ability to further extend. After careful elaboration by designers and programmers, we have come up with a set of color generation tools that combine the natural variation of colors. When there is a need for further color design, designers simply define the primary colors according to certain rules and will get a complete range of derived colors automatically .\"\n    ],\n    [\n      \"h3\",\n      \"Neutral Color Palette\"\n    ],\n    function bishengPluginReactPreviewer() {\n  var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n  var ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n  var _Palette = _interopRequireDefault(__webpack_require__(/*! ../../site/theme/template/Color/Palette */ \"./site/theme/template/Color/Palette.jsx\"));\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  return /*#__PURE__*/React.createElement(_Palette[\"default\"], {\n    color: {\n      name: 'gray',\n      count: 13\n    },\n    direction: \"horizontal\"\n  });\n},\n    [\n      \"h3\",\n      \"Data Visualization Color Palette\"\n    ],\n    [\n      \"p\",\n      \"Data visualization color palette is based on the basic color palette and neutral color palette, and based on the principle that AntV's \\\"effective, clear, accurate and beautiful\\\". \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://antv.vision/en/docs/specification/language/palette\"\n        },\n        \"View Palette\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"Palette Generation Tool\"\n    ],\n    [\n      \"p\",\n      \"If the above palettes do not meet your needs, you can choose a main color below, and Ant Design's color generation algorithm will generate a palette for you.\"\n    ],\n    function bishengPluginReactPreviewer() {\n  var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n  var ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n  var _ColorPaletteTool = _interopRequireDefault(__webpack_require__(/*! ../../site/theme/template/Color/ColorPaletteTool */ \"./site/theme/template/Color/ColorPaletteTool.jsx\"));\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  return /*#__PURE__*/React.createElement(_ColorPaletteTool[\"default\"], null);\n},\n    [\n      \"h3\",\n      \"Programmatic Usage\"\n    ],\n    [\n      \"p\",\n      \"We provide Less and JavaScript usage for developers.\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"strong\",\n            \"Less\"\n          ]\n        ],\n        [\n          \"pre\",\n          {\n            \"lang\": \"less\",\n            \"highlighted\": \"<span class=\\\"token variable\\\">@import</span> <span class=\\\"token string\\\">'~antd/lib/style/themes/default.less'</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">color</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token variable\\\">@blue-5</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token property\\\">background-color</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token variable\\\">@gold-2</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\"\n          },\n          [\n            \"code\",\n            \"@import '~antd/lib/style/themes/default.less';\\n\\n.selector {\\n  color: @blue-5;\\n  background-color: @gold-2;\\n}\"\n          ]\n        ],\n        [\n          \"p\",\n          \"Color less variables: \",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://github.com/ant-design/ant-design/blob/5ab2783ff00d4b1da04bb213c6b12de43e7649eb/components/style/color/colors.less\"\n            },\n            \"color.less\"\n          ],\n          \".\"\n        ],\n        [\n          \"p\",\n          [\n            \"br\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"strong\",\n            \"JavaScript\"\n          ]\n        ],\n        [\n          \"pre\",\n          {\n            \"lang\": null,\n            \"highlighted\": \"npm install <span class=\\\"token variable\\\">@ant</span><span class=\\\"token operator\\\">-</span>design<span class=\\\"token operator\\\">/</span>colors\"\n          },\n          [\n            \"code\",\n            \"npm install @ant-design/colors\"\n          ]\n        ],\n        [\n          \"pre\",\n          {\n            \"lang\": \"js\",\n            \"highlighted\": \"<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> blue <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'@ant-design/colors'</span><span class=\\\"token punctuation\\\">;</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>blue<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// ['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>blue<span class=\\\"token punctuation\\\">.</span>primary<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// '#1890FF'</span>\"\n          },\n          [\n            \"code\",\n            \"import { blue } from '@ant-design/colors';\\nconsole.log(blue); // ['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']\\nconsole.log(blue.primary); // '#1890FF'\"\n          ]\n        ],\n        [\n          \"p\",\n          \"More APIs: \",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://www.npmjs.com/package/@ant-design/colors\"\n            },\n            \"@ant-design/colors\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"hr\"\n    ],\n    [\n      \"h2\",\n      \"Product-level Color System\"\n    ],\n    [\n      \"h3\",\n      \"Brand Color\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"\\nhttps://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"The brand color is one of the most intuitive visual elements used that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. In the basic color palette to choose the main color, we recommend choosing the color plate from the shallow depth of the sixth color as the main color. Ant Design's brand color comes from blue of the base color palette, it's Hex value is 1890FF, application scenarios include: key action point, the operation status, important information highlighting, graphics and other scenes.\"\n    ],\n    [\n      \"h3\",\n      \"Functional Color\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*QY4JRa92gHQAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"Functional color represents a clear message as well as status, such as success, error, failure, reminder, link and so on. Functional color selection need to comply with the user's basic understanding of color. We suggest that the functional colors should be kept as consistent as possible under a set of product systems. Do not have too much customization to interfere with the user's cognitive experience. Ant Design's functional color palette is shown on the right:\"\n    ],\n    [\n      \"h3\",\n      \"Neutral Color\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/zos/antfincdn/8yMmB1lcD%24/colors.jpg\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"Neutral color is mainly used in a large part of the text interface, in addition to the background, borders, dividing lines, and other scenes are also very common. Neutral color definition needs to consider the difference between dark background and light background, while incorporating the WCAG 2.0 standard. The neutral color of Ant Design is based on transparency, as shown on the right:\"\n    ],\n    [\n      \"hr\"\n    ],\n    [\n      \"h2\",\n      \"Color Application In Enterprise Product Design\"\n    ],\n    [\n      \"p\",\n      \"In the design of background applications of Ant Financial, our attitude towards color is restrained. Color is used more based on information delivery, operational guidance and interactive feedback purposes. Above these principles that do not undermine operational efficiency and affect the clear communication of information, a rational choice of color is key. Of course, with illustrations and display page can be properly broken this idea.\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Global Styles\",\n    \"order\": 0,\n    \"title\": \"Colors\",\n    \"filename\": \"docs/spec/colors.en-US.md\"\n  },\n  \"description\": [\n    \"section\",\n    [\n      \"p\",\n      \"Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.\"\n    ],\n    [\n      \"p\",\n      \"The system-level color system mainly defines the basic color palette, neutral color palette and data visualization color palette in the design of Ant Financial. The product-level color system is in the specific design process, based on the color of the system to further define the tone of the product in accordance with the requirements and function of the color.\"\n    ]\n  ],\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#Color-Model\",\n          \"title\": \"Color Model\"\n        },\n        \"Color Model\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#System-level-Color-System\",\n          \"title\": \"System-level Color System\"\n        },\n        \"System-level Color System\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#Product-level-Color-System\",\n          \"title\": \"Product-level Color System\"\n        },\n        \"Product-level Color System\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#Color-Application-In-Enterprise-Product-Design\",\n          \"title\": \"Color Application In Enterprise Product Design\"\n        },\n        \"Color Application In Enterprise Product Design\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./docs/spec/colors.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);