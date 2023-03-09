import { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { ThemeContext } from './PageChangerColor/PageChangerColor.context';

export const Layout = () => {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <div>
        <div style={{
			backgroundColor: currentTheme.backgroundBox,
			color: currentTheme.foreground,
		}} >
            <Header />
            </div>
            <div style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.foreground,
            }}>
            <Outlet />
            </div>
        </div>
    )
}