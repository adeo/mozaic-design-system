<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M10 4.5A1.5 1.5 0 0 0 8.5 6v36a1.5 1.5 0 0 0 1.5 1.5h28a1.5 1.5 0 0 0 1.5-1.5V16a1.5 1.5 0 0 0-.44-1.06l-10-10A1.5 1.5 0 0 0 28 4.5H10Zm1.5 36v-33h15V16a1.5 1.5 0 0 0 1.5 1.5h8.5v23h-25Zm22.879-26L29.5 9.621V14.5h4.879Z"/>
</svg>
