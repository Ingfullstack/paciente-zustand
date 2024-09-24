import { ReactNode } from "react";

export default function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <p className="text-red-600 text-sm mx-2 mt-1">{ children }</p>
  )
}
