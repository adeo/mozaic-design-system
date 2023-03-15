<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M5 16C5 9.925 9.925 5 16 5s11 4.925 11 11-4.925 11-11 11S5 22.075 5 16ZM16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3Zm.906 4.577a1 1 0 0 0-1.812 0l-2.12 4.542-4.503.9a1 1 0 0 0-.438 1.755l3.214 2.629-.899 5.09a1 1 0 0 0 1.566.987L16 20.562l4.085 2.918a1 1 0 0 0 1.566-.987l-.898-5.09 3.213-2.629a1 1 0 0 0-.437-1.755l-4.503-.9-2.12-4.542Zm-2.333 5.846L16 10.365l1.427 3.058.214.458.496.1 2.926.585-2.03 1.66-.453.371.102.577.575 3.257-2.676-1.911-.581-.416-.581.416-2.676 1.91.575-3.256.102-.577-.454-.371-2.029-1.66 2.926-.585.496-.1.214-.458Z"/>
</svg>
