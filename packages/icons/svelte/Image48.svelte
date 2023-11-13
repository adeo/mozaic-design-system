<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M6 4.5A1.5 1.5 0 0 0 4.5 6v36A1.5 1.5 0 0 0 6 43.5h36a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 42 4.5H6ZM7.5 31V7.5h33V31h-5.882l-5.724-11.447a1 1 0 0 0-1.788 0L25 23.763l-4.106-8.21a1 1 0 0 0-1.788 0L11.382 31H7.5Zm26.522 2a.97.97 0 0 1-.042 0H12.02a.97.97 0 0 1-.042 0H7.5v7.5h33V33h-6.478ZM28 22.236 32.382 31H13.618L20 18.236l4.106 8.211a1 1 0 0 0 1.788 0L28 22.237ZM28 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
</svg>
