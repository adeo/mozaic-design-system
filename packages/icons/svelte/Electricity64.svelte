<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 0 6.5 8v48A1.5 1.5 0 0 0 8 57.5h48a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 56 6.5H8Zm1.5 48v-45h45v45h-45ZM17 32c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15Zm15-17c-9.389 0-17 7.611-17 17s7.611 17 17 17 17-7.611 17-17-7.611-17-17-17Zm-4 17a2.667 2.667 0 1 1-5.333 0A2.667 2.667 0 0 1 28 32Zm10.667 2.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"/>
</svg>
