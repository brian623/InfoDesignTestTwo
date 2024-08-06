import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchLostsData } from '../store/losts/lostsThunks';
import { selectLostsData, selectLostsLoading, selectLostsError } from '../store/losts/lostsSelectors';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../App.css';
import { transformData } from "../utils/elements/elements";

const Losts: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectLostsData);
  const loading = useAppSelector(selectLostsLoading);
  const error = useAppSelector(selectLostsError);

  useEffect(() => {
    dispatch(fetchLostsData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container" data-testid="container">
      <h1 className="title">Losts Energy</h1>
      <div className="graphic-container">
        <Line data={transformData(data)} />
      </div>
    </div>
  );
};

export default Losts;
