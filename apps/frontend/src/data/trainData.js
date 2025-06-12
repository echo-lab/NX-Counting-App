import train1 from "../assests/train1.png";
import train2 from "../assests/train2.png";
import train3 from "../assests/train3.png";
import train4 from "../assests/train4.png";
import train5 from "../assests/train5.png";
import chocoChip from "../assests/chocoChip.png";
import mm from "../assests/m&m.png";
import tornadoCookie from "../assests/tornadoCookie.png";
import seashellCookie from "../assests/seashellCookie.png";
import multiCookie from "../assests/multiCookie.png";
import Cookie from "../assests/Cookie.png";
import rasinCookie from "../assests/rasinCookie.png";

const trainData = {
  pages: [
    {
      message:["Do you know who this is? That's right! It's Cookie Monster! What color is Cookie Monster? Blue! And here is Cookie Monster's blue tray."],
      img: train1,
      className: "blueTray",
    },
    {
      message:["He has some cookies. Some cookies have chocolate chips on them. Some are plain. Some are big. And some are small."],
      img: train2,
      className: "blueTray",
    },{
      message:["And this is Big Bird and his trays. What's the color of the left tray? Green! And what's the color of the right tray? Purple! Great job!"],
      img: train3,
      className: "blueTray",
    },
    {
      message:["Now, you might not know this but Big Bird is a HUGE copycat and always wants to copy Cookie Monster. When Cookie Monster was looking for a snack, Big Bird saw Cookie Monster pick chocolate chip cookies."],
      img: train4,
      className: "backgroundPic",
    },
    {
      message:["So then when Big Bird chose his snack, he copied Cookie Monster and also picked chocolate chip cookies."],
      img: train5,
      className: "backgroundPic",
    },
    {
      message:["Now look! Cookie Monster has a chocolate cookie. Which of these trays also has a chocolate cookie? Green? or purple?"],
      cookies: [
        {
          id: 1,
          img: chocoChip,
          top: "140px",
          left: "40px",
        },
      ],
      greenTray: [
        {
          biscuits: [
            {
              id: 1,
              img: mm,
              top: "140px",
              left: "80px",
            },
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
            {
              id: 1,
              img: tornadoCookie,
              top: "140px",
              left: "90px",
            },
          ],
        },
      ],
    },
    {
      message:["Remember, Big Bird always puts his cookies in one of these trays, either the green or the purple tray."],
      cookies: [
      ],
      greenTray: [
        {
          biscuits: [
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
          ],
        },
      ],
    },
    {
      message:[" Cookie Monster has 2 cookies. Can Big Bird also have 2 cookies? Which tray has 2 cookies? Green? or purple?"],
      cookies: [
        {
          id: 1,
          img: seashellCookie,
          top: "50px",
          left: "20px",
        },
        {
          id: 2,
          img: seashellCookie,
          top: "200px",
          left: "120px",
        },
      ],
      greenTray: [
        {
          biscuits: [
            {
              id: 1,
              img: multiCookie,
              top: "140px",
              left: "80px",
            },
            {
              id: 2,
              img: multiCookie,
              top: "220px",
              left: "160px",
            },
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
            {
              id: 1,
              img: multiCookie,
              top: "220px",
              left: "160px",
            },
          ],
        },
      ],
    },
    {
      message:["Cookie Monster has 1 cookie. Can Big Bird also have 1 cookie? Which tray has 1 cookie? Green? or purple?"],
      cookies: [
        {
          id: 1,
          img: seashellCookie,
          top: "170px",
          left: "90px",
        },
      ],
      greenTray: [
        {
          biscuits: [
            {
              id: 1,
              img: multiCookie,
              top: "140px",
              left: "80px",
            },
            {
              id: 2,
              img: multiCookie,
              top: "80px",
              left: "160px",
            },
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
            {
              id: 1,
              img: multiCookie,
              top: "80px",
              left: "160px",
            },
          ],
        },
      ],
    },
    {
      message:[" Cookie Monster has 10 cookies. Can Big Bird also have 10 cookies? Which tray has 10 cookies? Green? or purple?"],
      cookies: [
        {
          id: 1,
          img: Cookie,
          top: "25px",
          left: "40px",
        },
        {
          id: 2,
          img: Cookie,
          top: "20px",
          left: "150px",
        },
        {
          id: 3,
          img: Cookie,
          top: "90px",
          left: "80px",
        },
        {
          id: 4,
          img: Cookie,
          top: "80px",
          left: "170px",
        },
        {
          id: 5,
          img: Cookie,
          top: "140px",
          left: "20px",
        },
        {
          id: 6,
          img: Cookie,
          top: "140px",
          left: "160px",
        },
        {
          id: 7,
          img: Cookie,
          top: "195px",
          left: "60px",
        },
        {
          id: 8,
          img: Cookie,
          top: "210px",
          left: "180px",
        },
        {
          id: 9,
          img: Cookie,
          top: "260px",
          left: "40px",
        },
        {
          id: 10,
          img: Cookie,
          top: "290px",
          left: "150px",
        },
      ],
      greenTray: [
        {
          biscuits: [
            {
              id: 1,
              img: rasinCookie,
              top: "10px",
              left: "160px",
            },
            {
              id: 2,
              img: rasinCookie,
              top: "30px",
              left: "40px",
            },
            {
              id: 3,
              img: rasinCookie,
              top: "70px",
              left: "120px",
            },
            {
              id: 4,
              img: rasinCookie,
              top: "100px",
              left: "200px",
            },
            {
              id: 5,
              img: rasinCookie,
              top: "125px",
              left: "50px",
            },
            {
              id: 6,
              img: rasinCookie,
              top: "160px",
              left: "160px",
            },
            {
              id: 7,
              img: rasinCookie,
              top: "190px",
              left: "80px",
            },
            {
              id: 8,
              img: rasinCookie,
              top: "220px",
              left: "180px",
            },
            {
              id: 9,
              img: rasinCookie,
              top: "270px",
              left: "140px",
            },
            {
              id: 10,
              img: rasinCookie,
              top: "290px",
              left: "50px",
            },
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
            {
              id: 1,
              img: rasinCookie,
              top: "25px",
              left: "50px",
            },
            {
              id: 2,
              img: rasinCookie,
              top: "90px",
              left: "150px",
            },
            {
              id: 3,
              img: rasinCookie,
              top: "160px",
              left: "50px",
            },
            {
              id: 4,
              img: rasinCookie,
              top: "200px",
              left: "150px",
            },
            {
              id: 5,
              img: rasinCookie,
              top: "260px",
              left: "50px",
            },
          ],
        },
      ],
    },
    {
      message:[" Cookie Monster has 5 cookies. Can Big Bird also have 5 cookies? Which tray has 5 cookies? Green? or purple?"],
      cookies: [
        {
          id: 1,
          img: Cookie,
          top: "25px",
          left: "40px",
        },
        {
          id: 2,
          img: Cookie,
          top: "70px",
          left: "150px",
        },
        {
          id: 3,
          img: Cookie,
          top: "130px",
          left: "50px",
        },
        {
          id: 4,
          img: Cookie,
          top: "180px",
          left: "170px",
        },
        {
          id: 5,
          img: Cookie,
          top: "250px",
          left: "70px",
        },
      ],
      greenTray: [
        {
          biscuits: [
            {
              id: 1,
              img: Cookie,
              top: "10px",
              left: "100px",
            },
            {
              id: 2,
              img: Cookie,
              top: "50px",
              left: "20px",
            },
            {
              id: 3,
              img: Cookie,
              top: "40px",
              left: "190px",
            },
            {
              id: 4,
              img: Cookie,
              top: "90px",
              left: "100px",
            },
            {
              id: 5,
              img: Cookie,
              top: "140px",
              left: "20px",
            },
            {
              id: 6,
              img: Cookie,
              top: "140px",
              left: "160px",
            },
            {
              id: 7,
              img: Cookie,
              top: "195px",
              left: "60px",
            },
            {
              id: 8,
              img: Cookie,
              top: "200px",
              left: "180px",
            },
            {
              id: 9,
              img: Cookie,
              top: "260px",
              left: "40px",
            },
            {
              id: 10,
              img: Cookie,
              top: "290px",
              left: "150px",
            },
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
            {
              id: 1,
              img: Cookie,
              top: "25px",
              left: "150px",
            },
            {
              id: 2,
              img: Cookie,
              top: "90px",
              left: "50px",
            },
            {
              id: 3,
              img: Cookie,
              top: "150px",
              left: "140px",
            },
            {
              id: 4,
              img: Cookie,
              top: "200px",
              left: "50px",
            },
            {
              id: 5,
              img: Cookie,
              top: "260px",
              left: "150px",
            },
          ],
        },
      ],
    },
    {
      message:[" Cookie Monster has 5 cookies. Can Big Bird also have 5 cookies? Which tray has 5 cookies? Green? or purple?"],
      cookies: [
        {
          id: 1,
          img: Cookie,
          top: "25px",
          left: "40px",
        },
        {
          id: 2,
          img: Cookie,
          top: "70px",
          left: "150px",
        },
        {
          id: 3,
          img: Cookie,
          top: "140px",
          left: "40px",
        },
        {
          id: 4,
          img: Cookie,
          top: "180px",
          left: "170px",
        },
        {
          id: 5,
          img: Cookie,
          top: "270px",
          left: "90px",
        },
      ],
      greenTray: [
        {
          biscuits: [
            {
              id: 1,
              img: Cookie,
              top: "25px",
              left: "90px",
            },
            {
              id: 2,
              img: Cookie,
              top: "140px",
              left: "50px",
            },
            {
              id: 3,
              img: Cookie,
              top: "130px",
              left: "160px",
            },
            {
              id: 4,
              img: Cookie,
              top: "220px",
              left: "170px",
            },
            {
              id: 5,
              img: Cookie,
              top: "260px",
              left: "50px",
            },
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
            {
              id: 1,
              img: Cookie,
              top: "30px",
              left: "40px",
            },
            {
              id: 2,
              img: Cookie,
              top: "10px",
              left: "150px",
            },
            {
              id: 3,
              img: Cookie,
              top: "90px",
              left: "40px",
            },
            {
              id: 4,
              img: Cookie,
              top: "70px",
              left: "150px",
            },
            {
              id: 5,
              img: Cookie,
              top: "150px",
              left: "40px",
            },
            {
              id: 6,
              img: Cookie,
              top: "140px",
              left: "160px",
            },
            {
              id: 7,
              img: Cookie,
              top: "210px",
              left: "80px",
            },
            {
              id: 8,
              img: Cookie,
              top: "230px",
              left: "180px",
            },
            {
              id: 9,
              img: Cookie,
              top: "260px",
              left: "40px",
            },
            {
              id: 10,
              img: Cookie,
              top: "290px",
              left: "150px",
            },
          ],
        },
      ],
    },
    {
      message:[" Cookie Monster has 10 cookies. Can Big Bird also have 10 cookies? Which tray has 10 cookies? Green? or purple?"],
      cookies: [
        {
          id: 1,
          img: Cookie,
          top: "30px",
          left: "10px",
        },
        {
          id: 2,
          img: Cookie,
          top: "10px",
          left: "180px",
        },
        {
          id: 3,
          img: Cookie,
          top: "90px",
          left: "90px",
        },
        {
          id: 4,
          img: Cookie,
          top: "120px",
          left: "170px",
        },
        {
          id: 5,
          img: Cookie,
          top: "150px",
          left: "20px",
        },
        {
          id: 6,
          img: Cookie,
          top: "195px",
          left: "95px",
        },
        {
          id: 7,
          img: Cookie,
          top: "200px",
          left: "180px",
        },
        {
          id: 8,
          img: Cookie,
          top: "280px",
          left: "20px",
        },
        {
          id: 9,
          img: Cookie,
          top: "320px",
          left: "90px",
        },
        {
          id: 10,
          img: Cookie,
          top: "290px",
          left: "170px",
        },
      ],
      greenTray: [
        {
          biscuits: [
            {
              id: 1,
              img: Cookie,
              top: "25px",
              left: "170px",
            },
            {
              id: 2,
              img: Cookie,
              top: "60px",
              left: "90px",
            },
            {
              id: 3,
              img: Cookie,
              top: "120px",
              left: "50px",
            },
            {
              id: 4,
              img: Cookie,
              top: "160px",
              left: "170px",
            },
            {
              id: 5,
              img: Cookie,
              top: "260px",
              left: "70px",
            },
          ],
        },
      ],
      purpleTray: [
        {
          biscuits: [
            {
              id: 1,
              img: Cookie,
              top: "10px",
              left: "60px",
            },
            {
              id: 2,
              img: Cookie,
              top: "20px",
              left: "170px",
            },
            {
              id: 3,
              img: Cookie,
              top: "90px",
              left: "40px",
            },
            {
              id: 4,
              img: Cookie,
              top: "80px",
              left: "140px",
            },
            {
              id: 5,
              img: Cookie,
              top: "160px",
              left: "50px",
            },
            {
              id: 6,
              img: Cookie,
              top: "140px",
              left: "150px",
            },
            {
              id: 7,
              img: Cookie,
              top: "200px",
              left: "140px",
            },
            {
              id: 8,
              img: Cookie,
              top: "270px",
              left: "40px",
            },
            {
              id: 9,
              img: Cookie,
              top: "250px",
              left: "190px",
            },
            {
              id: 10,
              img: Cookie,
              top: "300px",
              left: "120px",
            },
          ],
        },
      ],
    },
  ],
};

export default trainData;
