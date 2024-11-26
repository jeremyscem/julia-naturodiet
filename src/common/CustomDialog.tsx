import { Dialog } from "@mui/material";

interface CustomDialogProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const CustomDialog = ({ children, open, onClose }: CustomDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
};

export default CustomDialog;
