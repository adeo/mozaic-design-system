<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.928 2.629a1 1 0 0 0-1.124-.61l-5 1A1 1 0 0 0 2 4c0 4.351 2.426 8.84 5.793 12.207C11.159 19.574 15.649 22 20 22a1 1 0 0 0 .98-.804l1-5a1 1 0 0 0-.609-1.124l-5-2a1 1 0 0 0-1.078.221l-1.116 1.116A21.188 21.188 0 0 1 9.59 9.824l1.116-1.117a1 1 0 0 0 .221-1.078l-2-5Zm-.767 8.624-1.07 1.07c.63.865 1.34 1.694 2.116 2.47a21.02 21.02 0 0 0 2.47 2.117l1.07-1.07a23.222 23.222 0 0 1-4.586-4.587Zm11.026 8.714c-1.918-.156-3.908-.85-5.798-1.941l2.852-2.852 3.615 1.446-.67 3.347ZM8.827 7.759l-2.853 2.852c-1.09-1.89-1.785-3.88-1.94-5.798l3.346-.67L8.827 7.76Z"/>
</svg>
