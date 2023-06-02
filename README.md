# github-style-markdown
An NPM library that handles GitHub markdown-style text.

A replacement for [react-markdown](https://github.com/remarkjs/react-markdown) package.

[![npm version](https://badge.fury.io/js/github-style-markdown.svg)](https://badge.fury.io/js/github-style-markdown)

---

## Installing

- Using NPM: ```npm install github-style-markdown```
- Using Yarn: ```yarn install github-style-markdown```

---

## Usage

- In React, you can call it by
```javascript
import React from 'react';
import parseMarkdown from 'github-style-markdown';

const MyComponent = () => {
  const markdownText = `
  # Hello, world!
  This is **bold** and this is *italic*.
  > This is a quote.
  `;

  const htmlText = parseMarkdown(markdownText);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlText }} />
  );
};

export default MyComponent;
```

- In vanilla JS, call it by
```javascript
const parseMarkdown = require('your-package-name');

const markdownText = `
# Hello, world!
This is **bold** and this is *italic*.
> This is a quote.
`;

const htmlText = parseMarkdown(markdownText);

console.log(htmlText);

```
