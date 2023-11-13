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
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h9a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3Zm2 1v16h12V9h-4a1 1 0 0 1-1-1V4H6Zm9 1.414L16.586 7H15V5.414Zm-.878 9.416c-.282 0-.534.068-.756.206-.218.134-.39.328-.513.578-.121.252-.18.547-.18.886 0 .333.06.628.184.882.124.25.297.447.519.587.224.137.478.206.76.206.245 0 .477-.039.695-.116.22-.077.404-.187.554-.33l.015-.015v-1.417h-1.423v.604h.738v.456c-.131.131-.322.2-.58.2a.675.675 0 0 1-.39-.117.797.797 0 0 1-.275-.352 1.55 1.55 0 0 1-.1-.588c0-.235.035-.43.1-.588a.769.769 0 0 1 .275-.347.674.674 0 0 1 .39-.117c.149 0 .27.032.364.095.097.063.168.15.216.261l.017.041.632-.184-.016-.049c-.075-.24-.22-.43-.434-.571-.21-.142-.476-.21-.792-.21Zm-3.477.059H8.6v3.227h.685v-1.26h1.134v-.59H9.286v-.773h1.359v-.604Zm1.3 0h-.685v3.227h.685V14.89Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
