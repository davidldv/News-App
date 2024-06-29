const News = () => {
  return (
    <article className="flex flex-col overflow-hidden bg-white rounded shadow">
        <div className="h-52">
          <img className="object-cover object-center w-full h-full" src="article.png" alt="news" />
        </div>
        <div className="flex-1 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-red-500">Lenguaje</h3>
          <h2 className="text-xl font-semibold leading-tight text-slate-700">Titulo</h2>
          <p className="hidden md:block text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim culpa suscipit, nihil quaerat magni itaque voluptas exercitationem ratione, mollitia earum hic! Accusantium nobis eum, dignissimos unde doloremque eveniet illum.</p>
        </div>
        <div className="flex p-5 space-x-2">
          <img className="w-10 h-10 rounded-full" src="avatar.png" alt="user" />
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold leading-4 text-slate-700">User</span>
            <span className="text-sm text-slate-600">Date</span>
          </div>
        </div>
      </article>
  )
}

const Article = () => {
  return (
    <main className="grid max-w-6xl gap-4 p-4 mx-auto mt-4 md:grid-cols-2 lg:grid-cols-3">
      <News />
      <News />
      <News />  
    </main>
  )
}

export default Article
