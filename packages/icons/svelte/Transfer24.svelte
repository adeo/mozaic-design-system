<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.208 2.292a1 1 0 10-1.415 1.414L18.586 6.5H5a1 1 0 000 2h13.586l-2.793 2.793a1 1 0 101.415 1.414l4.5-4.5a1 1 0 000-1.414l-4.5-4.5zm-9 10.414a1 1 0 10-1.414-1.414l-4.5 4.5a1 1 0 000 1.414l4.5 4.5a1 1 0 101.414-1.414l-2.793-2.793h13.586a1 1 0 100-2H5.415l2.793-2.793z"/></svg>