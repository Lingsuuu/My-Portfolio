import type { JSX as FiberJSX } from "@react-three/fiber";

declare global {
  namespace JSX {
    // Merge R3F intrinsic elements into global JSX namespace
    interface IntrinsicElements extends FiberJSX.IntrinsicElements {}
  }
}
