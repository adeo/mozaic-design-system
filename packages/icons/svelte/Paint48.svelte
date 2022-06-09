<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35 8.5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2h24a2 2 0 002-2v-2.5h3v7.55a1.49 1.49 0 01-1.2 1.47l-14.7 3A4.5 4.5 0 0018.5 28v4H18a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2v-8a2 2 0 00-2-2h-.5v-4a1.49 1.49 0 011.2-1.47l14.71-3A4.5 4.5 0 0041 19.05V10.5a2 2 0 00-2-2zM32 13H10V7h22zM21 41h-2v-6h2z"/></svg>