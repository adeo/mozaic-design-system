<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 0 6.5 8v48A1.5 1.5 0 0 0 8 57.5h48a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 56 6.5H8Zm1.5 48v-45h45v45h-45Zm9-38.5v32h3V16h-3Zm12 16V16h3v16h-3Zm12-16v24h3V16h-3Z"/>
</svg>
