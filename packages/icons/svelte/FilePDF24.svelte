<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h9a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3Zm2 1v16h12V9h-4a1 1 0 0 1-1-1V4H6Zm9 1.414L16.586 7H15V5.414Zm-5.995 9.412H7.947v3.228h.685v-1.09h.355c.225 0 .427-.041.603-.126a.978.978 0 0 0 .412-.38 1.11 1.11 0 0 0 .147-.578c0-.215-.048-.403-.147-.562a.909.909 0 0 0-.404-.365 1.331 1.331 0 0 0-.593-.127Zm2.858 0H10.79v3.228h1.072c.44 0 .798-.133 1.07-.402.277-.27.41-.679.41-1.214 0-.539-.131-.947-.406-1.215-.272-.266-.632-.397-1.074-.397Zm4.19 0H14.01v3.228h.685v-1.26h1.134v-.59h-1.134v-.774h1.36v-.604Zm-7.42 1.535v-.93h.336c.156 0 .272.04.354.117.083.075.127.184.127.336 0 .158-.046.274-.132.355-.085.08-.205.122-.367.122h-.319Zm2.843 1.089v-2.02h.324c.288 0 .496.085.633.247.139.163.212.414.212.76 0 .383-.081.64-.232.788-.154.149-.357.225-.613.225h-.324Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
