<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M11.5 20.5H13V16a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4.5h2V16a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4.5h1.5v-7.813C34.989 11.547 30.872 9.5 24 9.5s-10.989 2.046-12.5 3.187V20.5Zm-1.5 3c-1.111 0-1.66.43-1.983.877C7.64 24.9 7.5 25.573 7.5 26v4h33v-4c0-1.111-.43-1.66-.877-1.983C39.1 23.64 38.428 23.5 38 23.5H10Zm-2.5 11V32h33v2.5h-33Zm25.5-14V17h-6v3.5h6Zm-12 0V17h-6v3.5h6ZM8.94 10.94C10.624 9.252 15.715 6.5 24 6.5s13.375 2.753 15.06 4.44A1.5 1.5 0 0 1 39.5 12v8.705a5.761 5.761 0 0 1 1.877.878C42.596 22.46 43.5 23.91 43.5 26v9.002A2.499 2.499 0 0 1 41 37.5h-1V40a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2.5H16V40a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.5H7A2.5 2.5 0 0 1 4.5 35v-9c0-.907.26-2.233 1.083-3.377a4.983 4.983 0 0 1 2.917-1.95V12c0-.398.158-.78.44-1.06ZM34 37.5V39h4v-1.5h-4Zm-24 0h4V39h-4v-1.5Z"/>
</svg>
