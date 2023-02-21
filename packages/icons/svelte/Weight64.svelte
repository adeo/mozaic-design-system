<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M24.167 17.333A7.833 7.833 0 1 1 37.888 22.5H26.112a7.798 7.798 0 0 1-1.945-5.167ZM25.47 25.5h-8.2l-4.834 29h39.126l-4.834-29H25.47Zm16.054-3a10.788 10.788 0 0 0 1.31-5.167C42.833 11.35 37.983 6.5 32 6.5s-10.833 4.85-10.833 10.833c0 1.87.474 3.631 1.31 5.167H16a1.5 1.5 0 0 0-1.48 1.253l-5.333 32a1.5 1.5 0 0 0 1.48 1.747h42.666a1.5 1.5 0 0 0 1.48-1.747l-5.333-32A1.5 1.5 0 0 0 48 22.5h-6.476Z"/>
</svg>
