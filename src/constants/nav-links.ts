import { INavLink } from "../interfaces/nav-link";
import LocalStorageHookPage from "../pages/LocalStorageHookPage";

export const NAV_LINKS: INavLink[] = [
    {
        id: 1,
        name: 'useLocalStorage',
        path: '/local-storage',
        element: LocalStorageHookPage
    }
]