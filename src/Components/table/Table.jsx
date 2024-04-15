import React, { useState, useEffect } from 'react';
import './Table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const List = ({ data }) => {
  const [tableData, setTableData] = useState(data); // State to manage table data

  useEffect(() => {
    setTableData(data);
  }, [data]); // Update table data when 'data' prop changes

  // Function to handle row deletion
  const handleDelete = async (id, cv) => {
    try {
      await deleteDoc(doc(db, cv ? 'Internship' : 'Enquiry', id));
      setTableData(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="Table description">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" sx={{ width: '15px' }}>Tracking ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            {data.some(row => row.company) && <TableCell className="tableCell">Company</TableCell>}
            {data.some(row => row.requirements) && <TableCell className="tableCell">Requirements</TableCell>}
            {data.some(row => row.CV) && <TableCell className="tableCell">CV</TableCell>}
            {data.some(row => row.query) && <TableCell className="tableCell">Query</TableCell>}
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(row => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{row.name}</div>
              </TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.phone ? row.phone : row.contactNo}</TableCell>
              {row.company && <TableCell className="tableCell">{row.company}</TableCell>}
              {row.requirements && <TableCell className="tableCell">{row.requirements}</TableCell>}
              {row.CV && (
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>
                    {<Link to={row.CV} target="_blank" rel="noopener noreferrer">download CV</Link>}
                  </span>
                </TableCell>
              )}
              {row.query && <TableCell className="tableCell">{row.query}</TableCell>}
              <TableCell className="tableCell actionCell">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <div style={{ marginBottom: 'auto' }} onClick={() => handleDelete(row.id, row.CV)}>
                    <DeleteIcon />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
