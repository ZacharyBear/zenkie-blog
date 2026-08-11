---
title: 'Use any element as border(CSS)'
date: '2026-08-11'
---

# Use mask and mask-composite to create a border effect on any element in CSS

Preview on [MDN Playground](https://developer.mozilla.org/zh-CN/play?id=XHgxqaqGfRchQeUWXxaDILXttsIyheaPGxhcDUfmqoLLkmrWxu0Yrokdg6l%2F7xFFHbFSnSJBsoPsFXCZ)

```html
<main>
  <div class="masked">
    <div class="glow"></div>
  </div>
</main>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
}

.masked {
  position: relative;
  width: 100px;
  height: 100px;
  padding: 2px;
  /* border: 1px solid #0000; */
  border-radius: 1rem;

  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) border-box;
  mask-composite: exclude;

  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      #fff0,
      #f00,
      #ff0,
      #0f0,
      #0ff,
      #00f,
      #fff0
    );
    transform: translate(-50%, -50%);
    animation: spin 3s linear infinite;
  }
}
@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
```
