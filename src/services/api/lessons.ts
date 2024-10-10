export async function getLessons() {
  const response = await fetch(
    'https://corsproxy.io/?https%3A%2F%2Ffake-door-develop.azurewebsites.net%2Fapi%2Flessons%2Fget-simple'
  );

  return response?.json();
}
