<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.614 2.21a1 1 0 0 0-1.228 0l-9 7a1 1 0 1 0 1.228 1.58l.386-.3V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10.49l.386.3a1 1 0 0 0 1.228-1.58l-9-7ZM18 8.935l-6-4.667-6 4.667V20h12V8.934ZM12 9.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 4.344 2.683A5.002 5.002 0 0 1 17 18h-2a3 3 0 1 0-6 0H7a5.002 5.002 0 0 1 3.656-4.817A3 3 0 0 1 9 10.5Z"/>
</svg>
