<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M12 4.5A1.5 1.5 0 0 0 10.5 6v36a1.5 1.5 0 0 0 1.5 1.5h24a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 36 4.5H12Zm1.5 36v-33h21v33h-21ZM17 10a1 1 0 0 0-1 1v8.8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H17Zm1 8.8V12h12v6.8H18ZM16 28a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V28Zm2 1v6.8h12V29H18Zm9-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"/>
</svg>
