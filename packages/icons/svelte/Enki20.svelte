<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M10.515 6.121a.75.75 0 0 0-1.03 0l-7.5 7.084A.75.75 0 0 0 2.5 14.5h15a.75.75 0 0 0 .515-1.295l-7.5-7.084ZM5.808 13h8.384L10 11.37 5.808 13Zm8.87-.884L10.5 8.17v2.321l4.178 1.625ZM9.5 8.17l-4.177 3.946L9.5 10.49V8.17Z"/>
</svg>
