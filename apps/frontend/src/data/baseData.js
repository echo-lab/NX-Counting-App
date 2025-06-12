import Cookie from "../assests/Cookie.png";
import rasinCookie from "../assests/rasinCookie.png";
import creamCookie from "../assests/creamCookie.png";
import heartCookie from "../assests/heartCookie.png";
import multiCookie from "../assests/multiCookie.png";
import shellCookie from "../assests/seashellCookie.png";

// Define counting cases
// Maybe make this more dynamic?
const baseData ={
    pages: [
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
                    top: "5px",
                    left: "40px",
                  },
                  {
                    id: 2,
                    img: rasinCookie,
                    top: "60px",
                    left: "40px",
                  },
                  {
                    id: 3,
                    img: rasinCookie,
                    top: "50px",
                    left: "130px",
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
                    left: "180px",
                  },
                  {
                    id: 7,
                    img: rasinCookie,
                    top: "190px",
                    left: "50px",
                  },
                  {
                    id: 8,
                    img: rasinCookie,
                    top: "220px",
                    left: "140px",
                  },
                  {
                    id: 9,
                    img: rasinCookie,
                    top: "290px",
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
                img: creamCookie,
                top: "25px",
                left: "40px",
              },
              {
                id: 2,
                img: creamCookie,
                top: "70px",
                left: "150px",
              },
              {
                id: 3,
                img: creamCookie,
                top: "130px",
                left: "50px",
              },
              {
                id: 4,
                img: creamCookie,
                top: "180px",
                left: "170px",
              },
              {
                id: 5,
                img: creamCookie,
                top: "250px",
                left: "70px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: heartCookie,
                    top: "25px",
                    left: "50px",
                  },
                  {
                    id: 2,
                    img: heartCookie,
                    top: "40px",
                    left: "150px",
                  },
                  {
                    id: 3,
                    img: heartCookie,
                    top: "100px",
                    left: "20px",
                  },
                  {
                    id: 4,
                    img: heartCookie,
                    top: "110px",
                    left: "150px",
                  },
                  {
                    id: 5,
                    img: heartCookie,
                    top: "160px",
                    left: "90px",
                  },
                  {
                    id: 6,
                    img: heartCookie,
                    top: "180px",
                    left: "190px",
                  },
                  {
                    id: 7,
                    img: heartCookie,
                    top: "210px",
                    left: "30px",
                  },
                  {
                    id: 8,
                    img: heartCookie,
                    top: "250px",
                    left: "150px",
                  },
                  {
                    id: 9,
                    img: heartCookie,
                    top: "280px",
                    left: "90px",
                  },
                  {
                    id: 10,
                    img: heartCookie,
                    top: "300px",
                    left: "200px",
                  },
                ],
              },
            ],
            purpleTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: heartCookie,
                    top: "25px",
                    left: "50px",
                  },
                  {
                    id: 2,
                    img: heartCookie,
                    top: "90px",
                    left: "150px",
                  },
                  {
                    id: 3,
                    img: heartCookie,
                    top: "160px",
                    left: "50px",
                  },
                  {
                    id: 4,
                    img: heartCookie,
                    top: "200px",
                    left: "150px",
                  },
                  {
                    id: 5,
                    img: heartCookie,
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
                img: multiCookie,
                top: "25px",
                left: "40px",
              },
              {
                id: 2,
                img: multiCookie,
                top: "20px",
                left: "150px",
              },
              {
                id: 3,
                img: multiCookie,
                top: "90px",
                left: "80px",
              },
              {
                id: 4,
                img: multiCookie,
                top: "80px",
                left: "170px",
              },
              {
                id: 5,
                img: multiCookie,
                top: "140px",
                left: "20px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: shellCookie,
                    top: "5px",
                    left: "40px",
                  },
                  {
                    id: 2,
                    img: shellCookie,
                    top: "60px",
                    left: "40px",
                  },
                  {
                    id: 3,
                    img: shellCookie,
                    top: "50px",
                    left: "130px",
                  },
                  {
                    id: 4,
                    img: shellCookie,
                    top: "100px",
                    left: "200px",
                  },
                  {
                    id: 5,
                    img: shellCookie,
                    top: "125px",
                    left: "50px",
                  },
                  {
                    id: 6,
                    img: shellCookie,
                    top: "160px",
                    left: "180px",
                  },
                  {
                    id: 7,
                    img: shellCookie,
                    top: "190px",
                    left: "50px",
                  },
                  {
                    id: 8,
                    img: shellCookie,
                    top: "220px",
                    left: "140px",
                  },
                  {
                    id: 9,
                    img: shellCookie,
                    top: "290px",
                    left: "140px",
                  },
                  {
                    id: 10,
                    img: shellCookie,
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
                    img: shellCookie,
                    top: "25px",
                    left: "50px",
                  },
                  {
                    id: 2,
                    img: shellCookie,
                    top: "90px",
                    left: "150px",
                  },
                  {
                    id: 3,
                    img: shellCookie,
                    top: "160px",
                    left: "50px",
                  },
                  {
                    id: 4,
                    img: shellCookie,
                    top: "200px",
                    left: "150px",
                  },
                  {
                    id: 5,
                    img: shellCookie,
                    top: "260px",
                    left: "50px",
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
                    top: "5px",
                    left: "40px",
                  },
                  {
                    id: 2,
                    img: rasinCookie,
                    top: "60px",
                    left: "40px",
                  },
                  {
                    id: 3,
                    img: rasinCookie,
                    top: "50px",
                    left: "130px",
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
                    left: "180px",
                  },
                  {
                    id: 7,
                    img: rasinCookie,
                    top: "190px",
                    left: "50px",
                  },
                  {
                    id: 8,
                    img: rasinCookie,
                    top: "220px",
                    left: "140px",
                  },
                  {
                    id: 9,
                    img: rasinCookie,
                    top: "290px",
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
                    img: rasinCookie,
                    top: "25px",
                    left: "50px",
                  },
                  {
                    id: 2,
                    img: rasinCookie,
                    top: "40px",
                    left: "150px",
                  },
                  {
                    id: 3,
                    img: rasinCookie,
                    top: "100px",
                    left: "20px",
                  },
                  {
                    id: 4,
                    img: rasinCookie,
                    top: "110px",
                    left: "150px",
                  },
                  {
                    id: 5,
                    img: rasinCookie,
                    top: "160px",
                    left: "90px",
                  },
                  {
                    id: 6,
                    img: rasinCookie,
                    top: "180px",
                    left: "190px",
                  },
                  {
                    id: 7,
                    img: rasinCookie,
                    top: "210px",
                    left: "30px",
                  },
                  {
                    id: 8,
                    img: rasinCookie,
                    top: "250px",
                    left: "150px",
                  },
                  {
                    id: 9,
                    img: rasinCookie,
                    top: "280px",
                    left: "90px",
                  },
                  {
                    id: 10,
                    img: rasinCookie,
                    top: "300px",
                    left: "200px",
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
                ],
              },
            ],
          }
    ]
};

export default baseData;