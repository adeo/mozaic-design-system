<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="#fff" d="M7 5h10v8H7V5Z"/>
  <path fill="#006974" fill-rule="evenodd" d="M12.707 21.707 12 21l-.679.735-.001-.002-.005-.004-.015-.015-.059-.054-.214-.205a45.093 45.093 0 0 1-3.103-3.31c-.864-1.023-1.759-2.192-2.475-3.378-.707-1.169-1.29-2.437-1.441-3.643C3.44 6.584 6.842 2 12 2c2.605 0 4.75 1.306 6.156 3.063 1.392 1.74 2.13 4.01 1.834 6.079-.155 1.086-.747 2.294-1.444 3.422-.712 1.154-1.601 2.332-2.46 3.382a57.137 57.137 0 0 1-3.3 3.682l-.058.058-.015.015-.004.004-.001.002ZM12 21l.707.707a1 1 0 0 1-1.385.028L12 21Zm.354-14.854a.5.5 0 0 0-.707 0l-4 4A.5.5 0 0 0 8 11h8a.5.5 0 0 0 .354-.854l-4-4Z"/>
</svg>
