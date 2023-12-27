<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 0 6.5 8v40A1.5 1.5 0 0 0 8 49.5h14.5V56a1.5 1.5 0 0 0 2.4 1.2l10.267-7.7H56a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 56 6.5H8Zm1.5 40v-37h45v37H34.167l-.4.3L25.5 53v-6.5h-16ZM30 39.227a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm1.53-24.547.47-.013a8 8 0 0 1 3.52 15.2 2.427 2.427 0 0 0-1.52 2.16v.666a2 2 0 0 1-4-.026V32a6.427 6.427 0 0 1 3.76-5.76 4.027 4.027 0 0 0-1.4-7.544l-.36-.03a4 4 0 0 0-4 4 2 2 0 1 1-4 0 8 8 0 0 1 7.53-7.986Z"/>
</svg>
