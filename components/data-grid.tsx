'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function DataGrid() {
  const [data, setData] = useState<string[][]>(Array(100).fill(Array(3).fill("")))
  
  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    const newData = data.map((row, i) => 
      i === rowIndex 
        ? row.map((cell, j) => j === colIndex ? value : cell)
        : row
    )
    setData(newData)
  }

  return (
    <div className="overflow-auto h-[calc(100vh-12rem)] border rounded-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] bg-gray-100">A</TableHead>
            <TableHead className="w-[100px] bg-gray-100">B</TableHead>
            <TableHead className="w-[100px] bg-gray-100">C</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, colIndex) => (
                <TableCell key={`${rowIndex}-${colIndex}`} className="p-0">
                  <Input
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    className="border-0 rounded-none h-8"
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

