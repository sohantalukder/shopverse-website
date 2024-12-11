import { Box, Stack, Typography } from '@mui/material';
import imageLink from '../../../assets/images/imageLink';
import TextInput from '../../../components/text-input/TextInput.c';

const Login: React.FC = () => {
  return (
    <Stack direction={'row'} sx={{ height: '100vh' }}>
      <Box
        component="img"
        src={imageLink.loginBackground}
        sx={{
          display: { xs: 'none', lg: 'block' }, // Hide on xs and sm, show on md and up
          width: { md: '50%' }, // 50% width on md and larger screens
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
              <TextInput />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Login;
