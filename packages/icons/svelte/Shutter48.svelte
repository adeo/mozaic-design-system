<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M4.5 6A1.5 1.5 0 0 1 6 4.5h36A1.5 1.5 0 0 1 43.5 6v7a1.5 1.5 0 0 1-1.5 1.5h-2.5V42a1.5 1.5 0 0 1-1.5 1.5H10A1.5 1.5 0 0 1 8.5 42V14.5H6A1.5 1.5 0 0 1 4.5 13V6Zm7 8.5h25V18h-25v-3.5Zm0 5.5v3h25v-3h-25Zm0 8v-3h25v3h-25Zm0 2v3h25v-3h-25ZM23 35H11.5v5.5H23V35Zm2 5.5V35h11.5v5.5H25Zm15.5-29h-33v-4h33v4Z"/>
</svg>
