import './HomeTable.css';
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react";
import libraryHomeData from '../../data';

const columns = [
    {
        accessorKey:'book',
        header:'Book Name',
        size: 250,
        cell: (props) => <p>{props.getValue()}</p>,
    },{
        accessorKey:'student',
        header:'Student Name',
        size: 250,
        cell: (props) => <p>{props.getValue()}</p>
    },{
        accessorKey:'date',
        header:'Date',
        cell: (props) => <p>{props.getValue()?.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}</p>
    },{
        accessorKey:'action',
        header:'Action',
        cell: (props) => <p>{props.getValue()}</p>
    },
]

export default function HomeTable(){
    
    const [data , setData] = useState(libraryHomeData);
    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: "onChange",
    });

    // console.log(table.getHeaderGroups());
    console.log(libraryHomeData[0].date);
    return(
        
            <div className=" library-home-table relative flex flex-col overflow-y-scroll h-[398px] " style={{width:`${table.getTotalSize()}px`}}>
                {table.getHeaderGroups().map(headerGroup => <div className="tr-library-home " 
                key={headerGroup.id}>
                    {headerGroup.headers.map(
                        headers => <div className="th font-medium group" style={{width:`${headers.getSize()}px`}} key={headers.id}
                                    onMouseDown={headers.getResizeHandler()} onTouchStart={headers.getResizeHandler()}>
                            {headers.column.columnDef.header}
                            <div className={`resizer opacity-0 group-hover:opacity-100 ${headers.column.getIsResizing()? "isResizing":""}`} ></div>                            
                        </div>
                    )}
                </div>)}

                {
                    table.getCoreRowModel().rows.map(row => <div className="tr-library-home" key={row.id}>
                        {row.getVisibleCells().map(cell => <div className="td overflow-ellipsis" key={cell.id} style={{width:`${cell.column.getSize()}px`}}>
                            {
                                flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )
                            }
                        </div>)}
                    </div>)
                }
            </div>
        
    )
}