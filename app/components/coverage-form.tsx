"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import coverageSchema from "./schemas/coverageSchema";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function CoverageForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof coverageSchema>>({
    resolver: zodResolver(coverageSchema),
    defaultValues: {
      district: "",
      thanaOrUpazilla: "",
    },
  })

  // Temporary select data
  const districts = ["Dhaka", "Chittagong", "Sylhet"];
  const thanasOrUpazillas = ["Adabor", "Badda", "Banani"];

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof coverageSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>District</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select district..." />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map(district => (
                      <SelectItem key={district} value={district}>{district}</SelectItem>

                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                This is the district where you want the new connection.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="thanaOrUpazilla"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thana/Upazilla</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Thana/Upazilla..." />
                  </SelectTrigger>
                  <SelectContent>
                    {thanasOrUpazillas.map(thanaOrUpazilla => (
                      <SelectItem key={thanaOrUpazilla} value={thanaOrUpazilla}>{thanaOrUpazilla}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                This is the Thana or Upazilla where you want the new connection.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Check Area</Button>
      </form>
    </Form>
  )
}

export { CoverageForm }

