import React, { useState } from "react";

const useAnchorEle = () => {
  const [anchorEle, setAnchorEle] = useState<HTMLElement | null>(null);
  const open = !!anchorEle;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEle(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEle(null);
  };
  return [open, anchorEle, handleClick, handleClose] as const;
};

export default useAnchorEle;
