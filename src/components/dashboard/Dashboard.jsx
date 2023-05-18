import React from 'react'
import './Dashboard.css'
import { BarChart, CalendarMonth, Home, PieChart } from '@mui/icons-material'
import { CartesianGrid, LineChart, Tooltip, XAxis,Line, Legend } from 'recharts'
import { customers, orders,logs } from '../../assets/data'
import { Badge, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
function Dashboard() {
  return (
    <div className='dashboard'>
     <div className="heading">
       <div>
       <Home />
       <span >Dashboard/</span>
       </div>
       <ul>
        <li>Staticics</li>
        <li>Customers(120)</li>
        <li>
            <CalendarMonth/><span>Oct 12 -</span>
            <CalendarMonth/><span>Mar 31 </span>

        </li>
       </ul>
       
     </div>
     <div className="subheading">
       <div className='subheading_welcome'>
       <span>Dashboard,</span>
       <span>Welcome Ndagula</span>
       </div>
       <div className='subheading_blocks'>
        <div className='new_order'>
           <span> NEW ORDERS</span>
           <div >
            <span style={{fontSize:"50px"}}>300</span>
           <BarChart style={{fontSize:"80px"}}/>
           </div>
        </div>
        <div className='available_stock'>
        <span> AVAILABLE STOCK</span>
           <div >
            <span style={{fontSize:"50px"}}>2300</span>
           <PieChart style={{fontSize:"80px"}}/>
           </div>
        </div>
       </div>
     </div>
     <div className="main_content">
   
   <div className='linechart'>
   <h1>Most bought items</h1>
   <LineChart
   width={900}
   height={400}
   data={orders}
   margin={{top:5,right:20,left:10,bottom:5}}
   >
   <XAxis dataKey="month" stroke="#f5f53" />
   <Tooltip/>
   <Legend/>
    <CartesianGrid stroke="#f5f5f5" />
    <Line type="monotone" dataKey="jeans" stroke="black" yAxisId={0} />
    <Line type="monotone" dataKey="curtains" stroke="red" yAxisId={1} />
    <Line type="monotone" dataKey="pullover" stroke="green" yAxisId={2} />
    <Line type="monotone" dataKey="nets" stroke="blue" yAxisId={3} />

   </LineChart>
   </div>
   
        <div className='customers'>
           <h3>New Customers</h3>
           <Table>
           <TableHead>
           <TableRow>
                <TableCell>
                    FirstName
                </TableCell>
                <TableCell>
                    LastName
                </TableCell>
                <TableCell>
                    Status
                </TableCell>
            </TableRow>
           </TableHead>
              <TableBody>
              {
                    customers.map((item)=>(<TableRow>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>
                        <Badge color={item.status === "online"?"success":"error"} variant='dot'>
                            <span>{item.status}</span>
                        </Badge>
                    </TableCell>
                    </TableRow>))
                }
                
              </TableBody>
           </Table>
        </div>
        <div className='feeds'>
        <h3>Feeds</h3>
        {
            logs.map((item)=>(<div className='feeds_item'>
                <p>{item.message}</p>
                <span>{item.time}</span>
            </div>))
            
            }
        </div>
    </div>
     
 
    </div>
  )
}

export default Dashboard