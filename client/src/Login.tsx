export default function Login({ onLogin }) {
  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      credentials: "include"
    });
    onLogin(await res.json());
  };

  return (
    <form onSubmit={submit}>
      <input name="username"/>
      <input name="password" type="password"/>
      <button>Login</button>
    </form>
  );
}
