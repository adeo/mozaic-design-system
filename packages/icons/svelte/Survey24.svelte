<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3Zm2 1v16h12V4H6Zm6 9.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-6a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 6 0c0 .685-.177 1.235-.495 1.686-.28.397-.64.666-.874.84l-.031.024c-.269.201-.388.3-.47.417-.057.08-.13.218-.13.533a1 1 0 1 1-2 0c0-.685.177-1.235.495-1.686.28-.397.64-.666.874-.84l.031-.024c.269-.202.388-.3.47-.417.057-.08.13-.218.13-.533a1 1 0 0 0-1-1ZM10 18a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
</svg>
