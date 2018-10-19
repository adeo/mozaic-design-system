---
title: 'Components'
date: '2017-08-10'
---

## hello

<div class="toto">hello toto </div>

<pattern path="pages/hello/button"></pattern>

<br/>

### voici un script

_vous pouvez_:

- faire plein de choses
- en faire encore plus
- vous amuser

```js
const updateIframe = () => {
  const pattern = this.patterns[this.props.path]
  const iframe = this.refs.iframe
  const document = iframe.contentDocument
  const head = document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  const js = document.createElement('script')

  js.innerHTML = pattern.js
  head.appendChild(style)
  document.body.innerHTML = pattern.html
  document.body.style.margin = 0

  style.innerHTML = `
      ${this.iframeCSS()}
      ${pattern.css}
    `
  head.appendChild(js)

  setTimeout(() => {
    this.setState({
      iframeHeight: this.refs.iframe.contentDocument.body.offsetHeight,
    })
  }, 200)
}
```

```color
name: Smaragd
color: #939d7b
```

```color-palette
T400 - Shabby, #448c6c
T300 - Legendary, #dca114
T200 - Smoke, #6c3b0b
```

```download
color: white
image: true
span: 3
src: "/logo.png"
subtitle: 8KB
title: Avatar Social
width: 250px
```

```hint|directive
Make it so!
```

```hint
Neutral Hint
```

```hint|warning
nooooooooo, not this way
```

```typography
42|700|Display|42, line height is 1.1x|Bold, 700|Display type is used for visual impact and emphasis
32|400|Page title|32, line height is 1.1x|Normal, 400|Page title is used to provide hiearchy
```

```video
autoplay: false
loop: false
muted: false
name: Animation Video
src: "https://www.w3schools.com/html/mov_bbb.mp4"
span: 3
```
