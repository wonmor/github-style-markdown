# github-style-markdown
- An NPM library that handles GitHub markdown-style text.
- Remember that you have to write your own CSS stylesheet to imitate the below screenshot's aesthetics.
- A replacement for [react-markdown](https://github.com/remarkjs/react-markdown) package.

[![npm version](https://badge.fury.io/js/github-style-markdown.svg)](https://badge.fury.io/js/github-style-markdown)

<img width="500" alt="markdown-screenshot" src="https://github.com/wonmor/github-style-markdown/assets/35755386/9f03b7d6-c6ea-4b01-a084-913d09356097" />

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

- In Vanilla JS, call it by
```javascript
const parseMarkdown = require('github-style-markdown');

const markdownText = `
# Hello, world!
This is **bold** and this is *italic*.
> This is a quote.
`;

const htmlText = parseMarkdown(markdownText);

console.log(htmlText);

```
