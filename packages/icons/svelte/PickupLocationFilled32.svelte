<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M16.708 28.707 16.001 28l-.679.735v-.001l-.002-.001-.005-.006-.02-.018a55.538 55.538 0 0 1-1.37-1.34 59.776 59.776 0 0 1-3.105-3.39c-1.144-1.357-2.326-2.9-3.269-4.462-.933-1.544-1.683-3.187-1.876-4.726C4.941 8.918 9.343 3 16.001 3c3.355 0 6.126 1.681 7.947 3.959 1.81 2.26 2.755 5.198 2.376 7.85-.197 1.378-.956 2.94-1.878 4.435-.939 1.52-2.115 3.08-3.255 4.473a75.88 75.88 0 0 1-4.38 4.886l-.076.076-.02.02-.005.006-.001.001ZM16.001 28l.707.707a1 1 0 0 1-1.385.028L16 28Zm3.332-17.147-5.658-3.234L16 6.29l5.659 3.234-2.326 1.329Zm.248 1.01 2.586-1.478v6.468L16.5 20.09v-6.468l3.081-1.76Zm-4.081 1.76v6.468l-5.667-3.238v-6.468l5.667 3.238Zm.5-.866-5.659-3.233 2.326-1.33 5.659 3.234L16 12.758Z"/>
</svg>
