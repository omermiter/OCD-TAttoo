"use client"

import { Warp } from "@paper-design/shaders-react"

export default function WarpShaderBackground() {
  return (
    <div className="absolute inset-0">
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={0.45}
        softness={1}
        distortion={0.28}
        swirl={0.9}
        swirlIterations={12}
        shape="checks"
        shapeScale={0.12}
        scale={1}
        rotation={0}
        speed={0.6}
        colors={[
          "hsl(249, 35%, 3%)",
          "hsl(271, 65%, 16%)",
          "hsl(271, 85%, 48%)",
          "hsl(43, 72%, 44%)",
        ]}
      />
    </div>
  )
}
