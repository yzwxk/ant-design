(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/input/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/index.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/index.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"通过鼠标或键盘输入内容，是最基础的表单域的包装。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"需要用户输入表单域内容时。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"提供组合型输入框，带搜索的输入框，还可以进行大小选择。\"\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"输入框\",\n    \"type\": \"数据录入\",\n    \"title\": \"Input\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg\",\n    \"filename\": \"components/input/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#FAQ\",\n          \"title\": \"FAQ\"\n        },\n        \"FAQ\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"h3\",\n      \"Input\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"addonAfter\"\n          ],\n          [\n            \"td\",\n            \"带标签的 input，设置后置标签\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"addonBefore\"\n          ],\n          [\n            \"td\",\n            \"带标签的 input，设置前置标签\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"allowClear\"\n          ],\n          [\n            \"td\",\n            \"可以点击清除图标删除内容\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bordered\"\n          ],\n          [\n            \"td\",\n            \"是否有边框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"4.5.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultValue\"\n          ],\n          [\n            \"td\",\n            \"输入框默认内容\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabled\"\n          ],\n          [\n            \"td\",\n            \"是否禁用状态，默认为 false\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"id\"\n          ],\n          [\n            \"td\",\n            \"输入框的 id\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxLength\"\n          ],\n          [\n            \"td\",\n            \"最大长度\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"prefix\"\n          ],\n          [\n            \"td\",\n            \"带有前缀图标的 input\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"控件大小。注：标准表单内的输入框大小限制为 \",\n            [\n              \"code\",\n              \"large\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"large\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"middle\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"suffix\"\n          ],\n          [\n            \"td\",\n            \"带有后缀图标的 input\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"type\"\n          ],\n          [\n            \"td\",\n            \"声明 input 类型，同原生 input 标签的 type 属性，见：\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性\"\n              },\n              \"MDN\"\n            ],\n            \"(请直接使用 \",\n            [\n              \"code\",\n              \"Input.TextArea\"\n            ],\n            \" 代替 \",\n            [\n              \"code\",\n              \"type=\\\"textarea\\\"\"\n            ],\n            \")\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"text\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"输入框内容\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"输入框内容变化时的回调\"\n          ],\n          [\n            \"td\",\n            \"function(e)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onPressEnter\"\n          ],\n          [\n            \"td\",\n            \"按下回车的回调\"\n          ],\n          [\n            \"td\",\n            \"function(e)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"blockquote\",\n      [\n        \"p\",\n        \"如果 \",\n        [\n          \"code\",\n          \"Input\"\n        ],\n        \" 在 \",\n        [\n          \"code\",\n          \"Form.Item\"\n        ],\n        \" 内，并且 \",\n        [\n          \"code\",\n          \"Form.Item\"\n        ],\n        \" 设置了 \",\n        [\n          \"code\",\n          \"id\"\n        ],\n        \" 和 \",\n        [\n          \"code\",\n          \"options\"\n        ],\n        \" 属性，则 \",\n        [\n          \"code\",\n          \"value\"\n        ],\n        \" \",\n        [\n          \"code\",\n          \"defaultValue\"\n        ],\n        \" 和 \",\n        [\n          \"code\",\n          \"id\"\n        ],\n        \" 属性会被自动设置。\"\n      ]\n    ],\n    [\n      \"p\",\n      \"Input 的其他属性和 React 自带的 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes\"\n        },\n        \"input\"\n      ],\n      \" 一致。\"\n    ],\n    [\n      \"h3\",\n      \"Input.TextArea\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"allowClear\"\n          ],\n          [\n            \"td\",\n            \"可以点击清除图标删除内容\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoSize\"\n          ],\n          [\n            \"td\",\n            \"自适应内容高度，可设置为 true \",\n            \"|\",\n            \" false 或对象：{ minRows: 2, maxRows: 6 }\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bordered\"\n          ],\n          [\n            \"td\",\n            \"是否有边框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"4.5.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultValue\"\n          ],\n          [\n            \"td\",\n            \"输入框默认内容\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxLength\"\n          ],\n          [\n            \"td\",\n            \"内容最大长度\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.7.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showCount\"\n          ],\n          [\n            \"td\",\n            \"是否展示字数\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" { formatter: ({ count: number, maxLength?: number }) => string }\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\",\n            \"4.7.0 (formatter: 4.10.0)\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"输入框内容\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onPressEnter\"\n          ],\n          [\n            \"td\",\n            \"按下回车的回调\"\n          ],\n          [\n            \"td\",\n            \"function(e)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onResize\"\n          ],\n          [\n            \"td\",\n            \"resize 回调\"\n          ],\n          [\n            \"td\",\n            \"function({ width, height })\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"code\",\n        \"Input.TextArea\"\n      ],\n      \" 的其他属性和浏览器自带的 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea\"\n        },\n        \"textarea\"\n      ],\n      \" 一致。\"\n    ],\n    [\n      \"h4\",\n      \"Input.Search\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"enterButton\"\n          ],\n          [\n            \"td\",\n            \"是否有确认按钮，可设为按钮文字。该属性会与 \",\n            [\n              \"code\",\n              \"addonAfter\"\n            ],\n            \" 冲突。\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" ReactNode\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"loading\"\n          ],\n          [\n            \"td\",\n            \"搜索 loading\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onSearch\"\n          ],\n          [\n            \"td\",\n            \"点击搜索图标、清除图标，或按下回车键时的回调\"\n          ],\n          [\n            \"td\",\n            \"function(value, event)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"其余属性和 Input 一致。\"\n    ],\n    [\n      \"h4\",\n      \"Input.Group\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"compact\"\n          ],\n          [\n            \"td\",\n            \"是否用紧凑模式\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"Input.Group\"\n            ],\n            \" 中所有的 \",\n            [\n              \"code\",\n              \"Input\"\n            ],\n            \" 的大小，可选 \",\n            [\n              \"code\",\n              \"large\"\n            ],\n            \" \",\n            [\n              \"code\",\n              \"default\"\n            ],\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"default\"\n            ]\n          ]\n        ]\n      ]\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Input.Group</span><span class=\\\"token punctuation\\\">></span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span> <span class=\\\"token punctuation\\\">/></span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span> <span class=\\\"token punctuation\\\">/></span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Input.Group</span><span class=\\\"token punctuation\\\">></span></span>\"\n      },\n      [\n        \"code\",\n        \"<Input.Group>\\n  <input />\\n  <input />\\n</Input.Group>\"\n      ]\n    ],\n    [\n      \"h4\",\n      \"Input.Password\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"iconRender\"\n          ],\n          [\n            \"td\",\n            \"自定义切换按钮\"\n          ],\n          [\n            \"td\",\n            \"(visible) => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"(visible) => (visible ? \",\n            \"<\",\n            \"EyeOutlined /> : \",\n            \"<\",\n            \"EyeInvisibleOutlined />)\"\n          ],\n          [\n            \"td\",\n            \"4.3.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"visibilityToggle\"\n          ],\n          [\n            \"td\",\n            \"是否显示切换按钮\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h4\",\n      \"Input Methods\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"名称\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"blur\"\n          ],\n          [\n            \"td\",\n            \"取消焦点\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"focus\"\n          ],\n          [\n            \"td\",\n            \"获取焦点\"\n          ],\n          [\n            \"td\",\n            \"(option?: { preventScroll?: boolean, cursor?: 'start' \",\n            \"|\",\n            \" 'end' \",\n            \"|\",\n            \" 'all' })\"\n          ],\n          [\n            \"td\",\n            \"option - 4.10.0\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"FAQ\"\n    ],\n    [\n      \"h3\",\n      \"为什么我动态改变 \",\n      [\n        \"code\",\n        \"prefix/suffix\"\n      ],\n      \" 时，Input 会失去焦点？\"\n    ],\n    [\n      \"p\",\n      \"当 Input 动态添加或者删除 \",\n      [\n        \"code\",\n        \"prefix/suffix\"\n      ],\n      \" 时，React 会重新创建 DOM 结构而新的 input 是没有焦点的。你可以预设一个空的 \",\n      [\n        \"code\",\n        \"<span />\"\n      ],\n      \" 来保持 DOM 结构不变：\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token keyword\\\">const</span> suffix <span class=\\\"token operator\\\">=</span> condition <span class=\\\"token operator\\\">?</span> <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Icon</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>smile<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/></span></span> <span class=\\\"token punctuation\\\">:</span> <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>span</span> <span class=\\\"token punctuation\\\">/></span></span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Input</span> <span class=\\\"token attr-name\\\">suffix</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span>suffix<span class=\\\"token punctuation\\\">}</span></span> <span class=\\\"token punctuation\\\">/></span></span><span class=\\\"token punctuation\\\">;</span>\"\n      },\n      [\n        \"code\",\n        \"const suffix = condition ? <Icon type=\\\"smile\\\" /> : <span />;\\n\\n<Input suffix={suffix} />;\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"为何 TextArea 受控时，\",\n      [\n        \"code\",\n        \"value\"\n      ],\n      \" 可以超过 \",\n      [\n        \"code\",\n        \"maxLength\"\n      ],\n      \"？\"\n    ],\n    [\n      \"p\",\n      \"受控时，组件应该按照受控内容展示。以防止在表单组件内使用时显示值和提交值不同的问题。\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/input/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);