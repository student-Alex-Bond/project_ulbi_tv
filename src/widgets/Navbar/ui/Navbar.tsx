import { Link } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames";
import cls from './NavBar.module.scss'

interface NavbarProps {
    className?  : string
}

export function Navbar({className}: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About Site</Link>
        </div>
    )
}