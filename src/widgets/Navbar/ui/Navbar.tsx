import { classNames } from "shared/lib/helpers/classNames";
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export function Navbar({className}: NavbarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={'/'}
                >
                    Main
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}
                >
                    About Site
                </AppLink>
            </div>
            
        </div>
    )
}
