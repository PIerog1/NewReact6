function PageLayout({ sidebar, content }) {
  return (
    <>
      <header className="header">
        <h1>Nagłowek</h1>
      </header>

      <div className="layout">
        {sidebar}
        {content}
      </div>

      <footer className="footer">
         Stopka
      </footer>
    </>
  );
}

export default PageLayout;