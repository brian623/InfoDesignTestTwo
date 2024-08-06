import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchCostsData } from '../store/costs/costsThunks';
import { selectCostsData, selectCostsLoading, selectCostsError } from '../store/costs/costsSelectors';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../App.css';
import { transformData } from "../utils/elements/elements";

const Costs: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectCostsData);
  const loading = useAppSelector(selectCostsLoading);
  const error = useAppSelector(selectCostsError);

  useEffect(() => {
    dispatch(fetchCostsData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container" data-testid="container">
      <h1 className="title">Costs Energy</h1>
      <div className="graphic-container">
        <Line data={transformData(data)} />
      </div>
    </div>
  );
};

export default Costs;
