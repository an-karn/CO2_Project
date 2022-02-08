import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white" style={{position: 'relative', clear: 'both', margin: '220px', width: '100%', marginLeft: '0px' }}>
    <div class="container p-4">
    <section class="mb-4">

    <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100011647605881" role="button"><i class="fab fa-facebook-f"></i></a>

    <a class="btn btn-outline-light btn-floating m-1" href="https://ankarnportfolio.netlify.app/" role="button"><i class="fab fa-google"></i></a>

    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ankit-karn-158a19162/" role="button"><i class="fab fa-linkedin-in"></i></a>

    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/an-karn" role="button"><i class="fab fa-github"></i></a>

    </section> 
    <section class="">
    <form action="mailto: an.karn@jacobs-university.de">
    <div class="row d-flex justify-content-center">
      <div class="col-auto">
        <p class="pt-2">
            <strong>Send mail for any queries</strong>
        </p>
      </div>
      <div class="col-md-5 col-12">
        <div class="form-outline form-white mb-4">
            <input type="text" id="form5Example21" class="form-control" placeholder='Write a message...' />
            <label class="form-label" for="form5Example21" > Message</label>
        </div>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-outline-light mb-4">
            Send
        </button> 
      </div>
    </div>
    </form>
    </section>
    </div>

    </footer>
  )};

export default Footer;
