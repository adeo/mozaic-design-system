<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M6.5 8A1.5 1.5 0 0 1 8 6.5h48A1.5 1.5 0 0 1 57.5 8v9.333a1.5 1.5 0 0 1-1.5 1.5h-3.833V56a1.5 1.5 0 0 1-1.5 1.5H13.333a1.5 1.5 0 0 1-1.5-1.5V18.833H8a1.5 1.5 0 0 1-1.5-1.5V8Zm8.333 10.833h34.334v5.5H14.833v-5.5Zm0 7.5V31h34.334v-4.667H14.833Zm0 11.334V33h34.334v4.667H14.833Zm0 2v4.666h34.334v-4.666H14.833ZM31 46.333H14.833V54.5H31v-8.167Zm2 8.167v-8.167h16.167V54.5H33Zm21.5-38.667h-45V9.5h45v6.333Z"/>
</svg>
