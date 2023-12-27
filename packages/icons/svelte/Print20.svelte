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
    <path fill-rule="evenodd" d="M5.083 2.5a.75.75 0 0 1 .75-.75h8.334a.75.75 0 0 1 .75.75v1.75H17.5a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75h-2.583v1.75a.75.75 0 0 1-.75.75H5.833a.75.75 0 0 1-.75-.75v-1.75H2.5a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 .75-.75h2.583V2.5Zm8.334.75v1H6.583v-1h6.834Zm.75 2.5H3.25v8.5h1.833v-2.667H5a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5h-.083v2.667h1.833v-8.5h-2.583ZM6.583 15v1.75h6.834v-5.167H6.583V15Zm6.75-8a.5.5 0 0 0 0 1H15a.5.5 0 0 0 0-1h-1.667Zm-5.5 6.333a.5.5 0 0 1 .5-.5h3.334a.5.5 0 0 1 0 1H8.333a.5.5 0 0 1-.5-.5Zm.5 1.167a.5.5 0 0 0 0 1h3.334a.5.5 0 0 0 0-1H8.333Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
