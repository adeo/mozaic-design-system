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
    <path fill-rule="evenodd" d="M9.5 6.5A2.5 2.5 0 1 1 14 8h-4a2.486 2.486 0 0 1-.5-1.5Zm.05 3.5H6.847L5.18 20h13.64l-1.667-10H9.55Zm6.694-2a4.5 4.5 0 1 0-8.487 0H6a1 1 0 0 0-.986.836l-2 12A1 1 0 0 0 4 22h16a1 1 0 0 0 .986-1.164l-2-12A1 1 0 0 0 18 8h-1.756Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
