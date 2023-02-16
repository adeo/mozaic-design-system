<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M8.333 4a1 1 0 0 1 1-1h13.334a1 1 0 0 1 1 1v10.667h-2v-5.5H16.5v5.5h-1v-5.5h-5.167v5.5h-2V4ZM16.5 8.167h5.167V5H16.5v3.167ZM15.5 5v3.167h-5.167V5H15.5ZM3 17.333a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2h-1.5V27H28a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1.5v-8.667H4a1 1 0 0 1-1-1Zm20.167 1H25.5V27h-2.333v-8.667Zm-1 8.667v-8.667h-2.334V27h2.334ZM16.5 18.333h2.333V27H16.5v-8.667ZM15.5 27v-8.667h-2.333V27H15.5Zm-5.667-8.667h2.334V27H9.833v-8.667Zm-1 8.667v-8.667H6.5V27h2.333ZM20 13.333h-2v1.334h2v-1.334Z"/>
</svg>
