<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6 10h.5V8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2h1V8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2h.5V6.47C17.225 5.93 15.255 5 12 5c-3.254 0-5.225.93-6 1.47V10Zm-1 2c-.474 0-.674.175-.788.334-.152.21-.212.493-.212.666v2h16v-2c0-.474-.175-.674-.334-.789A1.239 1.239 0 0 0 19 12H5Zm-1 5v-1h16v1H4Zm12.5-7V8.5h-3V10h3Zm-6 0V8.5h-3V10h3ZM4.293 5.293C5.195 4.39 7.81 3 12 3c4.19 0 6.805 1.391 7.707 2.293A1 1 0 0 1 20 6v4.166c.279.093.565.229.834.422C21.51 11.075 22 11.874 22 13v4a2 2 0 0 1-2 2v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1H8v1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 4 20v-1a2 2 0 0 1-2-2v-4c0-.493.14-1.211.588-1.834A2.73 2.73 0 0 1 4 10.146V6a1 1 0 0 1 .293-.707ZM17 19v.5h2V19h-2Zm-12 .5V19h2v.5H5Z"/>
</svg>
