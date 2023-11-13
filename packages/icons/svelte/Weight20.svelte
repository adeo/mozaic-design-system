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
    <path fill-rule="evenodd" d="M7.833 5.417a2.167 2.167 0 1 1 3.875 1.333H8.292a2.155 2.155 0 0 1-.459-1.333ZM7.96 8.25H5.634l-1.416 8.5H15.78l-1.416-8.5H7.959Zm5.457-1.5a3.667 3.667 0 1 0-6.833 0H5a.75.75 0 0 0-.74.627l-1.667 10a.75.75 0 0 0 .74.873h13.334a.75.75 0 0 0 .74-.873l-1.667-10A.75.75 0 0 0 15 6.75h-1.584Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
