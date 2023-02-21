<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M10.681 1.77a.75.75 0 0 0-1.362 0L6.99 6.814l-5.43.776a.75.75 0 0 0-.368 1.323l4.201 3.438-1.53 5.359a.75.75 0 0 0 1.113.845L10 15.464l5.024 3.092a.75.75 0 0 0 1.114-.845l-1.531-5.36 4.201-3.437a.75.75 0 0 0-.369-1.323l-5.429-.776-2.329-5.046Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
