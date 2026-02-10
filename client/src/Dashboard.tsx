export default function Dashboard() {
  const upload = async (e) => {
    const form = new FormData();
    form.append("file", e.target.files[0]);
    await fetch("/api/datasets", { method:"POST", body:form, credentials:"include" });
  };

  return <input type="file" onChange={upload}/>;
}
