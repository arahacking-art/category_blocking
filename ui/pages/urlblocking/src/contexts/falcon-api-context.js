import FalconApi from '@crowdstrike/foundry-js';
import { createContext, useEffect, useMemo, useState } from 'react';

const FalconApiContext = createContext(null);

function useFalconApiContext() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [cachedCategories, setCachedCategories] = useState(null);
  
  const falcon = useMemo(() => new FalconApi(), []);
  const navigation = useMemo(() => falcon.isConnected ? falcon.navigation : undefined, [falcon.isConnected]);

  useEffect(() => {
    (async () => {
      await falcon.connect();
      setIsInitialized(true);
      
      // Load categories cache in background once initialized
      try {
        const collection = falcon.collection({ collection: 'domain' });
        const resp = await collection.list({ limit: 200 });
        const keys = resp?.resources ?? [];
        // Extract array of strings if they are objects or just strings
        const cats = keys.map(k => typeof k === 'string' ? k : k.category).filter(Boolean);
        setCachedCategories(cats);
      } catch (err) {
        console.error("Failed to preload categories cache", err);
      }
    })();
  }, [falcon]);

  return { falcon, navigation, isInitialized, cachedCategories };
}

export { useFalconApiContext, FalconApiContext };
