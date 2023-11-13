<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M8.535 5.667a2 2 0 0 0-1.664.89l-3.283 4.925c-.084.126-.153.26-.205.398a.998.998 0 0 0 .1 1.642c.068.13.152.255.25.37l10.748 12.54a2 2 0 0 0 3.037 0l10.748-12.54c.099-.115.183-.24.251-.37a1 1 0 0 0 .1-1.643 1.998 1.998 0 0 0-.206-.397L25.13 6.557a2 2 0 0 0-1.665-.89H8.536Zm17.596 6-2.666-4h-3.14l1.778 4h4.028Zm-5.123 0H10.992l1.777-4h6.462l1.777 4Zm.02 2-4.799 11.196-.229.267-.23-.267-4.797-11.196h10.054Zm-2.623 8.657 3.71-8.657h3.71l-7.42 8.657ZM9.897 11.667l1.778-4h-3.14l-2.666 4h4.028Zm-3.723 2h3.71l3.711 8.657-7.42-8.657Z"/>
</svg>
