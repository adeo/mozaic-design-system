<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M4.523 3.673a.75.75 0 0 0-1.13 0L1.937 5.339a.75.75 0 0 0-.186.494v10c0 .414.336.75.75.75h2.917a.75.75 0 0 0 .75-.75v-2h1.625v2c0 .414.335.75.75.75h2.916a.75.75 0 0 0 .75-.75v-2h1.625v2c0 .414.336.75.75.75H17.5a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-.186-.494l-1.458-1.666a.75.75 0 0 0-1.129 0L14.02 5.339a.75.75 0 0 0-.186.494v2h-1.625v-2a.75.75 0 0 0-.185-.494l-1.459-1.666a.75.75 0 0 0-1.128 0l-1.46 1.666a.75.75 0 0 0-.185.494v2H6.167v-2a.75.75 0 0 0-.186-.494L4.523 3.673Zm1.644 5.16v1.5h1.625v-1.5H6.167Zm1.625 2.5H6.167v1.5h1.625v-1.5Zm4.416-2.5v1.5h1.625v-1.5h-1.625Zm1.625 2.5h-1.625v1.5h1.625v-1.5ZM3.25 15.083V6.115l.708-.81.709.81v8.968H3.25Zm6.042 0V6.115l.708-.81.708.81v8.968H9.292Zm6.041-8.968v8.968h1.417V6.115l-.708-.81-.709.81Z"/>
</svg>
