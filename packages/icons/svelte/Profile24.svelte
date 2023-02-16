<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.5 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM12 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM8.5 14.064a1 1 0 0 0-.836-.076l-3 1.07A1 1 0 0 0 4 16v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 0-.664-.942l-3-1.07a1 1 0 0 0-.837.076A6.963 6.963 0 0 1 12 15c-1.277 0-2.47-.34-3.5-.936ZM6 20v-3.295l1.915-.683A8.966 8.966 0 0 0 12 17a8.966 8.966 0 0 0 4.085-.978l1.915.683V20H6Z"/>
</svg>
