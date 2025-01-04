import {Metadata} from "next"
import Image from "next/image"
import {z} from "zod"

import {orderColumns} from "./components/orderColumns"
import {DataTable} from "./components/data-table"
import {UserNav} from "./components/user-nav"
import {taskSchema} from "./data/schema"
import {TabsContent} from "@/components/ui/tabs";
import {orders} from "@/components/page/dashboard/tabs/data/orders";

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
function getTasks() {
    return z.array(taskSchema).parse(orders)
}

export default function TicketTab() {
    const tasks = getTasks()

    return (
        <TabsContent value="tickets" className="space-y-4 min-h-screen">
            <div className="md:hidden">
                <Image
                    src="/examples/tasks-light.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/tasks-dark.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UserNav/>
                    </div>
                </div>
                <DataTable data={tasks} columns={orderColumns}/>
            </div>
        </TabsContent>
    )
}
