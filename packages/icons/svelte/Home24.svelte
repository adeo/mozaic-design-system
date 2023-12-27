<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.386 2.21a1 1 0 0 1 1.228 0l9 7a1 1 0 0 1-1.228 1.58L20 10.488V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10.49l-.386.3a1 1 0 0 1-1.228-1.58l9-7ZM12 4.268l6 4.666V20h-3.5v-6a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v6H6V8.934l6-4.667ZM10.5 20h3v-5.5h-3V20Z"/>
</svg>
