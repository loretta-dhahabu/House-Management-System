import { useState, useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Payment from "./Payment";

function Payments ()
{
    const [ payments, setPayments ] = useState( [] );
    const { id } = useParams();
    // const navigate = useNavigate();

    useEffect( () =>
    {
        fetch("/api/payments")
          .then((response) => response.json())
          .then((data) => setPayments(data));
    }, [] );
    // async function getPayments ()
    // {
    //     let result = await fetch( "/payments" );
    //     result = await result.json();
    //     setPayments( result );
    // }
    return (
        <>
        <Header/>
        <TableContainer component={ Paper }>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Tenant</TableCell>
                        <TableCell align="right">Amount_paid</TableCell>
                        <TableCell align="right">Invoice</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">View</TableCell>
                        {/* <TableCell align="right">Delete</TableCell> */ }
                    </TableRow>
                </TableHead>
                <TableBody>
                    { payments.map( ( row ) => (
                        <TableRow
                            key={ row.id }
                            sx={ { "&:last-child td, &:last-child th": { border: 0 } } }
                        >
                            <TableCell component="th" scope="row">
                                { row.id }
                            </TableCell>
                            <TableCell align="right">{ row.tenant_id }</TableCell>
                            <TableCell align="right">{ row.amount_paid }</TableCell>
                            <TableCell align="right">{ row.invoice_no }</TableCell>
                            <TableCell align="right">{ row.date }</TableCell>
                            <TableCell align="right">
                                <Link
                                    to={ `/payments/${row.id}` }
                                    onClick={ () => <Payment key={ row.id } /> }
                                >
                                    <button className="viewBtn">View More</button>
                                </Link>
                            </TableCell>
                            {/* <button
                    onClick={() => {
                      deleteTenant(row.id);
                    }}
                    type="button"
                    className="btn-danger my-3"
                  >
                    Vacate */}
                            {/* </button> */ }
                        </TableRow>
                    ) ) }
                </TableBody>
            </Table>
            </TableContainer>
            </>
    );
}


export default Payments;
