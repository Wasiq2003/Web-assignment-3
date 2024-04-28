import { z } from "zod";

export const EmployeeSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    email: z.string().email(),

    phno: z.string().min(11, {
        message: "Phone number must be at least 11 characters.",
    }),
})