<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M6.667 15.666h-.002c-.74 0-1.106.287-1.32.585A1.985 1.985 0 0 0 5 17.333v2.833h22v-2.833c0-.74-.286-1.107-.584-1.322a1.983 1.983 0 0 0-1.083-.345H6.667ZM5 23v-1.834h22V23H5Zm19.333-9.334V8.458c-1.007-.76-3.752-2.125-8.333-2.125S8.674 7.697 7.667 8.458v5.208h1.166v-3a.5.5 0 0 1 .5-.5h5.334a.5.5 0 0 1 .5.5v3h1.666v-3a.5.5 0 0 1 .5-.5h5.334a.5.5 0 0 1 .5.5v3h1.166Zm-2.166 0v-2.5h-4.334v2.5h4.334Zm-8 0v-2.5H9.833v2.5h4.334ZM5.96 7.293c1.124-1.124 4.517-2.96 10.04-2.96 5.523 0 8.916 1.836 10.04 2.96a1 1 0 0 1 .293.707v5.803c.412.11.849.295 1.251.585.813.585 1.416 1.552 1.416 2.945v5.668A2 2 0 0 1 27 25h-.5v1.666a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V25h-11v1.666a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V25H5a2 2 0 0 1-2-2v-5.667c0-.604.173-1.489.722-2.251a3.322 3.322 0 0 1 1.945-1.3V8a1 1 0 0 1 .293-.707ZM22.5 25v1.166h3V25h-3Zm-16 0h3v1.166h-3V25Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
