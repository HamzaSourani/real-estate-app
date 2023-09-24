export interface Props {
  open: boolean;
  handleClose: () => void;
  property: { id: string; name: string };
}
