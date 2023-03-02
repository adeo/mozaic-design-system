<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5 16C5 9.925 9.925 5 16 5c2.387 0 4.28.927 5.586 2.398 1.317 1.482 2.08 3.57 2.08 5.935 0 2.45-.757 4.151-1.997 5.253-1.259 1.119-3.156 1.747-5.669 1.747a4.333 4.333 0 010-8.666A1.667 1.667 0 1116 15a1 1 0 100 2 3.667 3.667 0 000-7.333 6.333 6.333 0 000 12.666h11V27H16C9.925 27 5 22.075 5 16zm18.081-9.93C21.387 4.163 18.947 3 16 3 8.82 3 3 8.82 3 16s5.82 13 13 13h12a1 1 0 001-1v-6.667a1 1 0 00-1-1h-5.302a7.42 7.42 0 00.3-.252c1.76-1.565 2.669-3.865 2.669-6.748 0-2.789-.903-5.368-2.586-7.263z"/></svg>