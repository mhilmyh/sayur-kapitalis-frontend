import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CircularLoad from "../loading/CircularLoad";
import AreYouSureDialog from "../dialog/AreYouSureDialog";

const DialogWrapper = ({
  title = "",
  open = false,
  onClose = () => {},
  children,
  textYes = "",
  textNo = "",
  withButtonYes = true,
  withButtonNo = true,
  onClickYes = () => {},
}) => {
  const loading = useSelector((state) => state.loading);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const [openSure, setOpenSure] = React.useState(false);

  const handleClickYes = (event) => {
    onClickYes(event);
  };
  const handleClickAreYouSure = (event) => {
    setOpenSure(true);
  };
  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth={true}
      disableBackdropClick={true}
    >
      {!!title === true && (
        <DialogTitle className="bg-green-500 text-gray-100">
          {title}
        </DialogTitle>
      )}
      <DialogContent className="p-0" dividers={true}>
        {children}
      </DialogContent>
      <DialogActions>
        {loading ? (
          <React.Fragment>
            <CircularLoad></CircularLoad>
          </React.Fragment>
        ) : (
          <div className="flex justify-center items-center w-full">
            {!!withButtonNo && (
              <button
                className="w-1/2 bg-gray-500 text-white p-2 mr-1 rounded shadow-md font-semibold"
                onClick={onClose}
              >
                {textNo ? textNo : "Tutup"}
              </button>
            )}

            {!!withButtonYes && (
              <button
                className="w-1/2 bg-green-500 text-white p-2 ml-1 rounded shadow-md font-semibold"
                onClick={handleClickAreYouSure}
              >
                {textYes ? textYes : "Lanjutkan"}
              </button>
            )}
          </div>
        )}
      </DialogActions>
      <AreYouSureDialog
        open={openSure}
        onClickNo={() => setOpenSure(false)}
        onClickYes={handleClickYes}
      ></AreYouSureDialog>
    </Dialog>
  );
};

export default React.memo(DialogWrapper);
