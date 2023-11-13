<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h17a1.5 1.5 0 0 1 .25 2.98V15a.75.75 0 0 1-.75.75h-7.25v2.287l4.585 2.292a.75.75 0 1 1-.67 1.342l-3.915-1.957v.786a.75.75 0 0 1-1.5 0v-.787l-3.915 1.958a.75.75 0 1 1-.67-1.342l4.585-2.293V15.75H4a.75.75 0 0 1-.75-.75V4.98A1.5 1.5 0 0 1 2 3.5Zm10 10.75h7.25V5H4.75v9.25H12ZM3.5 3a.5.5 0 0 0 0 1h17a.5.5 0 0 0 0-1h-17Zm7.777 4.084a.5.5 0 0 0-.777.416v4a.5.5 0 0 0 .777.416l3-2a.5.5 0 0 0 0-.832l-3-2ZM13.1 9.5l-1.6 1.066V8.434L13.099 9.5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
