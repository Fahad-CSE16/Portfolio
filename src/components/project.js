import React from 'react';

const project = () => {
    return (
        <div style={{
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('1.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "top"
      }} >
            <h4 className="pt-5 text-white m-0">Project Works</h4>
            <div className="pt-2 text-white text-left " >
                <ol className="row m-0">
                    <div className="col-md-6 py-2 px-5">

                    
                    <li>
                      <p><b>Name:</b> <a target="_blank" href="https://desirebd.herokuapp.com/">Desirebd</a> </p>
                      <p className="text-justify"><b>Description:</b> This application matches teacher profiles qualifications and guardian requirements in posts and push notifications to the teacher and teacher can apply for that tuition. People can find to-let and give to-let via posts in To_Let section. People can like comment and reply in Tuition and To-let posts. This application matches matrimony profile information and other expectation profiles and people can find their best matches.</p>
                      <p><b>Tools:</b>Python with Django, HTML5, CSS, Bootstrap4.</p>
                      </li>
                      </div>
                      <div className="col-md-6 py-2 m-0  px-5">
                    <li>
                      <p><b>Name:</b> <a target="_blank"  href="https://github.com/Fahad-CSE16/SellOrBuy">SellOrBuy</a> </p>
                      <p className="text-justify"><b>Description:</b> People can sell or buy. Buyers can add products to cart and can buy those and Seller can get notification about his product order while buyer confirm order via email. Seller can make product order shipped or arrived and when product is shipped buyer will get notification about this.</p>
                      <p><b>Tools:</b>Python with Django, Vue.js, HTML5, CSS, Bootstrap4.</p>
                      </li>
                      </div>
                      <div className="col-md-6  py-2  px-5 m-0">
                    <li>
                      <p><b>Name:</b> <a target="_blank"  href="https://github.com/Fahad-CSE16/Medical-Store-Management-System-django">Medical Store Management System</a> </p>
                      <p className="text-justify"><b>Description:</b>Admin can add stock, update, make bill dynamically and then in the backend application will auto reduce products from the stock and give alert if any stock becomes empty.</p>
                      <p><b>Tools:</b>Python with Django, HTML5, CSS, Bootstrap4, Vue.js</p>
                      </li></div>
                </ol>
            </div>
        </div>
    );
};

export default project;