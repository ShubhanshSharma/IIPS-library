import './HomeTable.css';
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import libraryHomeData from '../../data';
import columnDef from '../columnDef';
import React from 'react';

export default function HomeTable(){
    
    const finalData = useMemo(() => libraryHomeData, []);
    const finalColumnData = useMemo(() => columnDef, []);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
        pageCount: undefined // allows the table to calculate the page count for us via instance.getPageCount()
        // If we wanted to control the pageCount, we could provide it here (eg. if we were doing server-side pagination)
    })
    
    
    const table = useReactTable({
        data: finalData,
        columns: finalColumnData,
        state: { pagination },
        onPaginationChange: setPagination,
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        columnResizeMode: "onChange",
        debugTable: true,  
    });
    // console.log(table.getHeaderGroups());
    console.log(libraryHomeData[0].date);
    return(
        <div>            
            <div className=" library-home-table relative gap-3 flex flex-col h-fit " style={{width:`${table.getTotalSize()}px`}}>
                <table>
                    <thead>{table.getHeaderGroups().map(headerGroup => 
                        <tr className="tr-library-home " 
                            key={headerGroup.id}>
                            {headerGroup.headers.map(
                                headers => 
                                <th className="th font-medium group" style={{width:`${headers.getSize()}px`}} key={headers.id}
                                            onMouseDown={headers.getResizeHandler()} onTouchStart={headers.getResizeHandler()}>
                                                {flexRender(
                                                    headers.column.columnDef.header,
                                                    headers.getContext()
                                                )}
                                    <div className={`resizer opacity-100 md:opacity-0 group-hover:opacity-100 ${headers.column.getIsResizing()? "isResizing":""}`} ></div>                            
                                </th>
                            )}
                        </tr>)}
                    </thead>
                    <tbody>    
                        {table.getRowModel().rows.map(row => 
                            <tr className="tr-library-home" key={row.id}>
                                {row.getVisibleCells().map(cell => 
                                    <td className="td h-[40px]" key={cell.id} style={{width:`${cell.column.getSize()}px`}}>
                                        {
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )
                                        }
                                    </td>
                                )}
                            </tr>)
                        }
                    </tbody>
                </table>

                <div className="pagination-controls">
                    <button
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </button>
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </button>
                    <button
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </button>
                    <span>
                        Page{' '}
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                        </strong>
                    </span>
                    <span>
                        | Go to page:{' '}
                        <input
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                table.setPageIndex(page);
                            }}
                            style={{ width: '50px' }}
                        />
                    </span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={e => {
                            table.setPageSize(Number(e.target.value));
                            table.setPageIndex(table.getState().pagination.pageIndex + 1);
                        }}
                    >
                        {[4,5,6,8,10].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            
        </div>
    )
}