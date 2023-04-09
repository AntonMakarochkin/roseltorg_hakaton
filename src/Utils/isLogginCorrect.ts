export function isLogginCorrect(login: string) {
  if (login.length > 3) {
    return true;
  }
  return false;
  
}