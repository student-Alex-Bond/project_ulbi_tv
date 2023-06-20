import { Link } from 'react-router-dom';
import './styles/index.scss'; 
import { classNames } from 'shared/lib/helpers/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export function App() {
const { theme} = useTheme()

    return (
      <div className={classNames('app', {}, [theme])}>
        <Suspense fallback={(<div>Loading...</div>)}>
          <Navbar />
          <div className='content-page'>
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
        
      
        
        
      </div>
        
    )
}