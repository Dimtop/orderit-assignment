import Text from '../text/text.component';
import './dashboard.css';

const Dashboard = (props: any) => {
  return (
    <div id="dashboard" className="container">
      <Text size="1.5rem" weight="bold">
        Welcome to OrderIt.
      </Text>
      <Text weight="bold">
        Use the menu in the upper left corner to navigate to the app's features.
      </Text>
    </div>
  );
};

export default Dashboard;
