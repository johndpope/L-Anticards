import { useState } from 'react';

export function useToggle(defaultState: boolean): [boolean, () => void, () => void] {
  const [open, setOpen] = useState(defaultState);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return [open, onOpen, onClose];
}
