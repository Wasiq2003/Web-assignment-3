"use server";

import { db } from "@/lib/db";
import { EmployeeSchema } from "@/schemas";
import { z } from "zod";

export const CreateEmployee = async(values: z.infer<typeof EmployeeSchema>)=> {
    console.log(values);

    const employee = await db.employee.create({
        data: {
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email,
            phone: values.phno,
        }
    })
    console.log(employee);
}