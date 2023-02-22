<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M10 6.267c0-.721.23-1.29.568-1.665C10.898 4.236 11.375 4 12 4c.625 0 1.102.236 1.432.602.338.376.568.944.568 1.665V7h-4v-.733ZM8 7v-.733c0-1.146.37-2.212 1.082-3.003C9.802 2.464 10.825 2 12 2s2.198.464 2.918 1.264C15.63 4.055 16 5.121 16 6.267V7h2a1 1 0 0 1 .997.923l1 13A1 1 0 0 1 19 22H5a1 1 0 0 1-.997-1.077l1-13A1 1 0 0 1 6 7h2Zm8 2h1.074l.846 11H6.08l.846-11H8v1h1-1a1 1 0 1 0 2 0H9h1V9h4v1h1-1a1 1 0 1 0 2 0h-1 1V9Z"/>
</svg>
