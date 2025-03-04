import Alert from '@mui/material/Alert';
import alert from '@/interfaces/alert';
import Snackbar from '@mui/material/Snackbar/Snackbar';
import useModal from '@/hooks/useModal';

function SimpleAlert(props: alert) {

    const { hideModal } = useModal();

    return (
        <Snackbar open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={hideModal}>
            <Alert
                severity={props.severity}
                sx={{ width: '100%' }}
                onClose={hideModal}
            >
                {props.content}
            </Alert>
        </Snackbar>
    );
}

export default SimpleAlert