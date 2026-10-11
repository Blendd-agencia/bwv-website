export default function NotFound() {
  return (
    <main style={{minHeight:"100vh",background:"#071d37",color:"#fff",display:"grid",placeItems:"center",fontFamily:"DM Sans, Arial, sans-serif",padding:"40px"}}>
      <div style={{width:"min(900px,100%)",textAlign:"center"}}>
        <img src="/brand/bwv-logo-negative.svg" alt="BWV Business & Tax Advisors" style={{width:"230px",height:"auto",margin:"0 auto 70px"}} />
        <div style={{fontSize:"12px",letterSpacing:".35em",textTransform:"uppercase",color:"#8fc6d8",marginBottom:"25px"}}>Error 404</div>
        <h1 style={{fontFamily:"Roboto Serif, Georgia, serif",fontWeight:400,fontSize:"clamp(64px,10vw,140px)",lineHeight:.88,letterSpacing:"-.05em",margin:"0 0 35px"}}>Page not found.</h1>
        <p style={{fontSize:"18px",color:"rgba(255,255,255,.7)",maxWidth:"560px",margin:"0 auto 40px"}}>The page you are looking for may have moved, changed address or no longer be available.</p>
        <a href="/" style={{display:"inline-flex",alignItems:"center",gap:"28px",height:"56px",padding:"0 28px",background:"#4c8aa2",color:"#fff",textDecoration:"none",fontWeight:700}}>Back to Homepage <span>↗</span></a>
      </div>
    </main>
  );
}
