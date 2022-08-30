export default function Main({ children }) {
  return (
    <main className="page-main container">
      <div className="row align-items justify-content-center">
        {children}
      </div>
    </main>
  );
}
