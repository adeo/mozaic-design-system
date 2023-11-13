<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.514 2.126a1 1 0 0 1 .972 0l9 5a1 1 0 0 1 0 1.748l-1.998 1.11 2.008 1.148a1 1 0 0 1-.01 1.742l-1.998 1.11 2.008 1.148a1 1 0 0 1-.01 1.742l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.01-1.742l2.008-1.148-1.998-1.11a1 1 0 0 1-.01-1.742l2.008-1.148-1.998-1.11a1 1 0 0 1 0-1.748l9-5ZM6.556 15.12l-1.519.868L12 19.856l6.963-3.868-1.52-.868-4.957 2.754a1 1 0 0 1-.972 0L6.556 15.12Zm5.93-1.246 4.958-2.754 1.519.868L12 15.856l-6.963-3.868 1.52-.868 4.957 2.754a1 1 0 0 0 .972 0ZM5.059 8 12 11.856 18.94 8 12 4.144 5.06 8Z"/>
</svg>
