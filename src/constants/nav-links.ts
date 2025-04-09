import { INavLink } from "../interfaces/nav-link";
import ClickedOutsidePage from "../pages/ClickedOutsidePage";
import DebouncePage from "../pages/DebouncePage";
import LocalStorageHookPage from "../pages/LocalStoragePage";
import NetworkStatusPage from "../pages/NetworkStatusPage";

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
    },
    {
        id: 3,
        name: 'useNetworkStatus',
        path: '/network-status',
        element: NetworkStatusPage
    },
    {
        id: 4,
        name: 'useClickedOutsidePage',
        path: '/clicked-outside',
        element: ClickedOutsidePage
    }
]