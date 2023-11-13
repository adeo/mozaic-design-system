<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M4 7a3 3 0 0 1 3-3h34a3 3 0 0 1 .5 5.959V30a1.5 1.5 0 0 1-1.5 1.5H25.5v4.573l9.17 4.585a1.5 1.5 0 1 1-1.34 2.684l-7.83-3.915V41a1.5 1.5 0 0 1-3 0v-1.573l-7.83 3.915a1.5 1.5 0 1 1-1.34-2.684l9.17-4.585V31.5H8A1.5 1.5 0 0 1 6.5 30V9.959A3 3 0 0 1 4 7Zm20 21.5h14.5V10h-29v18.5H24ZM7 6a1 1 0 0 0 0 2h34a1 1 0 1 0 0-2H7Zm15.555 8.168A1 1 0 0 0 21 15v8a1 1 0 0 0 1.555.832l6-4a1 1 0 0 0 0-1.664l-6-4ZM26.197 19 23 21.131V16.87L26.197 19Z"/>
</svg>
