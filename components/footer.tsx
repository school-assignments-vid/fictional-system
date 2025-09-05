export function Footer() {
  return (
    <footer className="min-h-80 bg-muted grid grid-cols-1 md:grid-cols-4 text-white font-headline py-12 px-30 gap-10">
      <div className="flex flex-col gap-10">
        <span className="font-bold text-2xl text-primary">
          Tag på opdagelse:
        </span>
        <ol className="gap-4 flex flex-col">
          <li>
            <a href="#">Jobkompasset</a>
          </li>
          <li>
            <a href="#">Lærepladsen</a>.dk
          </li>
          <li>
            <a href="#">UddannelsesGuiden</a>
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-10">
        <span className="font-bold text-2xl text-primary">Links</span>
        <ol className="gap-4 flex flex-col">
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Cookiepolitik</a>
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-10">
        <span className="font-bold text-2xl text-primary">
          Erhvervsskolernes Elevorganisation har lavet et projekt om vejen til
          Erhvervsuddannelse:
        </span>
        <a href="#">Klik her for at besøge &quot;Vejen til EUD&quot;</a>
      </div>
      <div className="flex flex-col">
        <span>En del af:</span>
      </div>
    </footer>
  );
}
