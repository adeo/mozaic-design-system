<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M2.583 4.167a.75.75 0 0 1 .75-.75H12.5a.75.75 0 0 1 .75.75v.916h2.167a.75.75 0 0 1 .727.568l.692 2.765h.664a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-1.452a2.418 2.418 0 0 1-4.596 0h-2.07a2.418 2.418 0 0 1-4.597 0H3.333a.75.75 0 0 1-.75-.75V11.75h1.5v1.666h.702a2.418 2.418 0 0 1 4.596 0h2.071a2.418 2.418 0 0 1 4.596 0h.702v-3.5h-1.085l-.142-.568-.692-2.765h-1.58v2.583a.75.75 0 0 1-1.5 0V4.917H4.082v.833h-1.5V4.167Zm10.25 10a.917.917 0 1 0 1.834 0 .917.917 0 0 0-1.834 0Zm-5.75.916a.917.917 0 1 0 0-1.833.917.917 0 0 0 0 1.833Zm-5.416-8.5a.5.5 0 0 0 0 1h4.166a.5.5 0 0 0 0-1H1.667Zm2 2.167a.5.5 0 0 1 .5-.5h1.666a.5.5 0 1 1 0 1H4.167a.5.5 0 0 1-.5-.5Zm-.75 1.166a.5.5 0 0 0 0 1h2.916a.5.5 0 0 0 0-1H2.917Z"/>
</svg>
