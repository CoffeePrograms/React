import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData, setError } from '../store/apiSlice';

// Определяем тип пропсов, которые добавляет HOC
interface WithApiFetchProps {
  fetchData: (url: string) => void;
  loading: boolean;
}

// Используем обобщение для типизации пропсов
const withApiFetch = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithApiFetchProps>
) => {
  const WithApiFetchComponent = (props: P) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const fetchData = async (url: string) => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ошибка: ${response.status}`);
        }
        const result = await response.json();
        dispatch(setData(result));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setData(null));
        dispatch(
          setError(
            error instanceof Error ? error.message : 'Неизвестная ошибка'
          )
        );
      } finally {
        setLoading(false);
      }
    };

    return (
      <WrappedComponent {...props} fetchData={fetchData} loading={loading} />
    );
  };

  WithApiFetchComponent.displayName = `WithApiFetch(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithApiFetchComponent;
};

export default withApiFetch;
