import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, styled } from '@mui/material';
import routeName from '../../../router/routeName';
const MyBox = styled(Container)({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
});
const NotFound = () => {
  return (
    <MyBox>
      <Typography variant="h1" sx={{ fontSize: '6rem', textAlign: 'center' }}>
        404!
      </Typography>
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Sorry, Page Not Found!
      </Typography>
      <Button href={routeName.default} size="large" variant="text" sx={{ textAlign: 'center' }}>
        Go to Home
      </Button>
    </MyBox>
  );
};

export default NotFound;
