<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M10.5 11A2.5 2.5 0 0 1 13 8.5h22a2.5 2.5 0 0 1 2.5 2.5v26a2.5 2.5 0 0 1-2.5 2.5H13a2.5 2.5 0 0 1-2.5-2.5V11Zm3 .5V30h21V11.5h-21Zm0 25V32h21v4.5h-21ZM24 35a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
