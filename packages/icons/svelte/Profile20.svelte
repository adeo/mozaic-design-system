<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M7 6.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM7.042 11.792a.75.75 0 0 0-.627-.057l-2.5.892a.75.75 0 0 0-.498.706V17.5c0 .414.335.75.75.75h11.666a.75.75 0 0 0 .75-.75v-4.167c0-.317-.199-.6-.498-.706l-2.5-.892a.75.75 0 0 0-.627.057 5.886 5.886 0 0 1-2.958.791 5.886 5.886 0 0 1-2.958-.79ZM4.917 16.75v-2.888l1.685-.601a7.388 7.388 0 0 0 3.398.822c1.223 0 2.38-.296 3.398-.822l1.685.601v2.888H4.917Z"/>
</svg>
