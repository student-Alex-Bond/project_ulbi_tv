import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/inedx';

interface SidebarProps {
className? : string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
  setCollapsed(prev => !prev)
} 

  return (
    <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={ cls.lang} />
      </div>
    </div>
  )
};
