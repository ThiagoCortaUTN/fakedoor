'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useRouter } from 'next/navigation';
import { VALID_ACCOUNTS } from '@/constants/auth';
import RoundedInput from '@/components/RoundedInput';

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setFormValues({
      email: '',
      password: '',
    });
    setError(false);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formValues;

    const accountExist = VALID_ACCOUNTS.some(
      (account) => account.username === email && account.password === password
    );

    if (!accountExist) {
      setError(true);
      return;
    } else {
      router.push('/lessons');
    }
  };

  const populateForm = () => {
    setFormValues({
      email: 'fakedoor@gmail.com',
      password: 'fakedoor',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setError(false);
  };

  return (
    <main className='h-screen'>
      <Grid2 container className='h-full'>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box className='p-8 sm:p-12 flex flex-col h-full'>
            <Image
              src='/images/logo.svg'
              width={100}
              height={100}
              alt='FakeDoor'
              className='absolute top-8 sm:top-12 left-8 sm:left-12'
            />

            <Box className='h-full flex flex-col justify-center gap-8'>
              <Typography
                variant='h4'
                className='font-bold flex gap-4 items-center'
              >
                Login
              </Typography>

              <form onSubmit={onSubmit}>
                <Box className='w-full flex flex-col gap-4'>
                  <RoundedInput
                    placeholder='E-Mail'
                    name='email'
                    type='email'
                    id='email'
                    required
                    error={error}
                    value={formValues.email}
                    onChange={handleInputChange}
                    autoComplete='off'
                  />

                  <RoundedInput
                    placeholder='Password'
                    name='password'
                    type='password'
                    id='password'
                    required
                    error={error}
                    value={formValues.password}
                    onChange={handleInputChange}
                    autoComplete='off'
                  />

                  {error && (
                    <Typography
                      variant='body2'
                      className='text-red-500 justify-center flex items-center gap-2'
                    >
                      <ErrorOutlineOutlinedIcon /> Error: User does not exist
                    </Typography>
                  )}

                  <Box className='w-full flex justify-center m-4'>
                    <Button
                      variant='contained'
                      color='primary'
                      size='large'
                      className='bg-gradient-to-r from-start to-end text-white py-2 px-8 rounded-full font-bold normal-case'
                      type='submit'
                    >
                      Login
                    </Button>

                    <Button
                      variant='text'
                      color='secondary'
                      size='large'
                      className='text-black0 py-2 px-8 rounded-full font-bold normal-case'
                      onClick={populateForm}
                    >
                      Populate
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 0, md: 6 }}
          className="bg-[url('/images/login.svg')] bg-no-repeat bg-cover bg-center"
        />
      </Grid2>
    </main>
  );
}
