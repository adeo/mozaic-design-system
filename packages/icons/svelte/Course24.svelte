<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.532 4.116a1 1 0 0 1 .936 0l8.5 4.5a1 1 0 0 1 .032 1.75v6.72a1.5 1.5 0 1 1-1 0v-6.19l-1 .53V16.5a1 1 0 0 1-.22.625C17.949 18.165 15.54 20 12 20s-5.949-1.835-6.78-2.875A1 1 0 0 1 5 16.5v-5.074l-1.968-1.042a1 1 0 0 1 0-1.768l8.5-4.5ZM7 12.484v3.631C7.711 16.82 9.46 18 12 18s4.289-1.181 5-1.885v-3.63l-4.532 2.399a1 1 0 0 1-.936 0L7 12.484ZM5.637 9.5 12 12.868 18.363 9.5 12 6.131 5.637 9.5ZM12 10c.552 0 1-.224 1-.5s-.448-.5-1-.5-1 .224-1 .5.448.5 1 .5Z"/>
</svg>
