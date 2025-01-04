import {Metadata} from "next"
import Image from "next/image"
import {z} from "zod"

import {orderColumns} from "./components/orderColumns"
import {DataTable} from "./components/data-table"
import {UserNav} from "./components/user-nav"
import {taskSchema} from "./data/schema"
import {TabsContent} from "@/components/ui/tabs";
import {orders} from "@/components/page/dashboard/tabs/data/datas";
import { ServiceDataTableToolbar } from "./components/service-data-table-toolbar"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}


function getTasks() {
    return z.array(taskSchema).parse(orders)
}

export default function ServiceTab() {
    const tasks = getTasks()

    return (
        <TabsContent value="services" className="space-y-4 min-h-screen">
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
                <DataTable Toolbar={ServiceDataTableToolbar} data={tasks} columns={orderColumns}/>
            </div>
        </TabsContent>
    )
}
