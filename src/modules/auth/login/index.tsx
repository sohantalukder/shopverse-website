import { Box, Stack, Typography } from '@mui/material';
import imageLink from '../../../assets/images/imageLink';
import TextInput from '../../../components/text-input/TextInput.c';
import CustomButton from '../../../components/custom-button/CustomButton.c';
import { Link } from 'react-router-dom';
import routeName from '../../../router/routeName';

const Login: React.FC = () => {
  return (
    <Stack direction={'row'} sx={{ height: '100vh' }}>
      <Box
        component="img"
        src={imageLink.loginBackground}
        sx={{
          display: { xs: 'none', lg: 'block' },
          width: { md: '50%' },
          objectFit: 'cover'
        }}
        alt="Login Background Image"
      />
      <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
        <Box>
          <Typography variant="h3" fontWeight={'700'}>
            Welcome 👋
          </Typography>
          <Typography variant="subtitle1" mt={0.5} color={'text.secondary'}>
            Please login here
          </Typography>
          <Box mt={4}>
            <Stack spacing={2}>
              <TextInput
                placeholder="Enter your email"
                label="Email Address"
                type="email"
                autoComplete="email"
                required
              />
              <TextInput
                placeholder="Enter your password"
                label="Password"
                type="password"
                required
              />
              <Stack spacing={2} direction={'row'} justifyContent={'space-between'} width={'100%'}>
                <Link to={routeName.forgotPassword} style={{ textDecoration: 'none' }}>
                  <Typography variant="subtitle2" color={'text.primary'}>
                    Forgot password
                  </Typography>
                </Link>
                <Stack direction={'row'} spacing={0.5}>
                  <Typography variant="subtitle2" color={'text.secondary'}>
                    Don't have an account?
                  </Typography>
                  <Link to={routeName.signUp} style={{ textDecoration: 'none' }}>
                    <Typography variant="subtitle2" color={'primary'}>
                      Sign up
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
              <CustomButton text="Login" />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Login;
