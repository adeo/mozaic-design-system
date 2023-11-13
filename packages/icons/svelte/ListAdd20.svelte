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
    <path fill-rule="evenodd" d="M14.583 1.583a3.833 3.833 0 1 0 0 7.667 3.833 3.833 0 0 0 0-7.667Zm.5 2.584a.5.5 0 1 0-1 0v.75h-.75a.5.5 0 0 0 0 1h.75v.75a.5.5 0 0 0 1 0v-.75h.75a.5.5 0 1 0 0-1h-.75v-.75Zm-11.666 0a.75.75 0 0 1 .75-.75H8.75a.75.75 0 0 1 0 1.5H4.917v10.166h10.166V11.25a.75.75 0 0 1 1.5 0v4.583a.75.75 0 0 1-.75.75H4.167a.75.75 0 0 1-.75-.75V4.167ZM9.5 10a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5Zm.5-3a.5.5 0 1 0 0 1h.208a.5.5 0 1 0 0-1H10Zm-.5 5.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5Zm-2-4.167a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM8.333 10a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0ZM7.5 13.333a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
