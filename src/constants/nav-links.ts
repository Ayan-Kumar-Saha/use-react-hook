import { INavLink } from "../interfaces/nav-link";
import DebouncePage from "../pages/DebouncePage";
import LocalStorageHookPage from "../pages/LocalStorageHookPage";

export const NAV_LINKS: INavLink[] = [
    {
        id: 1,
        name: 'useLocalStorage',
        path: '/local-storage',
        element: LocalStorageHookPage
    },
    {
        id: 2,
        name: 'useDebounce',
        path: '/debounce',
        element: DebouncePage
    }
]