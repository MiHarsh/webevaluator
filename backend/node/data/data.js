const data = [
  {
    selector: "button audio[controls]",
    category: "error",
    name: "audio[controls]-child-of-button",
    description: "Ensure that <audio controls> is not a child of <button>",
  },
  {
    selector: "button button",
    category: "error",
    name: "button-child-of-button",
    description: "Ensure that <button> is not a child of <button>",
  },
  {
    selector: "button details",
    category: "error",
    name: "details-child-of-button",
    description: "Ensure that <details> is not a child of <button>",
  },
  {
    selector: "button embed",
    category: "error",
    name: "embed-child-of-button",
    description: "Ensure that <embed> cannot be a child of <button>",
  },
  {
    selector: "button iframe",
    category: "error",
    name: "iframe-child-of-button",
    description: "Ensure that <iframe> is not a child of <button>",
  },
  {
    selector: "button img[usemap]",
    category: "error",
    name: "img[usemap]-child-of-button",
    description: "Ensure that <img usemap> is not a child of <button>",
  },
  {
    selector: "button input:not([type=hidden])",
    category: "error",
    name: "input:not([type=hidden])-child-of-button",
    description: "Ensure that <input type='hidden'> is not a child of <button>",
  },
  {
    selector: "button label",
    category: "error",
    name: "label-child-of-button",
    description: "Ensure that <label> is not a child of <button>",
  },
  {
    selector: "button object[usemap]",
    category: "error",
    name: "object[usemap]-child-of-button",
    description: "Ensure that <object usemap> is not a child of <button>",
  },
  {
    selector: "button select",
    category: "error",
    name: "select-child-of-button",
    description: "Ensure that <select> is not a child of <button>",
  },
  {
    selector: "button textarea",
    category: "error",
    name: "textarea-child-of-button",
    description: "Ensure that <textarea> is not a child of <button>",
  },
  {
    selector: "button video[controls]",
    category: "error",
    name: "video[controls]-child-of-button",
    description: "Ensure that <video controls> is not a child of <button>",
  },
  {
    selector: "button:not([aria-label]):not([aria-labelledby]):empty",
    category: "error",
    name: "empty-label-button",
    description:
      "Ensure that <button> has meaningful content or is labelled appropriately",
  },
  {
    selector: "[dir]:not([dir=rtl]):not([dir=ltr]):not([dir=auto])",
    category: "error",
    name: "invalid-dir-value",
    description:
      "Ensure that the dir attribute can only have the values, 'ltr', 'rtl' and 'auto'",
  },
  {
    selector: "h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty",
    category: "error",
    name: "empty-heading",
    description: "Ensure that headings must not be empty",
  },
  {
    selector:
      "h1[aria-hidden], h2[aria-hidden], h3[aria-hidden], h4[aria-hidden], h5[aria-hidden], h6[aria-hidden]",
    category: "error",
    name: "aria-hidden-heading",
    description:
      "Ensure that headings should be reachable by assistive technologies (no aria-hidden)",
  },
  {
    selector:
      "h2 ~ h1:first-of-type, h2 ~ * h1:first-of-type, h3 ~ h2:first-of-type, h3 ~ * h2:first-of-type, h4 ~ h2:first-of-type, h4 ~ * h2:first-of-type, h5 ~ h2:first-of-type, h5 ~ * h2:first-of-type, h6 ~ h2:first-of-type, h6 ~ * h2:first-of-type, h4 ~ h3:first-of-type, h4 ~ * h3:first-of-type, h5 ~ h3:first-of-type, h5 ~ * h3:first-of-type, h6 ~ h3:first-of-type, h6 ~ * h3:first-of-type, h5 ~ h4:first-of-type, h5 ~ * h4:first-of-type, h6 ~ h4:first-of-type, h6 ~ * h4:first-of-type, h6 ~ h5:first-of-type, h6 ~ * h5:first-of-type",
    category: "error",
    name: "skip-heading-levels",
    description: "Ensure that headings should not skip levels",
  },
  {
    selector: "html:not([lang]) body",
    category: "error",
    name: "missing-lang-attribute",
    description: "Ensure that html has lang attribute",
  },
  {
    selector: "html[lang=''] body",
    category: "error",
    name: "empty-lang-attribute",
    description: "Ensure that html lang attribute should not be empty",
  },
  {
    selector: "iframe:not([title])",
    category: "error",
    name: "missing-iframe-title",
    description: "Ensure that all <iframe> must have a title",
  },
  {
    selector: "img:not([alt])",
    category: "error",
    name: "missing-img-alt",
    description: "Ensure that all <img> must have alternative text",
  },
  {
    selector: "a audio[controls]",
    category: "error",
    name: "audio[controls]-child-of-a",
    description: "Ensure that <audio controls> is not a child of <a>",
  },
  {
    selector: "a button",
    category: "error",
    name: "button-child-of-a",
    description: "Ensure that <button> is not a child of <a>",
  },
  {
    selector: "a details",
    category: "error",
    name: "details-child-of-a",
    description: "Ensure that <details> is not a child of <a>",
  },
  {
    selector: "a embed",
    category: "error",
    name: "embed-child-of-a",
    description: "Ensure that <embed> is not a child of <a>",
  },
  {
    selector: "a iframe",
    category: "error",
    name: "iframe-child-of-a",
    description: "Ensure that <iframe> is not a child of <a>",
  },
  {
    selector: "a img[usemap]",
    category: "error",
    name: "img[usemap]-child-of-a",
    description: "Ensure that <img usemap> is not a child of <a>",
  },
  {
    selector: "a input:not([type=hidden])",
    category: "error",
    name: "input[type=hidden]-child-of-a",
    description: "Ensure that <input type='hidden'> is not a child of <a>",
  },
  {
    selector: "a label",
    category: "error",
    name: "label-child-of-a",
    description: "Ensure that <label> is not a child of <a>",
  },
  {
    selector: "a object[usemap]",
    category: "error",
    name: "object[usemap]-child-of-a",
    description: "Ensure that <object usemap> is not a child of <a>",
  },
  {
    selector: "a select",
    category: "error",
    name: "select-child-of-a",
    description: "Ensure that <select> is not a child of <a>",
  },
  {
    selector: "a textarea",
    category: "error",
    name: "textarea-child-of-a",
    description: "Ensure that <textarea> is not a child of <a>",
  },
  {
    selector: "a video[controls]",
    category: "error",
    name: "video[controls]-child-of-a",
    description: "Ensure that <video controls> is not a child of <a>",
  },
  {
    selector: "a[href]:not([aria-label]):not([aria-labelledby]):empty",
    category: "error",
    name: "missing-aria-label-of-a",
    description:
      "Ensure that <a> has meaningful content or is labelled appropriately",
  },
  {
    selector:
      "ol > *:not(li):not(script):not(template)::after, ul > *:not(li):not(script):not(template)",
    category: "error",
    name: "invalid-child-of-list",
    description:
      "Ensure <li>, <script> or <template> are the only direct children of <ul> or <ol>",
  },
  {
    selector: "dl > *:not(dt):not(dd)",
    category: "error",
    name: "invalid-child-of-dl",
    description:
      "Ensure that the only direct children of <dl> are <dt> and <dd>",
  },
  {
    selector:
      "nav:not([aria-label]):not([aria-labelledby]) ~ nav::after, nav ~ nav:not([aria-label]):not([aria-labelledby])",
    category: "error",
    name: "missing-aria-label-of-multiple-nav",
    description:
      "<nav> indicates the primary navigation for the page. In cases where multiple primary navigations exist, an aria-label or aria-labelledby attribute must be present on both <nav> elements",
  },
  {
    selector: "a[href][tabindex='-1']",
    category: "error",
    name: "-1-tab-index-of-a[href]",
    description:
      "Ensure that <a> with an href attribute does not have a tab index of -1",
  },
  {
    selector: "area[href][tabindex='-1']",
    category: "error",
    name: "-1-tab-index-of-area[href]",
    description:
      "Ensure that <area> with an href attribute does not have a tab index of -1",
  },
  {
    selector: "area[href][tabindex='-1']",
    category: "error",
    name: "-1-tab-index-of-a[href]",
    description:
      "Ensure that <area> with an href attribute does not have a tab index of -1",
  },
];

module.exports = data;
