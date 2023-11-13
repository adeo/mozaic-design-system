<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h2a1 1 0 0 1 .962.725L6.612 7H20a1 1 0 0 1 .928 1.371l-3 7.5A1 1 0 0 1 17 16.5H8a1 1 0 0 1-.962-.725l-2.142-7.5L4.246 6H3a1 1 0 0 1-1-1Zm5.183 4 1.571 5.5h7.569l2.2-5.5H7.183ZM9.5 19.5a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5Zm-2.25.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm8.25 0a.25.25 0 1 1 .5 0 .25.25 0 0 1-.5 0Zm.25-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
