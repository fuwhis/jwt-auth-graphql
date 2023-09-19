/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";

export const usePopover = (id: string | number) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [popoverId, _setPopoverId] = useState(`popover-${id}`);

  const openPopOver = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const onClosePopover = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    popoverId,
    openPopOver,
    onClosePopover,
    setAnchorEl,
    open: Boolean(anchorEl),
  };
};
