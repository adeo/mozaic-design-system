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
    <path fill-rule="evenodd" d="M5.788 7.464a6.415 6.415 0 0 1 9.442.404l.77.913.768-.913a6.415 6.415 0 1 1 9.443 8.668l-9.505 9.505a1 1 0 0 1-1.414 0l-9.504-9.505a6.415 6.415 0 0 1 0-9.072ZM13.7 9.156a4.415 4.415 0 1 0-6.5 5.966l8.8 8.797 8.798-8.797a4.415 4.415 0 1 0-6.5-5.966l-1.533 1.822-.765.908-.765-.908-1.533-1.822Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
