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
    <path fill-rule="evenodd" d="M6 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3V3Zm10 1v1H8V4h8Zm1 3H4v10h2v-3a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2v3h2V7h-3ZM8 20h8v-6H8v6Zm8-11.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM9.5 16a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
