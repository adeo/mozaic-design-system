<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M24 4.5A1.5 1.5 0 0 1 25.5 6v32.379l7.44-7.44a1.5 1.5 0 0 1 2.12 2.122l-10 10a1.5 1.5 0 0 1-2.12 0l-10-10a1.5 1.5 0 0 1 2.12-2.122l7.44 7.44V6A1.5 1.5 0 0 1 24 4.5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
