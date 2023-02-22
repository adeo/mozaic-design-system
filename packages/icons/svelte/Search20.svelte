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
    <path fill-rule="evenodd" d="M6.583 9.166a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Zm4.25-5.75a5.75 5.75 0 0 0-4.561 9.252l-2.636 2.635a.75.75 0 0 0 1.061 1.06l2.635-2.635a5.75 5.75 0 1 0 3.501-10.312Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
