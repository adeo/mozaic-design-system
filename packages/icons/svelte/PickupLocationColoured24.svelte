<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="#fff" d="M7 4.5h10v11H7v-11Z"/>
  <path fill-rule="evenodd" d="M12.708 21.707 12.001 21l-.679.735-.002-.002-.004-.004-.016-.015-.058-.054-.215-.205a45.065 45.065 0 0 1-3.103-3.31c-.863-1.023-1.758-2.192-2.474-3.378-.707-1.169-1.29-2.437-1.442-3.643C3.441 6.584 6.843 2 12.001 2c2.605 0 4.75 1.306 6.156 3.063 1.392 1.74 2.13 4.01 1.834 6.079-.155 1.086-.748 2.294-1.444 3.422-.712 1.154-1.601 2.332-2.46 3.382a57.142 57.142 0 0 1-3.3 3.682l-.058.058-.015.015-.004.004-.002.002ZM12.001 21l.707.707a1 1 0 0 1-1.386.028l.679-.735Zm2.5-13.005-3.993-2.28L12 4.861l3.992 2.28-1.492.853Zm.247 1.01 1.752-1v4.562l-4 2.286V10.29l2.248-1.285ZM11.5 10.29v4.563l-4-2.286V8.004l4 2.286Zm.5-.866L8.008 7.143 9.5 6.29l3.992 2.281L12 9.424Z"/>
</svg>
