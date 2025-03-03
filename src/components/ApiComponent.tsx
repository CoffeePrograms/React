import React, { useState } from 'react';
import styles from './ApiComponent.module.scss';

interface ApiResponse {
  data: { fact: string; length: number }[];
}

const ApiComponent: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ошибка: ${response.status}`);
      }
      const result: ApiResponse = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Неизвестная ошибка');
      setData(null);
    }
  };

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

export default ApiComponent;
