import React from 'react'
import './History.css'
import {  HistorySharp} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { orderInformation } from '../assets/data'
function History() {
  return (
    <div className='history'>
       {true ? <div>
        <HistorySharp/> You dont have any records with us, visit <Link to='/categories'>categories</Link>
        </div>:
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>
               Products
              </TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {orderInformation.filter((item)=>item.customer === "Rico").map((item)=> <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.created}</TableCell>
              <TableCell>
                <ul>
                  <li>T-shirts</li>
                  <li>Jeans</li>
                  <li>Jacket</li>

                </ul>
              </TableCell>
              <TableCell>{item.total}</TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
        }
    </div>
  )
}

export default History