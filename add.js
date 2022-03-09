function sendPost(){
    const data = JSON.stringify({
        nev: document.getElementById("nev").value,
        email: document.getElementById("email").value,
        cim:document.getElementById("cim").value,
        kor:document.getElementById("kor").value
      });
      
      navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
      console.log(data);
    }