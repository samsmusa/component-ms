"use client"

import {Table} from "@tanstack/react-table"
import {LucidePlusCircle, X} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {DataTableViewOptions} from "./data-table-view-options"

import {statuses} from "../data/data"
import {DataTableFacetedFilter} from "./data-table-faceted-filter"
import { NewOrderDialog } from "./new-order-dialog"

interface OrderDataTableToolbarProps<TData> {
    table: Table<TData>
    placeholder?: string
}

export function OrderDataTableToolbar<TData>({
                                            table,
                                            placeholder="filter order..."
                                        }: OrderDataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <NewOrderDialog />
                <Input
                    placeholder={placeholder || "Filter..."}
                    value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("id")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <X/>
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table}/>
        </div>
    )
}
