// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemButton from "@mui/material/ListItemButton";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
// import Slide from "@mui/material/Slide";
// import { TransitionProps } from "@mui/material/transitions";
// import { DialogContent, DialogTitle, SxProps } from "@mui/material";
// import { BootstrapDialog } from "./PHModal";

// type TModalProps = {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
//   title: string;
//   children: React.ReactNode;
//   sx?: SxProps;
// };

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function PHFullScreenModal({
//   open = false,
//   setOpen,
//   title = "",
//   children,
//   sx,
// }: TModalProps) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <BootstrapDialog
//         fullScreen
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//         sx={{ ...sx }}
//         TransitionComponent={Transition}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           {title}
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>{children}</DialogContent>
//       </BootstrapDialog>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open full-screen dialog
//       </Button>
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//       >
//         <AppBar sx={{ position: "relative" }}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//               Sound
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleClose}>
//               save
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <List>
//           <ListItemButton>
//             <ListItemText primary="Phone ringtone" secondary="Titania" />
//           </ListItemButton>
//           <Divider />
//           <ListItemButton>
//             <ListItemText
//               primary="Default notification ringtone"
//               secondary="Tethys"
//             />
//           </ListItemButton>
//         </List>
//       </Dialog>
//     </React.Fragment>
//   );
// }

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogContent, DialogTitle, SxProps } from "@mui/material";
import { BootstrapDialog } from "./PHModal";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PHFullScreenModal({
  open = false,
  setOpen,
  title = "",
  children,
  sx,
}: TModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ ...sx }}
        TransitionComponent={Transition}
      >
        <DialogTitle
          sx={{ color: "primary.main", background: "#f4f7fe" }}
          id="customized-dialog-title"
        >
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ mx: 1 }}>{children}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
