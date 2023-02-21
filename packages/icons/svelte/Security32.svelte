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
    <path fill-rule="evenodd" d="M11.667 9.333a4.333 4.333 0 1 1 8.666 0v3h-8.666v-3Zm-2 3v-3a6.333 6.333 0 0 1 12.666 0v3H24a1 1 0 0 1 1 1V28a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V13.333a1 1 0 0 1 1-1h1.667Zm1 2H9V27h14V14.333H10.667Zm4.777 6.864a.51.51 0 0 1 .016.192l-.235 2.111h1.55l-.235-2.111a.497.497 0 0 1 .016-.192.5.5 0 0 1 .218-.579A1.499 1.499 0 0 0 16 17.833a1.5 1.5 0 0 0-.774 2.785.5.5 0 0 1 .218.579Zm2.093.108a2.5 2.5 0 1 0-3.074 0l-.293 2.64a.5.5 0 0 0 .497.555h2.666a.5.5 0 0 0 .497-.555l-.293-2.64Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
