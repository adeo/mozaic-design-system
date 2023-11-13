<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6 4a1 1 0 0 0-.707 1.707L5.586 6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3.06l.297-.324A1 1 0 0 0 17.5 4H6Zm10.107 4-3.37 3.676a1 1 0 0 1-1.444.031L7.586 8H4v10h4v-4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V18h4V8h-3.893Zm-7.4-1.707 3.262 3.261L15.227 6H8.414l.293.292v.001ZM9 14h2.5v4H9v-4Zm3.5 0v4H15v-4h-2.5Z"/>
</svg>
