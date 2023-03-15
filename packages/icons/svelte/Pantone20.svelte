<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M1.017 6.208a.75.75 0 0 1 .275-1.024L7.065 1.85a.75.75 0 0 1 1.025.275l.745 1.292h4.498a.75.75 0 0 1 .75.75v.365l3.732 2.155a.75.75 0 0 1 .275 1.024l-3.388 5.867.054.094a.75.75 0 0 1-.274 1.024L8.708 18.03a.75.75 0 0 1-1.024-.275L1.017 6.208Zm11.566 3.7L9.701 4.917h2.882v4.991Zm-9.892-3.8 5.917 10.248 4.474-2.584L7.166 3.526 2.69 6.108Zm11.392.156v5.387l2.333-4.04-2.333-1.347ZM9.25 12.5a.333.333 0 1 1 .667 0 .333.333 0 0 1-.667 0Zm.333-1.333a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666Z"/>
</svg>
