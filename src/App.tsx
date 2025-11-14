import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppRouter} from './AppRouter';
import {apiInit} from './api/apiInit';

apiInit();
const queryClient = new QueryClient();

/**
 * Root application component that sets the document head and provides React Query context before rendering the router.
 *
 * @returns The root JSX element containing a configured `Helmet` and a `QueryClientProvider` that wraps `AppRouter`.
 */
function App() {
  const {i18n, t} = useTranslation();

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{lang: i18n.language}}
      >
        <meta name="description" content={t('app.description')} />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;