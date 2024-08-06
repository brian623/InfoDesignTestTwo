import React, { useState, useMemo, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchEnergyData } from '../store/energy/energyThunks';
import { selectEnergyData, selectEnergyLoading, selectEnergyError } from '../store/energy/energySelectors';
import { Container, Table, Button } from 'react-bootstrap';

const EnergyTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectEnergyData);
  const loading = useAppSelector(selectEnergyLoading);
  const error = useAppSelector(selectEnergyError);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15,
  });

  useEffect(() => {
    dispatch(fetchEnergyData());
  }, [dispatch]);

  const columns = useMemo(() => [
    {
      header: 'Line',
      accessorKey: 'line',
    },
    {
      header: 'Date',
      accessorKey: 'date',
    },
    {
      header: 'Consume',
      accessorKey: 'consume',
    },
    {
      header: 'Costs',
      accessorKey: 'costs',
    },
    {
      header: 'Losts',
      accessorKey: 'losts',
    },
  ], []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container className="mt-6" data-testid="energyTable">
      <h2 className='text-center'>Energy Resume</h2>
      <Table striped bordered hover responsive>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th colSpan={header.colSpan} key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex text-center justify-content-between">
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        variant="dark"
      >
        {'<'}
      </Button>
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        variant="dark"
      >
        {'>'}
      </Button>
      </div>
    </Container>
  );
};

export default EnergyTable;
