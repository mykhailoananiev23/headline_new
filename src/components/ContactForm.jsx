import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SampleData from '../data/sampleData.json';
import Result from '../components/Result';
import HomePagdData_ from '../data/HomePagdData.json';

export default function ContactForm({ Text_Value }) {
  const {
    content
  } = SampleData;

  const {

    result

  } = HomePagdData_;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    val1111: '',    val2222: '',    val3333: '',    val4444: '',    val5555: '',    val6666: '',    val7777: '',    val8888: '',    name: '',

    email: '',
    subject: '',
    message: '',
  });


  ////////////////
  const [val1111, set1111] = useState('');
  const [val2222, set2222] = useState('');
  const [val3333, set3333] = useState('');
  const [val4444, set4444] = useState('');
  const [val5555, set5555] = useState('');
  const [val6666, set6666] = useState('');
  const [val7777, set7777] = useState('');
  const [val8888, set8888] = useState('');
  const[allValue, setallValue]=useState();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [flag, setFlag] = useState(false);
  const sendEmail = (e) => {
    setFlag(true);
    e.preventDefault();
    const formDataToSend = {
      val1111, val2222,  val3333,  val4444,  val5555,  val6666,  val7777,  val8888,   email,   message };
      
      console.log(formDataToSend)

      setallValue(formDataToSend);


    emailjs.sendForm('service_qzq79vl', 'template_d0wg7qh', e.target, 'it3rjs-7mF_gy-vYg')
      .then((result) => {
        console.log('Email sent successfully', result.text);
      }, (error) => {
        console.error('Email sending failed', error);
      });

    
  };




  return (
    <>
      <form  onSubmit={sendEmail} dir="rtl">

        <div className="row gx-3 gy-4">

          {/* ////////////1////////////// */}

          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">קהל נישה &#40; יחיד &#41; :</label>
              <input dir="rtl"
                name="name1111"
                placeholder=""
                className="form-control"
                type="text"
                value={val1111}
                onChange={(e) => set1111(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>"קהל היעד שלי הוא ____."</span><br></br>
              <label className="label">&#40;לדוגמה: משקיע מתחיל, מחבר ספרים אלקטרוני, מוכר בית, קונה בית וכו'&#41;</label>


            </div>
          </div>
          {/* ////////////2///////////// */}
          <div className="col-md-12">
            <div className="form-group" >
              <label className="form-label">נושא מילת המפתח העיקרי מספר 1 שלך:</label>
              <input dir="rtl"
                name="name2222"
                placeholder=""
                className="form-control"
                type="text"
                value={val2222}
                onChange={(e) => set2222(e.target.value)}
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
              <input dir="rtl"
                name="name3333"
                placeholder=""
                className="form-control"
                type="text"
                value={val3333}
                onChange={(e) => set3333(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>"הנושא העיקרי השני שלי הוא ____."</span><br></br>
              <label className="label">&#40;לדוגמה: בחירת מניות מנצחות, כתיבת ספרים אלקטרוניים, fsbo, ציד בתים וכו'.&#41;</label>
            </div>
          </div>
          {/* /////////////4///////////// */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">  מהי התוצאה הגדולה מספר 1 שהם רוצים?    &#40; צריך להתחיל בפועל     &#41; </label>
              <input dir="rtl"
                name="name4444"
                placeholder=""
                className="form-control"
                type="text"
                value={val4444}
                onChange={(e) => set4444(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>"מהי התוצאה הגדולה מספר 1 שהם רוצים?" &#40;VERB &#41;</span><br></br>
              <label className="label">&#40; לדוגמה: להיראות חטובים ושריריים, להיות יותר פרודקטיבים, להיראות נוכחות  &#41;</label>
            </div>
          </div>
          {/* /////////////5///////////// */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">&#40; צריך להתחיל בפועל &#41;מהי התוצאה הגדולה מספר 2 שהם רוצים? </label>
              <input dir="rtl"
                name="name5555"
                placeholder=""
                className="form-control"
                type="text"
                value={val5555}
                onChange={(e) => set5555(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>&#40; פועל &#41;"הקהל שלי באמת רוצה _____." </span><br></br>
              <label className="label">&#40;לדוגמה: להרוויח תשואה דו ספרתית על השקעות המניות שלך; ליצור הכנסה פסיבית מהמחאות תמלוגים של אמזון; מצא קונה מוסמך במסגרת הזמן שלך; לקבל תשלום חודשי שאתה יכול להרגיש טוב לגביו; וכו '&#41;</label>
            </div>
          </div>
          {/* /////////////6///////////// */}
          <div id="build_btn" className="col-md-12">
            <div className="form-group">
              <label className="form-label">מהו כאב שהם רוצים להימנע באזור זה?:</label>
              <input dir="rtl"
                name="name6666"
                placeholder=""
                className="form-control"
                type="text"
                value={val6666}
                onChange={(e) => set6666(e.target.value)}
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
              <input dir="rtl"
                name="name7777"
                placeholder=""
                className="form-control"
                type="text"
                value={val7777}
                onChange={(e) => set7777(e.target.value)}
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
              <input dir="rtl"
                name="name8888"
                placeholder=""
                className="form-control"
                type="text"
                value={val8888}
                onChange={(e) => set8888(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}> "תראה תוצאות ב_____."</span><br></br>
              <label className="label">&#40; לדוגמה: 30 ימים; 15 דקות או פחות; שבוע אחד; וכו ' &#41;</label>
            </div>
          </div>



          {/* <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input dir="rtl"
              name="emailEmai"
              placeholder=""
              className="form-control"
              type="email"
              value={evalEmai}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div> */}

          {/* <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name=Mess"message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={mesvalMess}
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
      {
        flag?console.log(allValue):null
      }
      {
        flag ?
          <Result data={result} result_text={content} SetallValue={allValue} /> : null
      }
    </>
  );
}