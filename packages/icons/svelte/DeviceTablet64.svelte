<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M14.5 14.334a2.5 2.5 0 0 1 2.5-2.5h30a2.5 2.5 0 0 1 2.5 2.5v35.333a2.5 2.5 0 0 1-2.5 2.5H17a2.5 2.5 0 0 1-2.5-2.5V14.333Zm3 .5v25.5h29v-25.5h-29Zm0 34.333v-6.834h29v6.834h-29Zm14.5-2.5A1.333 1.333 0 1 0 32 44a1.333 1.333 0 0 0 0 2.667Z"/>
</svg>
