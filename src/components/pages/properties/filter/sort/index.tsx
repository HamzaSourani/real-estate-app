import { useTranslation } from "react-i18next";
import {
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Button,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useAnchorEle from "@/hooks/useAnchorEle";
import { Props } from "./type";

const Sort = ({ setSort }: Props) => {
  const [open, anchorEl, handleClick, handleClose] = useAnchorEle();
  const { t } = useTranslation();

  const SORT_ITEMS = [
    {
      label: "common.property.price",
      value: "price",
      icon: <ArrowUpwardIcon />,
    },
    {
      label: "common.property.price",
      value: "-price",
      icon: <ArrowDownwardIcon />,
    },
    {
      label: "common.property.create-at",
      value: "createAt",
      icon: null,
    },
  ] as const;
  return (
    <>
      <Button onClick={handleClick} startIcon={<SortIcon />}>
        {t("common.property.sort")}
      </Button>
      {open && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 0.5px 2px rgba(0,0,0,0.32))",
              mt: 1.5,

              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          {SORT_ITEMS.map((item) => (
            <MenuItem
              onClick={() => {
                setSort(item.value);
              }}
            >
              {item?.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <Typography>{t(item.label)}</Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default Sort;
