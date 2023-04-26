import { useEffect } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
const useOnMount = (effect: () => any): void => useEffect(effect, []);
export default useOnMount;
