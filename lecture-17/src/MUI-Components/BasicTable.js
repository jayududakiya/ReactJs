import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const [Rows,setRows] = React.useState([]);
  React.useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      return response.json();
    })
    .then((responseData)=>{
      setRows(responseData)
    })
  },[])

  console.log(Rows);
  return (
    <>
    <h1 style={{textAlign:"center" , color :"blue"}}>Table Demo Using MARTIAL UI</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Rows.map((Row) => (
            <TableRow
              key={Row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="Row">
                {Row.name}
              </TableCell>
              <TableCell align="center">{Row.username}</TableCell>
              <TableCell align="center">{Row.email}</TableCell>
              <TableCell align="center">{Row.phone}</TableCell>
              <TableCell align="center">{Row.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}