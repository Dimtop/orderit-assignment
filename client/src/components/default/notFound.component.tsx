import Text from '../text/text.component';
import { Link } from 'react-router-dom';

const NotFound = (props: any) => {
  return (
    <div className="container">
      <Text>Η σελίδα που ζητήσατε δεν βρέθηκε.</Text>
      <Link to="/">Επιστρέψτε στην αρχή</Link>
    </div>
  );
};

export default NotFound;
