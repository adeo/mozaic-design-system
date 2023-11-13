<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M30.94 6.94a1.5 1.5 0 0 1 2.12 0l18.666 18.665.002.002 5.333 5.332a1.5 1.5 0 0 1-2.122 2.122l-2.772-2.773V54.5H56a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3h3.833V30.288l-2.772 2.773a1.5 1.5 0 0 1-2.122-2.122l24-24ZM49.166 54.5V27.288L32 10.121 14.712 27.41c.078.181.121.381.121.591v26.5H19V30.667a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1V54.5h4.167ZM29 22.667a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm11 14v6H21v-6h22Zm0 14v-6H21v6h22Zm0 2V54.5H21v-6.833h22Z"/>
</svg>
