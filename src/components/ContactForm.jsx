import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // // Handler for input field changes
  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const onSubmit = async event => {
  //   event.preventDefault();
  //   setLoading(true);
  //   const formData = new FormData(event.target);

  //   formData.append('access_key', '6d7bc3fc-6190-43c5-8298-89ac5ef7494f');

  //   const object = Object.fromEntries(formData);
  //   // if (res.success) {
  //   //   setFormData({ name: '', email: '', subject: '', message: '' });
  //   //   setLoading(false);
  //   // }
  // };


  ////////////////
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qzq79vl', 'template_d0wg7qh', e.target, 'it3rjs-7mF_gy-vYg')
      .then((result) => {
        console.log('Email sent successfully', result.text);
      }, (error) => {
        console.error('Email sending failed', error);
      });

    setName('');
    setEmail('');
    setMessage('');
  };




  return (
    // <form id="contact-form" onSubmit={onSubmit}>
    <form onSubmit={sendEmail}>

      <div className="row gx-3 gy-4">

        {/* ////////////1////////////// */}

        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">קהל נישה &#40; יחיד &#41; :</label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}>"קהל היעד שלי הוא ____."</span><br></br>
            <label className="label">&#40;לדוגמה: משקיע מתחיל, מחבר ספרים אלקטרוני, מוכר בית, קונה בית וכו'&#41;</label>


          </div>
        </div>
        {/* ////////////2///////////// */}
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">נושא מילת המפתח העיקרי מספר 1 שלך:</label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}>"הנושא העיקרי שלי הוא ____."</span><br></br>
            <label className="label">&#40;לדוגמה: השקעות במניות, שיווק ספרים אלקטרוניים, למכירה על ידי הבעלים, קניית בית וכו'.&#41;</label>
          </div>
        </div>

        {/* /////////////3///////////// */}
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">נושא מילת המפתח העיקרי מספר 2 שלך:</label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}>"הנושא העיקרי השני שלי הוא ____."</span><br></br>
            <label className="label">&#40;לדוגמה: בחירת מניות מנצחות, כתיבת ספרים אלקטרוניים, fsbo, ציד בתים וכו'.&#41;</label>
          </div>
        </div>
        {/* /////////////4///////////// */}
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">מהי התוצאה הגדולה מספר 1 שהם רוצים? &#40;מתחיל ב-VERB &#41;</label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}>"מהי התוצאה הגדולה מספר 1 שהם רוצים?" &#40;VERB &#41;</span><br></br>
            <label className="label">&#40;לדוגמה: בחר יותר מניות מניבות כסף; פרסם ספר אלקטרוני רווחי להחריד שלך; למכור את הבית שלך בדולר העליון; לקנות בית חלומות משלך; וכו '&#41;</label>
          </div>
        </div>
        {/* /////////////5///////////// */}
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">&#40;מתחיל ב-VERB &#41;מהי התוצאה הגדולה מספר 2 שהם רוצים? </label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}>&#40;פועל &#41;"הקהל שלי באמת רוצה _____." </span><br></br>
            <label className="label">&#40;לדוגמה: להרוויח תשואה דו ספרתית על השקעות המניות שלך; ליצור הכנסה פסיבית מהמחאות תמלוגים של אמזון; מצא קונה מוסמך במסגרת הזמן שלך; לקבל תשלום חודשי שאתה יכול להרגיש טוב לגביו; וכו '&#41;</label>
          </div>
        </div>
        {/* /////////////6///////////// */}
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">מהו כאב שהם רוצים להימנע באזור זה?:</label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}>    &#40;פועל המסתיים ב"ינג"&#41; "הקהל שלי באמת רוצה להימנע מ______." </span><br></br>
            <label className="label">&#40;לדוגמא: להפסיד כסף על מניות, לנסות לכתוב הכל בעצמך, לשלם עמלת מתווך, לבלות שבועות במכונית ולהסתכל על בתים וכו'.&#41;</label>
          </div>
        </div>

        {/* /////////////7///////////// */}
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label"> מהו מחסום דרכים שהם רואים כמעכב אותם מהמטרה שלהם?:  </label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}> משלים את ההצהרה "גם אם ______"</span><br></br>
            <label className="label">&#40; לדוגמה: מעולם לא השקעת במניות לפני כן, אתה חושב שאתה לא יכול לכתוב, אין לך ניסיון שיווקי או מכירה, יש לך אשראי פחות מושלם וכו'.  &#41;</label>
          </div>
        </div>
       { /* /////////////8///////////// */}
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">באיזה מסגרת זמן תוכל לספק תוצאות?: </label>
            <input
              name="name"
              placeholder=""
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span style={{ color: 'white' }}> "תראה תוצאות ב_____."</span><br></br>
            <label className="label">&#40; לדוגמה: 30 ימים; 15 דקות או פחות; שבוע אחד; וכו ' &#41;</label>
          </div>
        </div>



        {/* <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              name="email"
              placeholder=""
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div> */}

        {/* <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div> */}
        <div className="col-md-12">
          <div className="send">
            <button className={`px-btn w-100 ${loading ? 'disabled' : ''}`} type="submit"  >
              {loading ? 'בהפקה...' : 'ליצר'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
