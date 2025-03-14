import dialog from '@/interfaces/dialog';
import useModal from '@/hooks/useModal';
import Button from '@mui/material/Button/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function SimpleDialog(props: dialog) {

    const { hideModal } = useModal();

    return (
        <Dialog
        open={true}
      >
        <DialogTitle>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideModal}>{props.cancel_text}</Button>
          <Button variant="contained" onClick={props.action_func} autoFocus>
            {props.action_text}
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default SimpleDialog;