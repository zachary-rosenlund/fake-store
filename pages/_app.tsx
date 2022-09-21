import '../styles/globals.css'
import store from 'store';
import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAndSetCategories, login } from 'store/slices/app';
import Layout from '@/components/Layout/Layout';

function DataWrapper({ children }: any) {
  const dispatch: any = useDispatch();
  
  useEffect(() => {
    dispatch(getAndSetCategories());
  }, [])

  return children;
}

function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <DataWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataWrapper>
    </Provider>
  )
}

export default App
