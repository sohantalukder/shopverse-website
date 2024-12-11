import {
  InputBase,
  InputBaseProps,
  Stack,
  StackProps,
  Typography,
  TypographyStyle,
  styled
} from '@mui/material';
import { useEffect, useState } from 'react';
const CustomInputBase = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '10px',
  padding: '12px 16px 12px 16px',
  minWidth: '500px',
  [theme.breakpoints.down('md')]: {
    minWidth: '400px',
    padding: '8px 12px 8px 12px'
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '300px',
    padding: '6px 10px 6px 10px'
  }
}));
interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, name?: string) => void;
  name?: string;
  type?: 'email' | 'password' | 'text' | 'number';
  multiline?: boolean;
  disabled?: boolean;
  required?: boolean;
  rows?: string | number;
  labelStyle?: TypographyStyle;
  inputStyle?: InputBaseProps['sx'];
  containerStyle?: StackProps['sx'];
  autoComplete?: string;
}
const TextInput: React.FC<Props> = ({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  name,
  type,
  multiline,
  disabled,
  required,
  rows,
  labelStyle,
  inputStyle,
  containerStyle,
  autoComplete
}) => {
  const [inputValue, setInputValue] = useState<string>(value || defaultValue || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onChange) {
      onChange(value, name);
    }
  };
  useEffect(() => {
    setInputValue(value || defaultValue || '');
  }, [value, defaultValue]);
  return (
    <Stack spacing={0.5} sx={containerStyle}>
      {label && (
        <Typography variant="subtitle2" sx={labelStyle}>
          {label}
        </Typography>
      )}
      <CustomInputBase
        sx={inputStyle}
        onChange={handleChange}
        defaultValue={inputValue}
        placeholder={placeholder}
        type={type}
        rows={rows}
        required={required}
        multiline={multiline}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </Stack>
  );
};

export default TextInput;
