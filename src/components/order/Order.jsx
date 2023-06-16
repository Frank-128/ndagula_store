import React, { useState } from "react";
import "./Order.css";
import {
  BarChart,
  BarChartOutlined,
  BarChartRounded,
  BarChartSharp,
  LineAxis,
  LineStyle,
  Search,
  StackedBarChart,
  TableChart,
} from "@mui/icons-material";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { orderInformation } from "../../assets/data";

function OrderBlock({ name, number, widget, color }) {
  return (
    <div style={{ backgroundColor: color }} className="orderblock">
      <div>
        <p>{name}</p>
        <b>{number}</b>
      </div>
      <span>{widget}</span>
    </div>
  );
}

function Order() {
    const [status,setStatus]=useState('')
  return (
    <div className="order">
      <div className="order_heading">
        <div className="order_title">
          <TableChart />
          <strong>Orders/</strong>{status===''?"All Orders":status}
        </div>
        <div>
          {" "}
          <Button
            style={{ backgroundColor: `rgb(27, 27, 91)`, color: "slategray" }}
          >
            Create Order
          </Button>
        </div>
      </div>
      <div className="order_subheading">
        <OrderBlock
          color="lightblue"
          name="All Orders"
          number={14000}
          widget={<BarChartOutlined style={{ fontSize: "80px" }} />}
        />
        <OrderBlock
          color="violet"
          name="Pending Orders"
          number={1000}
          widget={<StackedBarChart style={{ fontSize: "80px" }} />}
        />
        <OrderBlock
          color="tomato"
          name="Bad Orders"
          number={50}
          widget={<BarChartRounded style={{ fontSize: "80px" }} />}
        />
        <OrderBlock
          color="lightgreen"
          name="Filled Orders"
          number={12950}
          widget={<BarChartSharp style={{ fontSize: "80px" }} />}
        />
      </div>
      <div className="order_content">
        <div className="order_content_title">
          <div className="order_buttons">
            <span onClick={()=>setStatus('')} className={status ===""?"active2":""}>All orders</span>
            <span onClick={()=>setStatus('pending')} className={status ==="pending"?"active2":""}>Pending orders</span>
            <span onClick={()=>setStatus('bad')} className={status ==="bad"?"active2":""}>Bad orders</span>
            <span onClick={()=>setStatus('filled')} className={status ==="filled"?"active2":""}>Filled orders</span>
          </div>
          <div className="order_search">
            <input type="search" />
            <Search />
          </div>
        </div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><b>Order Id</b></TableCell>
                    <TableCell><b>Created</b></TableCell>
                    <TableCell><b>Customer</b></TableCell>
                    <TableCell><b>Total</b></TableCell>
                    <TableCell><b>Profit</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                    <TableCell><b>Updated</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    orderInformation.filter((item)=>item.status === status|| status === '').map((item)=><TableRow>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.created}</TableCell>
                    <TableCell>{item.customer}</TableCell>
                    <TableCell>{item.total}</TableCell>
                    <TableCell>{item.profit}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.updated}</TableCell>  
                    </TableRow>)
                }
            </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Order;
