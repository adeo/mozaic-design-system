<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M6.5 8A1.5 1.5 0 0 1 8 6.5h48A1.5 1.5 0 0 1 57.5 8v40a1.5 1.5 0 0 1-1.5 1.5H35.167L24.9 57.2a1.5 1.5 0 0 1-2.4-1.2v-6.5H8A1.5 1.5 0 0 1 6.5 48V8Zm3 1.5v37h16V53l8.267-6.2.4-.3H54.5v-37h-45Z"/>
</svg>
