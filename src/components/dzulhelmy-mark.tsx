export function DzulhelmyMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 260 160"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23.8669 164.902V141.862H0.570938V69.9261H23.8669V46.6301H93.7549V0.294067H119.611V141.862H96.0589V164.902H23.8669ZM26.4269 139.302H93.4989V72.2301H26.4269V139.302ZM145.571 164.902V46.6301H241.059V69.9261H264.611V164.902H238.499V72.2301H171.427V164.902H145.571Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
