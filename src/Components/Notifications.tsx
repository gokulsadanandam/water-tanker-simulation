import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import {useStoreContext} from '../+state/water.tankerprovider.context'
import IconButton from "@material-ui/core/IconButton/IconButton";
import { CloseRounded } from '@material-ui/icons'

export interface NotificationState extends SnackbarOrigin {
  open: boolean;
}

export default function WaterTankerMessages() {

  const { state , dispatch } = useStoreContext();
  const { Notification } = state;

  const handleClose = () => dispatch({ "type" : "watertanker/closeNotificationMessage" })

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical : "bottom", horizontal : "right" }}
        open={Notification.open}
        onClose={handleClose}
        message={Notification.message}
        key={"notification-message"}
        autoHideDuration={3000}
        color="primary"
        action={
          <IconButton color="inherit" size="small" onClick={handleClose} >
            <CloseRounded fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
}
