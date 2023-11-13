<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.5 2.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v6.75h3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75V10a.75.75 0 0 1 .75-.75h3V2.5ZM7 9.25h6v-6H7v6Zm9.75 1.5h-6v6h6v-6Zm-7.5 0h-6v6h6v-6Zm.3-6.386L7.887 7.693a.5.5 0 1 0 .895.447l.486-.973h1.466l.486.973a.5.5 0 1 0 .895-.447L10.45 4.364a.5.5 0 0 0-.898 0ZM10 5.701l.233.466h-.466L10 5.7Zm3 8.049a1.167 1.167 0 0 1 1.938-.875.5.5 0 0 0 .662-.75 2.167 2.167 0 1 0 0 3.25.5.5 0 0 0-.662-.75A1.167 1.167 0 0 1 13 13.75Zm-8.083-1.667a.5.5 0 0 1 .5-.5h.833a1.333 1.333 0 0 1 1.198 1.92 1.333 1.333 0 0 1-.781 2.414h-1.25a.5.5 0 0 1-.5-.5v-3.334Zm1 2.834h.75a.333.333 0 0 0 0-.667h-.75v.667Zm.333-2.334h-.333v.667h.333a.333.333 0 1 0 0-.667Z"/>
</svg>
