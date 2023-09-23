import { Skeleton, TableCell } from "@mui/material";
import { StyledTableRow } from "../../style";

export interface Props {
  cellCount: number;
}
const LoadingTable = ({ cellCount }: Props) => {
  return (
    <>
      {Array.from(new Array(5)).map((row) => (
        <StyledTableRow key={row}>
          {Array.from(new Array(cellCount)).map((cell) => (
            <TableCell key={cell}>
              <Skeleton />
            </TableCell>
          ))}
        </StyledTableRow>
      ))}
    </>
  );
};

export default LoadingTable;
