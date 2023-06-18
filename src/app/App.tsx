import { Link } from 'react-router-dom';
import './styles/index.scss'; 
import { classNames } from 'shared/lib/helpers/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';



export function App() {
const { theme} = useTheme()

    return (
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        
      </div>
        
    )
}