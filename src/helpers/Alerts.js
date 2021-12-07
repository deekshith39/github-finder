import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class Alerts {
    success(message) {
        toast.success(message, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 })
    }
    error(message) {
        toast.error(message, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 })
    }
}

const alert = new Alerts();

export default alert;