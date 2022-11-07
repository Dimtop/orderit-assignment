import Text from '../text/text.component';
import { Link } from 'react-router-dom';

const Forbidden = (props: any) => {
  return (
    <div className="container">
      <Text>Δεν έχετε δικαίωμα προβολής αυτής της σελίδας.</Text>
      <Link to="/login">Συνδεθείτε</Link>
    </div>
  );
};

export default Forbidden;
