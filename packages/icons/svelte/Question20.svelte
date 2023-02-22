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
    <path fill-rule="evenodd" d="M2.5 1.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75h4.25v1.75a.75.75 0 0 0 1.2.6l3.133-2.35H17.5a.75.75 0 0 0 .75-.75V2.5a.75.75 0 0 0-.75-.75h-15Zm.75 12.5v-11h13.5v11h-6.167l-.2.15L8.25 16v-1.75h-5Zm6.125-1.992a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0Zm.478-7.67L10 4.583a2.5 2.5 0 0 1 1.1 4.75.758.758 0 0 0-.475.675v.209a.625.625 0 0 1-1.25-.009V10a2.008 2.008 0 0 1 1.175-1.8 1.258 1.258 0 0 0-.438-2.358L10 5.833c-.69 0-1.25.56-1.25 1.25a.625.625 0 0 1-1.25 0 2.5 2.5 0 0 1 2.353-2.495Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
