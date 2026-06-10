import { useState, useEffect, useCallback, useRef } from 'react';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseFetchReturn<T> extends UseFetchState<T> {
  refetch: () => void;
}

function useFetch<T>(
  fetcher: () => Promise<T>,
): UseFetchReturn<T> {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  const fetcherRef = useRef(fetcher);

  useEffect(() => {
    fetcherRef.current = fetcher;
  });

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      try {
        const result = await fetcherRef.current();
        if (!cancelled) {
          setState({ data: result, loading: false, error: null });
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'An error occurred';
          setState({ data: null, loading: false, error: message });
        }
      }
    };

    run();
    return () => { cancelled = true };
  }, [trigger]);

  const refetch = useCallback(() => setTrigger(t => t + 1), []);

  return { ...state, refetch };
}

export default useFetch;
