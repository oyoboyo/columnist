export default function Page({ children }) {
  return (
    <main className="page-main container">
      <div className="row align-items justify-content-center">
        {children}
      </div>
    </main>
  );
}
