'use client';

// Components
import { Toaster as HotToaster } from 'react-hot-toast';

/**
 * Mounted at the root layout rather than inside a page so its stacking
 * context is the document root. `.page-shell` uses `isolation: isolate`,
 * which would otherwise trap the toast beneath the footer's backdrop-filter.
 */
const Toaster = () => <HotToaster position='bottom-center' />;

export { Toaster };
