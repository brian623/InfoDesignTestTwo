import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchConsumeData } from '../store/consume/consumeThunks';
import { selectConsumeData, selectConsumeLoading, selectConsumeError } from '../store/consume/consumeSelectors';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../App.css';
import { transformData } from "../utils/elements/elements";

const Consume: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectConsumeData);
  const loading = useAppSelector(selectConsumeLoading);
  const error = useAppSelector(selectConsumeError);

  useEffect(() => {
    dispatch(fetchConsumeData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container" data-testid="container">
      <h1 className="title">Consume Energy</h1>
      <div className="graphic-container">
        <Line data={transformData(data)} />
      </div>
    </div>
  );
};

export default Consume;
