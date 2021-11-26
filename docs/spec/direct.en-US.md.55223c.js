(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/direct.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/direct.en-US.md":
/*!***************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/direct.en-US.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"article\",\n    {\n\n    },\n    [\n      \"h2\",\n      \"In-Page Editing\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img\",\n          \"align\": \"right\",\n          \"alt\": \"Example of click to edit\",\n          \"description\": \"Status 1: Common browsing mode, do not distinguish between editable  and  non-editable lines；<br>Status 2: On mouse hover, the background is backlit with yellow. A tool tip invites the user to 'Click to edit'；<br>Status 3: Once the user clicks on the title, the form elements 「Input box」, 「OK」 and 「Cancel」 appear, and the cursor is positioned in the 「input box」.\",\n          \"src\": \"https://gw.alipayobjects.com/zos/rmsportal/EXKwsvUkIUNkHBSsOlRi.png\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"Single-Field Inline Edit\"\n    ],\n    [\n      \"p\",\n      \"If 「readability」 is more important than 「editability」, 「click to edit」 can be used.\"\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img\",\n          \"align\": \"right\",\n          \"alt\": \"Example of Text link/Icon Edit\",\n          \"description\": \"Status 1: Text link/icon appears near the editable line.；<br>Status 2: Once the mouse clicks 「edit」,the form elements 「Input box」, 「Ok」 and 「Cancel」 appear, and the cursor is positioned in the 「input box」.\\n\",\n          \"src\": \"https://gw.alipayobjects.com/zos/rmsportal/qiAYBQKcQnmavxHzkeaK.png\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"If the priority is given to 「readability」 and the 「editability」 of operation lines need to be highlighted at the same time, 「text link/icon edit」can be used.\"\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img\",\n          \"align\": \"right\",\n          \"alt\": \"Example of Multi-Field Inline Edit\",\n          \"description\": \"Edit mode without destroying integrity can enlarge the space in order to put down the 「Input box」 and other form elements. Besides, when switching the edit mode in the Table, it is necessary to ensure that each column does not beat.\",\n          \"src\": \"https://gw.alipayobjects.com/zos/rmsportal/ukbXcTHrgPmTfHmCassD.png\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"Multi-Field Inline Edit\"\n    ],\n    [\n      \"blockquote\",\n      [\n        \"p\",\n        \"Note：In「Multi-Field Inline Edit」, there are huge different between the content and required field, So it is more needed to use the \",\n        [\n          \"a\",\n          {\n            \"title\": null,\n            \"href\": \"../docs/spec/transition#解释刚刚发生了什么\"\n          },\n          \"「Explain What Just Happened」\"\n        ],\n        \" in 「Use Transition」to eliminate this visual effects.\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"hr\"\n    ],\n    [\n      \"h2\",\n      \"Drag and Drop\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img\",\n          \"align\": \"right\",\n          \"alt\": \"Example of Drag and Drop List\",\n          \"description\": \"Status 1: On mouse hover,a removable 「icon」 appears.；<br>Status 2： When hovering over the 「icon」, the pointer changes into a 「hand」, click-and-drag operation can be used；<br>Status 3：Drag  target to the placeable block. When  blue stroke appears, inform  user that object can be placed in the block.\",\n          \"src\": \"https://gw.alipayobjects.com/zos/rmsportal/xZWSNecZhGXaAVluxOAK.png\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"Drag and Drop List\"\n    ],\n    [\n      \"p\",\n      \"Drag and Drop can only limited in one dimension（upper/down or left/right）\"\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img\",\n          \"align\": \"right\",\n          \"alt\": \"Example of Drag and Drop picture/file\",\n          \"src\": \"https://gw.alipayobjects.com/zos/rmsportal/wuAOmxmpXkcZlHzTbIvY.png\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"Drag and Drop picture/file\"\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Design Patterns\",\n    \"type\": \"Principles\",\n    \"order\": 5,\n    \"title\": \"Make it Direct\",\n    \"filename\": \"docs/spec/direct.en-US.md\"\n  },\n  \"description\": [\n    \"section\",\n    [\n      \"p\",\n      \"As Alan Cooper states：「Where there is output, let there be input」. This is the principle of direct manipulation. eg：Instead of editing content on a separate page, do it directly in context.\"\n    ]\n  ],\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#In-Page-Editing\",\n          \"title\": \"In-Page Editing\"\n        },\n        \"In-Page Editing\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#Drag-and-Drop\",\n          \"title\": \"Drag and Drop\"\n        },\n        \"Drag and Drop\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./docs/spec/direct.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);