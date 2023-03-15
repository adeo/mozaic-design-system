<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M32 6.5a1.5 1.5 0 0 1 1.06.44l13.334 13.333a1.5 1.5 0 1 1-2.121 2.121L33.5 11.621V56a1.5 1.5 0 0 1-3 0V11.621L19.727 22.394a1.5 1.5 0 1 1-2.121-2.121L30.939 6.939A1.5 1.5 0 0 1 32 6.5Z"/>
</svg>
