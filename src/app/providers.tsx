import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";

interface Providers {
    children: React.ReactNode
}

export default function Providers({children}: Providers) {

  return(
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}