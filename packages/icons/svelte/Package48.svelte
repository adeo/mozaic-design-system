<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M23.265 4.693a1.5 1.5 0 0 1 1.47 0l16 9A1.5 1.5 0 0 1 41.5 15v18a1.5 1.5 0 0 1-.765 1.307l-16 9a1.5 1.5 0 0 1-1.47 0l-16-9A1.5 1.5 0 0 1 6.5 33V15a1.5 1.5 0 0 1 .765-1.307l16-9ZM9.5 32.123V16.99L23 24.585v15.132L9.5 32.123Zm29 0L25 39.717V24.585l4.891-2.751V26a1.5 1.5 0 0 0 3 0v-5.854l5.609-3.155v15.132Zm-6.434-13.807 5.384-3.03L24 7.722l-5.385 3.029 13.45 7.566Zm-16.51-5.845-5.006 2.816L24 22.853l5.006-2.816-13.45-7.566Z"/>
</svg>
