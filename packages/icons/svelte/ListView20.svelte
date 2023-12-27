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
    <path fill-rule="evenodd" d="M2.917 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm3-1.25a.75.75 0 0 1 .75-.75H17.5a.75.75 0 0 1 0 1.5H6.667a.75.75 0 0 1-.75-.75Zm-3 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm3-1.25a.75.75 0 0 1 .75-.75H17.5a.75.75 0 0 1 0 1.5H6.667a.75.75 0 0 1-.75-.75Zm-3 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm3.75-2a.75.75 0 0 0 0 1.5H17.5a.75.75 0 0 0 0-1.5H6.667Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
