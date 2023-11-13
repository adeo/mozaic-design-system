<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M5.667 4a1 1 0 0 1 1-1h18.666a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1H6.667a1 1 0 0 1-1-1V4Zm2 1v22h16.666V5H7.667ZM16 18.167a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333Zm0-8.5c-.92 0-1.667.746-1.667 1.666a1 1 0 1 1-2 0 3.667 3.667 0 0 1 7.334 0c0 .852-.22 1.517-.6 2.056-.342.485-.785.817-1.098 1.051l-.036.027c-.352.264-.555.425-.7.63-.119.17-.233.421-.233.903a1 1 0 1 1-2 0c0-.852.219-1.516.6-2.056.342-.485.785-.816 1.098-1.051l.035-.026c.352-.264.555-.426.7-.631.12-.169.234-.421.234-.903 0-.92-.746-1.666-1.667-1.666ZM13.5 24a.5.5 0 0 1 .5-.5h6.667a.5.5 0 1 1 0 1H14a.5.5 0 0 1-.5-.5Zm-2.167.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"/>
</svg>
