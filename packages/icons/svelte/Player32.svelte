<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M5 16C5 9.925 9.925 5 16 5s11 4.925 11 11-4.925 11-11 11S5 22.075 5 16ZM16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3Zm-2.476 6.815a1 1 0 0 0-1.524.852v10.666a1 1 0 0 0 1.524.852l8.667-5.333a1 1 0 0 0 0-1.704l-8.667-5.333ZM19.76 16 14 19.544v-7.088L19.759 16Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
