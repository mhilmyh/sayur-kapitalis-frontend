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
  value = null,
}) => {
  return (
    <Dialog open={value} maxWidth="sm" disableBackdropClick={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContentText>{text}</DialogContentText>
      <DialogActions>
        <Button onClick={onClickNo}>{textNo}</Button>
        <Button onClick={onClickYes}>{textYes}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(AreYouSureDialog);
