import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { CircularProgress, styled, useTheme } from '@mui/material';
interface Props {
  loading?: boolean;
  onClick?: () => void;
  loadingIndicatorColor?: string;
  text?: string;
  buttonStyle?: LoadingButtonProps['sx'];
}
const CustomLoadingButton = styled(LoadingButton)(({ theme }) => ({
  padding: '12px 16px 12px 16px',
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textTransform: 'capitalize'
}));
const CustomButton: React.FC<Props> = ({
  loading,
  onClick,
  loadingIndicatorColor,
  text,
  buttonStyle
}) => {
  const theme = useTheme();
  return (
    <CustomLoadingButton
      loading={loading}
      onClick={onClick}
      sx={buttonStyle}
      loadingIndicator={
        <CircularProgress
          size={24}
          sx={{ color: loadingIndicatorColor || theme.palette.common.white }}
        />
      }>
      {text}
    </CustomLoadingButton>
  );
};

export default CustomButton;
