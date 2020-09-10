import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
} from "@material-ui/core";

const AreYouSureDialog = ({
  title = "Lanjutkan ?",
  text = "Silakan untuk melanjutkan apabila sudah tidak ada yang ingin diubah lagi",
  textNo = "Tidak",
  textYes = "Ya",
  onClickYes = () => {},
  onClickNo = () => {},
  open = false,
}) => {
  return (
    <Dialog open={open} maxWidth="sm" disableBackdropClick={true}>
      <DialogTitle color="primary">{title}</DialogTitle>
      <DialogContentText component="p" className="px-8 py-2">
        {text}
      </DialogContentText>
      <DialogActions>
        <Button fullWidth={true} onClick={onClickNo}>
          {textNo}
        </Button>
        <Button fullWidth={true} onClick={onClickYes}>
          {textYes}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(AreYouSureDialog);
