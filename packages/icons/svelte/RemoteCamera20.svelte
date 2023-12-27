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
    <path fill-rule="evenodd" d="M2.5 4.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75h-15Zm.75 10v-8.5h13.5v8.5h-2.735a4.088 4.088 0 0 0-3.152-3.242 2.418 2.418 0 1 0-1.726 0 4.088 4.088 0 0 0-3.152 3.242H3.25Zm4.277 0h4.946a2.584 2.584 0 0 0-4.946 0ZM10 7.833a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
