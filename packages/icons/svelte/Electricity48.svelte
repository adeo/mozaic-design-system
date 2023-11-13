<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M6 4.5A1.5 1.5 0 0 0 4.5 6v36A1.5 1.5 0 0 0 6 43.5h36a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 42 4.5H6Zm1.5 36v-33h33v33h-33ZM13 24c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Zm11-13c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13Zm-3 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg>
