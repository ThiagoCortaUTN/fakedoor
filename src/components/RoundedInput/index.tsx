import TextField, { TextFieldProps } from '@mui/material/TextField';

const RoundedInput = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      variant='outlined'
      className='rounded-lg'
      slotProps={{
        input: { className: 'rounded-full' },
      }}
    />
  );
};

export default RoundedInput;
