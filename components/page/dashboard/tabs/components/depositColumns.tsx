"use client"

import {ColumnDef} from "@tanstack/react-table"

import {statuses} from "../data/data"
import {Deposit} from "../data/schema"
import {DataTableColumnHeader} from "./data-table-column-header"

export const depositColumns: ColumnDef<Deposit>[] = [
    {
        accessorKey: "id",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Deposit ID"/>
        ),
        cell: ({row}) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "transaction_id",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Transaction ID"/>
        ),
        cell: ({row}) => <div className="w-[80px]">{row.getValue("transaction_id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "vendor",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Vendor"/>
        ),
        cell: ({row}) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("vendor")}
                </div>
            )
        },
    },
    {
        accessorKey: "created_at",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Created At"/>
        ),
        cell: ({row}) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("created_at")}
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Status"/>
        ),
        cell: ({row}) => {
            const status = statuses.find(
                (status) => status.value === row.getValue("status")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground"/>
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    }
]
