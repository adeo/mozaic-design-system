<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M12.5 6A1.5 1.5 0 0 1 14 4.5h20A1.5 1.5 0 0 1 35.5 6v16h-3v-8H25v8h-2v-8h-7.5v8h-3V6ZM25 12h7.5V7.5H25V12Zm-2-4.5V12h-7.5V7.5H23ZM4.5 26A1.5 1.5 0 0 1 6 24.5h36a1.5 1.5 0 0 1 0 3h-2v13h2a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3h2v-13H6A1.5 1.5 0 0 1 4.5 26ZM35 27.5h3v13h-3v-13Zm-2 13v-13h-3v13h3Zm-8-13h3v13h-3v-13Zm-2 13v-13h-3v13h3Zm-8-13h3v13h-3v-13Zm-2 13v-13h-3v13h3ZM30 20h-3v2h3v-2Z"/>
</svg>
