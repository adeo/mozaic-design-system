<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M3.529 4.577a4.134 4.134 0 0 1 6.086.26l.385.457.384-.457a4.134 4.134 0 1 1 6.086 5.586l-5.94 5.94a.75.75 0 0 1-1.06 0l-5.941-5.94a4.134 4.134 0 0 1 0-5.846Zm4.938 1.226a2.634 2.634 0 1 0-3.877 3.56l5.41 5.41 5.41-5.41a2.634 2.634 0 1 0-3.878-3.56l-.959 1.138-.573.682-.574-.682-.959-1.138Z"/>
</svg>
