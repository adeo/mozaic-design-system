<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M4.864 4.136a.75.75 0 0 0-1.061 1.06L6.606 8l-2.803 2.803a.75.75 0 0 0 1.06 1.06L8.198 8.53a.75.75 0 0 0 0-1.06L4.864 4.136Zm4 0a.75.75 0 0 0-1.061 1.06L10.606 8l-2.803 2.803a.75.75 0 0 0 1.06 1.06l3.334-3.333a.75.75 0 0 0 0-1.06L8.864 4.136Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="16" height="16" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
