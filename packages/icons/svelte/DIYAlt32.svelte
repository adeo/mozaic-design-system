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
    <path fill-rule="evenodd" d="m19.687 9.06-2.273 2.274 3.253 3.252 2.272-2.273-3.252-3.252Zm.707-.706 3.252 3.252L25.252 10 22 6.748l-1.606 1.606Zm-9.687-3.728L16 9.92l5.293-5.293a1 1 0 0 1 1.414 0l4.667 4.667a1 1 0 0 1 0 1.414L22.08 16l5.293 5.293a1 1 0 0 1 0 1.414l-4.667 4.667a1 1 0 0 1-1.414 0L16 22.08l-2.626 2.626a1 1 0 0 1-.49.27l-6 1.333a1 1 0 0 1-1.194-1.193l1.334-6a1 1 0 0 1 .269-.49L9.919 16l-5.293-5.293a1 1 0 0 1 0-1.414l4.667-4.667a1 1 0 0 1 1.414 0Zm.626 12.788 3.253 3.253-1.94 1.94-3.252-3.253 1.94-1.94Zm-2.502 2.79-.847 3.812 3.811-.847-2.964-2.964ZM10 6.749 6.747 10l1.94 1.94.96-.96a.5.5 0 0 1 .707.707l-.96.96 1.96 1.96 1.626-1.627a.5.5 0 0 1 .707.707l-1.626 1.626 1.96 1.96.959-.96a.5.5 0 1 1 .707.707l-.96.96 1.96 1.96 1.626-1.627a.5.5 0 1 1 .707.707l-1.626 1.627 1.96 1.96.959-.96a.5.5 0 1 1 .707.707l-.96.96L22 25.252 25.252 22 10 6.748Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
