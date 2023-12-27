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
    <path fill-rule="evenodd" d="M7 3a4 4 0 0 0-4 4v17.667A4.333 4.333 0 0 0 7.333 29H28a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H11a4 4 0 0 0-4-4ZM5 7v14.015a4.313 4.313 0 0 1 2.333-.682A4.32 4.32 0 0 1 9 20.666V7a2 2 0 0 0-4 0Zm2.333 20a2.333 2.333 0 1 1 1.868-3.733 1 1 0 0 0 1.8-.6V9H27v18H7.333Zm11.611-14.083a.5.5 0 0 0-.555 0l-4 2.667a.5.5 0 0 0 .555.832l3.723-2.482 3.5 2.334v5.899h-.834a.5.5 0 1 0 0 1h1.334a.5.5 0 0 0 .5-.5V16a.5.5 0 0 0-.223-.416l-4-2.667Zm-3.777 5.416a.5.5 0 0 0-1 0v1.334a.5.5 0 1 0 1 0v-1.334Zm0 3.667a.5.5 0 0 0-1 0v.667a.5.5 0 0 0 .5.5h.666a.5.5 0 1 0 0-1h-.166V22Zm2.5.167a.5.5 0 1 0 0 1H19a.5.5 0 0 0 0-1h-1.333Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
