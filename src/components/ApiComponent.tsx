import React from 'react';
import styles from './ApiComponent.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import withApiFetch from '../hoc/withApiFetch';

interface Props {
  fetchData: (url: string) => void;
  loading: boolean;
}

const ApiComponent: React.FC<Props> = ({ fetchData }) => {
  const data = useSelector((state: RootState) => state.api.data);
  const error = useSelector((state: RootState) => state.api.error);

  return (
    <div>
      <button onClick={() => fetchData('https://catfact.ninja/facts')}>
        Призыв душнилы
      </button>
      <button onClick={() => fetchData('https://catfact.ninja/no_facts')}>
        Призыв ошибки
      </button>

      {data && (
        <div className={`${styles.dataContainer} ${styles.jsonContainer}`}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className={`${styles.dataContainer} ${styles.errorContainer}`}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default withApiFetch(ApiComponent);
