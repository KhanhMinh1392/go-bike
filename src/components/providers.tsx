'use client';

import { getDictionary } from '@/app/[lang]/dictionaries';
import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const DictionaryContext = React.createContext<Dictionary | null>(null);

function QueryProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

function Providers({ dictionary, children }: { dictionary: Dictionary; children: React.ReactNode }) {
  return (
    <QueryProvider>
      <DictionaryContext.Provider value={dictionary}>{children}</DictionaryContext.Provider>
    </QueryProvider>
  );
}

export function useDictionary() {
  const dictionary = React.useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error('useDictionary hook must be used within DictionaryProvider');
  }

  return dictionary;
}

export default Providers
