<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M2.5 1.75a.75.75 0 0 0-.75.75v2.917c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V2.5a.75.75 0 0 0-.75-.75h-15Zm0 6.042a.75.75 0 0 0-.75.75v2.916c0 .415.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.542a.75.75 0 0 0-.75-.75h-15Zm0 6.041a.75.75 0 0 0-.75.75V17.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-2.917a.75.75 0 0 0-.75-.75h-15Z"/>
</svg>
