"use client"

import { z } from "zod"

const coverageSchema = z.object({
    district: z.string().min(2, {
        message: "District must be at least 2 characters.",
    }).max(50, {
        message: "District must be at most 50 characters.",
    }),
    thanaOrUpazilla: z.string().min(2, {
        message: "Thana or Upazilla must be at least 2 characters.",
    }).max(50, {
        message: "Thana or Upazilla must be at most 50 characters.",
    }),
})

export default coverageSchema
