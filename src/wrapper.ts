// Imports fnA from pkg and USES it
// Re-exports fnB from pkg
import { fnA } from 'pkg-a';

export { fnB } from 'pkg-a';

export function useFnA() {
  return fnA();
}

