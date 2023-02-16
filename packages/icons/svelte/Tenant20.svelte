<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M10.46 1.908a.75.75 0 0 0-.92 0l-7.5 5.833a.75.75 0 0 0 .92 1.184l.457-.354V17.5c0 .414.335.75.75.75h11.666a.75.75 0 0 0 .75-.75V8.57l.457.355a.75.75 0 1 0 .92-1.184l-7.5-5.833Zm4.623 5.496L10 3.45 4.917 7.404v9.346h10.166V7.404ZM10 7.834a.917.917 0 1 0 0 1.833.917.917 0 0 0 0-1.834Zm-2.417.916a2.417 2.417 0 1 1 3.28 2.258A4.085 4.085 0 0 1 14.083 15h-1.5a2.583 2.583 0 0 0-5.166 0h-1.5c0-1.96 1.38-3.596 3.22-3.992A2.418 2.418 0 0 1 7.583 8.75Z"/>
</svg>
