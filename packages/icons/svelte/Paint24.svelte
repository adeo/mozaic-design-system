<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.5h1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.397.49l-8.706 1.832a.5.5 0 0 0-.397.49v.688h1a1 1 0 0 1 .97 1.242l-.215.862.244 6.358A1 1 0 0 1 13.5 22h-3a1 1 0 0 1-1-1.038l.245-6.358-.215-.861a1 1 0 0 1 .97-1.243h1v-.689a1.5 1.5 0 0 1 1.191-1.467L21 8.594V5.5h-1V6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm12.293 0h-2.586l-2 2h2.586l2-2ZM9.707 4h2.586l-2 2H7.707l2-2ZM8.293 4H6v2h.293l2-2Zm9.414 0-2 2H18V4h-.293Z"/>
</svg>
