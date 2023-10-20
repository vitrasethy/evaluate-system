"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Poster[] = [
  {
    id: "IG8-1",
    year: 1,
    department: "Intelligent Intrusion Detection System",
    leader: "MeySorng",
    judge: "People",
    generation: "8",
    no: 1,
    score: 60,
    complete: true,
  },

  {
    id: "IG8-4",
    year: 3,
    department: "Blockchain-based Identity Management",
    leader: "Rithy",
    judge: "People",
    generation: "7",
    no: 3,
    score: 50,
    complete: true,
  },
  {
    id: "IG8-2",
    year: 4,
    department: "Personalized Fitness Tracker",
    leader: "Bong Chhay",
    judge: "People",
    generation: "5",
    no: 4,
    score: 98,
    complete: false,
  },
];
export type Poster = {
  id: string;
  year: number;
  department:
    | "Intelligent Intrusion Detection System"
    | "Blockchain-based Identity Management"
    | "Personalized Fitness Tracker";
  leader: string;
  judge: string;
  generation: string;
  no: number;
  score: number;
  complete: boolean;
};
export const columns: ColumnDef<Poster>[] = [
  {
    accessorKey: "no",
    header: () => (
      <div className="text-center hidden md:block w-full font-bold text-black text-lg">
        No
      </div>
    ),
    cell: ({ row }) => {
      const no = parseFloat(row.getValue("no"));
      return <div className="text-center font-medium">{no}</div>;
    },
  },

  {
    accessorKey: "id",
    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        ID
      </div>
    ),
    cell: ({ row }) => {
      return <div className="capitalize text-start">{row.getValue("id")}</div>;
    },
  },

  {
    accessorKey: "department",
    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        Project Name
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize text-start">{row.getValue("department")}</div>
    ),
  },
  {
    accessorKey: "leader",
    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        Leader
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="capitalize text-start">{row.getValue("leader")}</div>
      );
    },
  },
  {
    accessorKey: "judge",

    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        Judge
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="capitalize text-start flex justify-center ">
          <div className="text-start font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  {row.getValue("judge")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="bg-gray-50 text-black"
              >
                <DropdownMenuLabel>Member</DropdownMenuLabel>
                <DropdownMenuItem>Meng Srun</DropdownMenuItem>
                <DropdownMenuItem>Mey Sorng</DropdownMenuItem>
                <DropdownMenuItem>Rithy</DropdownMenuItem>
                <DropdownMenuItem>Veha</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button
          className=" text-start hidden md:flex w-full font-bold text-black text-lg"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown className="ml-2 h-3 w-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("score")}</div>
    ),
  },
  {
    accessorKey: "complete",
    header: () => {},
    cell: () => {},
  },
  {
    accessorKey: "year",
    header: () => <div className="text-start hidden md:block"></div>,
    cell: ({ row }) => {
      return (
        <div className="text-start font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-50 text-black">
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default function ProjectsForm() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div className="present ">
        <Card className="">
          <CardContent className="mt-5">
            <div className="flex justify-center">
              <div className="w-full">
                <div className="flex items-center md:mb-5">
                  <DropdownMenu>
                    <DropdownMenuContent align="end">
                      {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                              }
                            >
                              {column.id}
                            </DropdownMenuCheckboxItem>
                          );
                        })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="md:mt-[-20px] mt-[-35px]">
                  <Table className="border-0 ">
                    <TableHeader className="md:bg-gray-300">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow className="" key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return (
                              <TableHead key={header.id}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                              </TableHead>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody className="test hover:">
                      {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            className={`overflow-hidden ${
                              row.getValue("complete")
                                ? "bg-green-100"
                                : "bg-red-100"
                            }`}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                          >
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
