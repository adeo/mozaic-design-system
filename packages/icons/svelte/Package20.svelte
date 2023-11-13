<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M9.632 1.846a.75.75 0 0 1 .736 0l6.666 3.75a.75.75 0 0 1 .383.654v7.5a.75.75 0 0 1-.383.654l-6.666 3.75a.75.75 0 0 1-.736 0l-6.666-3.75a.75.75 0 0 1-.383-.654v-7.5a.75.75 0 0 1 .383-.654l6.666-3.75ZM4.083 13.311V7.246L9.5 10.292v6.066l-5.417-3.047Zm11.834 0L10.5 16.358v-6.066l1.83-1.029v1.57a.75.75 0 0 0 1.5 0V8.42l2.087-1.174v6.065Zm-2.514-5.799 1.989-1.119L10 3.361 8.01 4.479l5.392 3.033ZM6.481 5.34 4.608 6.393 10 9.426l1.873-1.053L6.481 5.34Z"/>
</svg>
