
document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesButton = document.getElementById('acceptCookies');


    if (!localStorage.getItem('cookieAccepted')) {
        cookieConsent.style.display = 'block';  
    }


    acceptCookiesButton.addEventListener('click', function () {
        localStorage.setItem('cookieAccepted', 'true'); 
        cookieConsent.style.display = 'none'; 
    });
});
import Excursions from "./Excursions";

function App() {
  return (
    <div>
      <Excursions />
    </div>
  );
}

export default App;
