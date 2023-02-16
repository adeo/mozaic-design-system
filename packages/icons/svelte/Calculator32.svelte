<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M5.667 7.667a2 2 0 0 1 2-2h16.666a2 2 0 0 1 2 2v16.667a2 2 0 0 1-2 2H7.667a2 2 0 0 1-2-2V7.667Zm18.666 0H7.667v16.667h16.666V7.667ZM10.313 17.98a.5.5 0 0 1 .707 0l.98.98.98-.98a.5.5 0 1 1 .707.707l-.98.98.98.98a.5.5 0 1 1-.707.707l-.98-.98-.98.98a.5.5 0 0 1-.707-.707l.98-.98-.98-.98a.5.5 0 0 1 0-.707Zm.02-6.146a.5.5 0 1 0 0 1h3.334a.5.5 0 1 0 0-1h-3.334Zm7.167.5a.5.5 0 0 1 .5-.5h1.5v-1.5a.5.5 0 1 1 1 0v1.5H22a.5.5 0 1 1 0 1h-1.5v1.5a.5.5 0 0 1-1 0v-1.5H18a.5.5 0 0 1-.5-.5Zm.833 6.833a.5.5 0 0 0 0 1h3.334a.5.5 0 1 0 0-1h-3.334ZM20 18.334A.667.667 0 1 0 20 17a.667.667 0 0 0 0 1.334Zm.667 3.333a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"/>
</svg>
