<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g clip-path="url(#a)"><path d="M21.584 7.186a2.505 2.505 0 00-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.505 2.505 0 00-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.861.907 1.538 1.768 1.768 1.56.419 7.814.419 7.814.419s6.255 0 7.814-.419a2.505 2.505 0 001.768-1.768C22 15.255 22 12 22 12s0-3.255-.418-4.814h.002zM10 15V9l5.196 3L10 15z"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>