import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})


export const depositSchema = z.object({
  id: z.string(),
  vendor: z.string(),
  amount: z.number(),
  status: z.string(),
  transaction_id: z.string(),
  created_at: z.string(),
  label: z.string(),
})

export type Task = z.infer<typeof taskSchema>
export type Deposit = z.infer<typeof depositSchema>
