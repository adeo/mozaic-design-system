<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M7.5 1.75a.75.75 0 0 0-.75.75v.833c0 .415.336.75.75.75h1.75v1H6.79A2.75 2.75 0 0 0 4.057 7.53l-.562 5.053H2.5a.75.75 0 0 0-.75.75V17.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-4.167a.75.75 0 0 0-.75-.75h-.995l-.562-5.053a2.75 2.75 0 0 0-2.733-2.447h-2.46v-1h1.75a.75.75 0 0 0 .75-.75V2.5a.75.75 0 0 0-.75-.75h-5Zm-.71 4.833h6.42a1.25 1.25 0 0 1 1.242 1.112l.543 4.888h-9.99l.543-4.888A1.25 1.25 0 0 1 6.79 6.583Zm-2.632 7.5H16.75v2.667H3.25v-2.667h.908Zm9.175-5.75V10H6.667V8.333h6.666Zm-5 6.584a.5.5 0 1 0 0 1h3.334a.5.5 0 0 0 0-1H8.333Z"/>
</svg>
