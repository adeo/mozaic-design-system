<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    
  <path fill="#006902" fill-rule="evenodd" d="M12 2a8 8 0 0 0-8 8c0 4.16 6.54 10.94 7.29 11.7a1 1 0 0 0 1.42 0C13.46 20.94 20 14.16 20 10a8 8 0 0 0-8-8Z"/>
  <path fill="#fff" d="m14.35 8.01 1.25-.84-3.6-2.4-1.3.87 3.65 2.37Zm-2.85 2.37v4.12L8 12.22V8.1l3.5 2.28Zm4.5 1.84-3.5 2.28v-4.12L16 8.1v4.12ZM8.4 7.17l1.39-.92 3.65 2.36-1.44.96-3.6-2.4Z"/>
</svg>
