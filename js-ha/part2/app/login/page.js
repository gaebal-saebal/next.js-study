export default function Login() {
  return (
    <form action='/api/login/new' method='POST'>
      <input name='id' placeholder='아이디' />
      <input name='password' placeholder='비밀번호' />
      <button type='submit'>버튼</button>
    </form>
  );
}
