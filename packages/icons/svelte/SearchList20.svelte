<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M2.5 2.583a.75.75 0 1 0 0 1.5h11.667a.75.75 0 0 0 0-1.5H2.5Zm9.167 5.667a3.417 3.417 0 1 0 0 6.833 3.417 3.417 0 0 0 0-6.833ZM6.75 11.667a4.917 4.917 0 1 1 8.883 2.906l2.397 2.397a.75.75 0 0 1-1.06 1.06l-2.397-2.397a4.917 4.917 0 0 1-7.822-3.966Zm-5-4.167a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1-.75-.75Zm.75 3.417a.75.75 0 0 0 0 1.5h2.083a.75.75 0 0 0 0-1.5H2.5Z"/>
</svg>
