<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M28.86 8.156a1 1 0 0 1-.072 1.127l-12 15.333a1 1 0 0 1-1.475.11l-2.455-2.318-3.637 2.424a1 1 0 0 1-1.55-.742l-.655-7.2-3.703-3.496a1 1 0 0 1 .523-1.714l24-4a1 1 0 0 1 1.024.476ZM9.213 18.966l2.153 2.033-1.855 1.236-.298-3.27Zm1.238-1.582 5.438 5.135 9.063-11.58-14.501 6.445Zm13.263-6.99L9.664 16.64 6.15 13.322l17.564-2.927Z"/>
</svg>
